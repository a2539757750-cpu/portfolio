"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import { Image, MeshTransmissionMaterial, Preload, useFBO, useGLTF } from "@react-three/drei";
import { easing } from "maath";

const basePath = "/portfolio";

function HeroTexture() {
  const viewport = useThree((state) => state.viewport);

  return (
    <Image
      url={`${basePath}/hero-art.png`}
      scale={[viewport.width * 1.08, viewport.height * 1.08]}
      position={[0, 0, 0]}
      transparent
      opacity={0.96}
      toneMapped={false}
    />
  );
}

function FluidLens() {
  const lens = useRef<THREE.Mesh>(null);
  const cursor = useRef(new THREE.Vector2(0.08, 0.02));
  const buffer = useFBO({ samples: 4 });
  const { nodes } = useGLTF(`${basePath}/assets/3d/lens.glb`) as unknown as {
    nodes: Record<string, THREE.Mesh>;
  };
  const { gl, camera, viewport } = useThree();
  const [backgroundScene] = useState(() => new THREE.Scene());

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      cursor.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!lens.current) return;

    const visible = viewport.getCurrentViewport(camera, [0, 0, 15]);
    const targetX = (cursor.current.x * visible.width) / 2;
    const targetY = (cursor.current.y * visible.height) / 2;
    easing.damp3(lens.current.position, [targetX, targetY, 15], 0.18, delta);

    gl.setRenderTarget(buffer);
    gl.render(backgroundScene, camera);
    gl.setRenderTarget(null);
  });

  return (
    <>
      {createPortal(<HeroTexture />, backgroundScene)}
      <mesh
        ref={lens}
        scale={0.23}
        rotation-x={Math.PI / 2}
        geometry={nodes.Cylinder?.geometry}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          transmission={1}
          roughness={0.04}
          ior={1.16}
          thickness={4.8}
          chromaticAberration={0.09}
          anisotropy={0.035}
          distortion={0.16}
          distortionScale={0.3}
          temporalDistortion={0.06}
          color="#e8ece5"
          attenuationColor="#d9ff43"
          attenuationDistance={2.8}
        />
      </mesh>
      <Preload all />
    </>
  );
}

export default function HeroFluidGlass() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setEnabled(window.innerWidth > 720 && !reducedMotion);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!enabled) return null;

  return (
    <div className="hero-fluid-glass" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 15 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <FluidLens />
      </Canvas>
    </div>
  );
}

useGLTF.preload(`${basePath}/assets/3d/lens.glb`);
