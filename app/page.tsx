import type { Metadata } from "next";
import type { CSSProperties } from "react";
import HeroFluidGlass from "./components/HeroFluidGlass";

const basePath = "/portfolio";
const assetPath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: "王明光 — Visual & AI Designer",
  description:
    "王明光的个人作品集，聚焦视觉设计、AI 创意、电商视觉与三维设计。",
};

const projects = [
  {
    no: "01",
    title: "天猫品牌视觉焕新",
    en: "TMALL / E-COMMERCE ART DIRECTION",
    desc: "围绕活动主题建立统一视觉语言，覆盖主视觉、专题页、Banner 与商品展示场景。",
    tags: ["视觉策略", "电商设计", "活动专题"],
    className: "project-lime",
  },
  {
    no: "02",
    title: "产品 3D 视觉系统",
    en: "C4D / OCTANE PRODUCT VISUALS",
    desc: "以建模、材质、灯光与场景叙事强化产品卖点，形成可持续扩展的视觉资产。",
    tags: ["Cinema 4D", "Octane", "动态影像"],
    className: "project-silver",
  },
  {
    no: "03",
    title: "AI 商业创意实验",
    en: "AI / COMMERCIAL CREATIVE LAB",
    desc: "探索 AI 在概念发散、风格预演与商业视觉生产中的高效协作方式。",
    tags: ["AI 生成", "概念设计", "视觉实验"],
    className: "project-blue",
  },
];

const strengths = [
  {
    no: "01",
    title: "电商视觉策略",
    en: "E-COMMERCE",
    text: "从信息层级、场景情绪到转化路径，不只完成画面，更建立可销售的视觉表达。",
  },
  {
    no: "02",
    title: "三维产品表现",
    en: "3D VISUAL",
    text: "熟练使用 C4D 与 Octane，实现建模、场景、材质、渲染及视频动画的一体化输出。",
  },
  {
    no: "03",
    title: "AI 创意协同",
    en: "AI CREATIVE",
    text: "持续研究前沿工具，把 AI 纳入灵感探索与生产流程，提升创意宽度与交付效率。",
  },
  {
    no: "04",
    title: "品牌视觉构建",
    en: "BRAND SYSTEM",
    text: "将品牌定位转化为稳定、统一且具有辨识度的视觉语言，并延展至多场景触点。",
  },
];

export default function Home() {
  const workGallery = [
    { no: "01", brand: "猫小岛", title: "仓鼠浴沙产品视觉", image: assetPath("/works/pet-hamster-bath.webp") },
    { no: "02", brand: "造砂工坊", title: "木薯猫砂产品视觉", image: assetPath("/works/pet-cassava-litter.webp") },
    { no: "03", brand: "力狼", title: "全价鲜蒸猫粮产品视觉", image: assetPath("/works/pet-steamed-cat-food.webp") },
    { no: "04", brand: "猫小岛", title: "全价犬粮产品视觉", image: assetPath("/works/pet-dog-food.webp") },
    { no: "05", brand: "Z:SEA", title: "海洋男士护理产品视觉", image: assetPath("/works/zsea-ocean-care.webp") },
    { no: "06", brand: "Z:SEA", title: "控油祛痘洁面详情页视觉", image: assetPath("/works/zsea-02.jpg") },
    { no: "07", brand: "Z:SEA", title: "男士面霜详情页视觉", image: assetPath("/works/zsea-03.jpg?v=2") },
    { no: "08", brand: "Z:SEA", title: "男士护肤礼盒详情页视觉", image: assetPath("/works/zsea-04.jpg") },
    { no: "09", brand: "Z:SEA", title: "控油祛痘洁面产品视觉", image: assetPath("/works/zsea-acne-cleanser.webp") },
    { no: "10", brand: "EHD", title: "定型喷雾详情页视觉", image: assetPath("/works/ehd-02.jpg") },
    { no: "11", brand: "EHD", title: "祛痘精华产品详情页视觉", image: assetPath("/works/ehd-03.jpg") },
    { no: "12", brand: "SDX", title: "紧致抗纹产品详情页视觉", image: assetPath("/works/sdx-01.jpg") },
  ];
  const containedWorkImages = new Set([
    assetPath("/works/zsea-ocean-care.webp"),
    assetPath("/works/zsea-acne-cleanser.webp"),
  ]);
  const detailColumns = [
    {
      no: "01",
      title: "仓鼠花香浴沙",
      en: "HAMSTER BATH SAND DETAIL PAGE",
      images: Array.from({ length: 8 }, (_, index) => assetPath(`/detail-pages/pet-bath-${String(index + 1).padStart(2, "0")}.webp`)),
    },
    {
      no: "02",
      title: "木薯植物猫砂",
      en: "CASSAVA CAT LITTER DETAIL PAGE",
      images: Array.from({ length: 8 }, (_, index) => assetPath(`/detail-pages/pet-litter-${String(index + 1).padStart(2, "0")}.webp`)),
    },
    {
      no: "03",
      title: "多效修护系列",
      en: "SKINCARE DETAIL PAGE",
      images: Array.from({ length: 8 }, (_, index) => assetPath(`/detail-pages/skin-${String(index + 1).padStart(2, "0")}.webp`)),
    },
    {
      no: "04",
      title: "男士造型系列",
      en: "MEN'S HAIR DETAIL PAGE",
      images: Array.from({ length: 8 }, (_, index) => assetPath(`/detail-pages/hair-${String(index + 1).padStart(2, "0")}.webp`)),
    },
  ];
  const pageTwoProjects = [
    {
      no: "01",
      title: "鸡牛双拼全价犬粮",
      en: "CHICKEN & BEEF DOG FOOD",
      coverTitle: "鸡牛双拼全价犬粮",
      coverEn: "CHICKEN & BEEF DOG FOOD",
      flowOrder: 3,
      note: "以鲜肉食材、活力犬只与权威背书，建立高蛋白、均衡营养的狗粮产品认知。",
      keywords: "DOG FOOD / NUTRITION / ENERGY",
      slug: "fan",
      coverFile: "fan-cover-new.png",
      detailKey: "dog-food",
      detailCount: 6,
    },
    {
      no: "02",
      title: "木薯玫瑰植物猫砂",
      en: "ROSE CASSAVA CAT LITTER",
      coverTitle: "木薯玫瑰植物猫砂",
      coverEn: "ROSE CASSAVA CAT LITTER",
      flowOrder: 1,
      note: "以东方花卉、木质与柔粉色调，传达玫瑰香气和植物木薯猫砂的清新质感。",
      keywords: "CAT LITTER / ROSE / CASSAVA",
      slug: "device",
      coverFile: "device-cover-latest.png",
      detailKey: "cat-litter",
      detailCount: 6,
    },
    {
      no: "03",
      title: "长肉食谱全价猫粮",
      en: "NUTRIMAX CAT FOOD",
      coverTitle: "长肉食谱全价猫粮",
      coverEn: "NUTRIMAX CAT FOOD",
      flowOrder: 2,
      note: "以家庭陪伴场景与营养食谱信息，呈现长肉食谱猫粮的适口性与肠胃呵护。",
      keywords: "CAT FOOD / NUTRIMAX / GUT CARE",
      slug: "maternal",
      coverFile: "maternal-cover-latest.png",
      detailKey: "cat-food",
      detailCount: 6,
    },
    {
      no: "04",
      title: "怡思丁防晒",
      en: "ISDIN SUN CARE",
      coverTitle: "怡思丁防晒",
      coverEn: "ISDIN SUN CARE",
      flowOrder: 4,
      note: "以高饱和阳光色彩聚焦户外防护，让核心卖点快速被记住。",
      keywords: "SUN CARE / OUTDOOR / PROTECTION",
      slug: "isdin",
      coverFile: "isdin-cover.webp",
      detailKey: null,
      detailCount: 0,
    },
  ].map((project) => ({
    ...project,
    cover: assetPath(`/detail-pages-2-newcover/${project.coverFile}`),
    detailImages: project.detailKey
      ? Array.from(
          { length: project.detailCount },
          (_, index) => assetPath(`/detail-pages-2-latest/split/${project.detailKey}-${String(index + 1).padStart(2, "0")}.webp`),
        )
      : null,
    flowCover: assetPath(`/detail-pages-2/${project.slug}-cover.webp`),
    images: Array.from(
      { length: 6 },
      (_, index) => assetPath(`/detail-pages-2/${project.slug}-${String(index + 1).padStart(2, "0")}.webp`),
    ),
  }));
  const pageTwoFlowProjects = [...pageTwoProjects].sort((a, b) => a.flowOrder - b.flowOrder);
  const pageThreeProjects = [
    {
      no: "01",
      title: "城市理享纯净鱼油猫条",
      en: "FISH OIL CAT TREATS",
      image: assetPath("/detail-pages-3/fish-oil-cat-treat.jpg"),
      detailKey: "fish-oil-cat-treat",
      note: "以鱼油营养、纯净配方和适口体验为核心，建立猫咪功能零食的专业产品认知。",
      keywords: "CAT TREATS / FISH OIL / NUTRITION",
    },
    {
      no: "02",
      title: "长肉营养食谱全价犬粮",
      en: "NUTRIMAX DOG FOOD",
      image: assetPath("/detail-pages-3/nutrimax-dog-food.png"),
      detailKey: "nutrimax-dog-food",
      note: "围绕肠胃养护与科学长肉，将食谱配方、原料营养和品质保障组织为清晰的阅读路径。",
      keywords: "DOG FOOD / GUT CARE / NUTRIMAX",
    },
    {
      no: "03",
      title: "樱花白茶木薯猫砂",
      en: "SAKURA CASSAVA CAT LITTER",
      image: assetPath("/detail-pages-3/sakura-cat-litter.png"),
      detailKey: "sakura-cat-litter",
      note: "通过植物木薯、清新香气与除臭性能信息，呈现自然洁净的猫砂产品体验。",
      keywords: "CAT LITTER / CASSAVA / DEODORIZATION",
    },
    {
      no: "04",
      title: "力狼 e 族优乐伴化毛膏",
      en: "HAIRBALL CONTROL PASTE",
      image: assetPath("/detail-pages-3/hairball-paste.png"),
      detailKey: "hairball-paste",
      note: "聚焦顺畅排毛、肠胃滋润与日常营养补充，建立轻盈、专业的宠物护理视觉。",
      keywords: "HAIRBALL CARE / DIGESTION / CAT HEALTH",
    },
  ].map((project) => ({
    ...project,
    detailImages: Array.from(
      { length: 6 },
      (_, index) => assetPath(`/detail-pages-3/split/${project.detailKey}-${String(index + 1).padStart(2, "0")}.webp`),
    ),
  }));
  const newKvOrder = [6, 13, 3, 4, 1, 2, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18];
  const newKvVisuals = newKvOrder.map(
    (sourceIndex, index) => ({
      no: String(index + 1).padStart(2, "0"),
      image: assetPath(`/kv-visuals/pet-kv-${String(sourceIndex).padStart(2, "0")}.webp`),
      sourceNo: null,
      contain: [0, 1, 2, 3].includes(index),
      tall: index === 0,
      topAlign: index === 0,
      natural: [1, 2, 3].includes(index),
    }),
  );
  const kvVisuals = Array.from(
    { length: 22 },
    (_, index) => ({
      no: String(index + 1).padStart(2, "0"),
      image: assetPath(`/kv-visuals/kv-${String(index + 1).padStart(2, "0")}.webp`),
      sourceNo: String(index + 1).padStart(2, "0"),
    }),
  );
  const kvLeadOrder = ["01", "14", "17", "22"];
  const kvPreludeOrder = ["02", "03"];
  const orderedOriginalKvVisuals = [
    ...kvPreludeOrder.map((no) => kvVisuals[Number(no) - 1]),
    ...kvLeadOrder.map((no) => kvVisuals[Number(no) - 1]),
    ...kvVisuals.filter((visual) => ![...kvPreludeOrder, ...kvLeadOrder].includes(visual.no)),
  ];
  const addedPetKvVisuals = Array.from({ length: 4 }, (_, index) => ({
    image: assetPath(`/kv-visuals/pet-kv-2-${String(index + 1).padStart(2, "0")}.webp`),
    sourceNo: null,
    contain: true,
    topAlign: index >= 2,
  }));
  const orderedKvVisuals = [
    ...addedPetKvVisuals,
    ...newKvVisuals,
    ...orderedOriginalKvVisuals,
  ].map((visual, index) => ({
      ...visual,
      no: String(index + 1).padStart(2, "0"),
    }));
  const mainImageGroups = [
    { title: "Z:SEA / EHD", en: "MEN'S CARE", files: ["main-01.jpg", "main-02.webp", "main-03.jpg", "main-04.webp"] },
    { title: "二硫化硒", en: "SCALP CARE", files: ["main-05.jpg", "main-06.jpg", "main-07.jpg"] },
    { title: "抗皱面膜", en: "SKINCARE MASK", files: ["main-08.png", "main-09.png", "main-10.png", "main-11.png", "main-12.png"] },
    { title: "智能揉腹仪", en: "ABDOMINAL MASSAGER", files: ["main-13.jpg", "main-14.jpg", "main-15.jpg", "main-16.jpg"] },
    { title: "头皮护理", en: "MEDICAL SCALP CARE", files: ["main-17.jpg", "main-18.jpg"] },
    { title: "怡思丁防晒", en: "ISDIN SUN CARE", files: ["main-19.jpg", "main-20.jpg", "main-21.jpg", "main-22.jpg", "main-23.jpg", "main-24.jpg"] },
  ];
  const newMainImages = Array.from({ length: 16 }, (_, index) => ({
    file: `pet-main-${String(index + 1).padStart(2, "0")}.webp`,
    title: index < 5 ? "彩虹食谱" : index < 11 ? "鱼油猫粮" : index < 14 ? "转化视觉" : "宠物营养",
    en: index < 5 ? "RAINBOW RECIPE" : index < 11 ? "FISH OIL CAT FOOD" : index < 14 ? "E-COMMERCE CONVERSION" : "PET NUTRITION",
  }));
  const originalMainImages = mainImageGroups.flatMap((group) =>
    group.files.map((file) => ({ file, title: group.title, en: group.en })),
  );
  const mainImages = [...newMainImages, ...originalMainImages];
  const personalCharacterWorks = [
    { title: "夜游生物", image: "night-creatures.webp" },
    { title: "黄鼬运输机", image: "weasel-machine.webp" },
    { title: "关羽角色设定", image: "guan-warrior.webp" },
    { title: "机械兔角色设定", image: "mechanical-rabbit.webp" },
    { title: "怪诞生物练习", image: "toxic-companions.webp" },
    { title: "机甲猩猩", image: "easy-gorilla.webp" },
  ];
  const personalProductWorks = [
    { title: "日常物件练习", image: "tea-pot.webp" },
    { title: "杯具组合", image: "shaker-lineup.webp" },
    { title: "精华材质实验", image: "serum.webp" },
    { title: "御能系列", image: "perfect-scrolls.webp" },
    { title: "香氛静物", image: "perfume.webp" },
    { title: "数码静物", image: "pencil.webp" },
  ];

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-motion" aria-hidden="true">
          <div className="hero-image" />
          <div className="hero-ghost hero-ghost-one" />
          <div className="hero-ghost hero-ghost-two" />
          <div className="hero-scan" />
        </div>
        <div className="hero-shade" />
        <HeroFluidGlass />

        <div className="hero-reference shell">
          <header className="hero-reference-top">
            <h1><span>品牌 / 电商</span><span>视觉设计师</span></h1>
            <div className="hero-name"><b>王明光</b><i /></div>
          </header>

          <div className="hero-reference-center">
            <div className="hero-role">
              <span>VISUAL DESIGN</span>
              <strong>视觉设计</strong>
              <div className="dot-cluster"><i /><i /><i /></div>
            </div>
            <div className="hero-portfolio">
              <span>SELECTED WORKS</span>
              <strong>作品集</strong>
              <p>（2026）</p>
            </div>
            <div className="hero-side-copy">
              <p>视觉设计师<br /><b>PORTFOLIO 2026</b></p>
              <p>作品集<br /><b>VISUAL DESIGN</b></p>
              <strong>WMG</strong>
            </div>
          </div>

          <nav className="category-nav" aria-label="作品分类">
            <a href="#commercial"><span>详情页设计</span><small>DETAIL PAGE<br />DESIGN</small></a>
            <a href="#keyvisual-gallery"><span>主 KV 设计</span><small>KEY VISUAL<br />DESIGN</small></a>
            <a href="#keyvisual"><span>主图设计</span><small>KEY VISUAL<br />DESIGN</small></a>
            <a href="#adoption-event"><span>西湖银泰宠物领养活动</span><small>PET ADOPTION<br />CAMPAIGN</small></a>
            <a href="#personal"><span>个人创作</span><small>PERSONAL<br />CREATION</small></a>
          </nav>

          <div className="hero-reference-foot">
            <span>6 YEARS EXPERIENCE</span>
            <span>HANGZHOU · CHINA</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-kicker"><span>01</span> PROFILE / EXPERIENCE</div>
        <div className="about-grid">
          <div className="portrait" aria-label="王明光的视觉化头像占位">
            <img className="portrait-image" src={assetPath("/portrait-guagua-light.png")} alt="瓜的个人形象" />
            <div className="portrait-wechat" aria-label="微信二维码">
              <img src={assetPath("/wechat-qr.png")} alt="王明光的微信二维码" />
            </div>
            <div className="portrait-meta">
              <span>BASED IN HANGZHOU</span>
              <span>06 YEARS EXPERIENCE</span>
            </div>
          </div>

          <div className="about-copy">
            <h2 className="intro-lead"><span>个人简介</span><span>工作经历</span></h2>
            <div className="intro-text">
              <p>做了 6 年视觉设计，主要专注电商视觉、品牌内容和三维产品表现。比起单纯把画面“做得好看”，我更关注设计怎么解决实际的商业问题。未来希望继续深耕快消品领域，尤其聚焦宠物行业，用设计积累长期的品牌价值，做出真正有影响力的作品。</p>
              <p>服务过海洋至尊、EHD、SDX、周六福、怡思丁、力狼、奥丁 NEO、造砂工坊、城市理享等品牌，接触过宠物食品与用品、美妆、医疗器械、男士洗护、黄金珠宝等不同品类。目前也在持续把 AI 融入自己的创意和设计工作流，希望让想法更快、更好地落地。</p>
            </div>
            <div className="compact-experience" aria-label="工作经历">
              <span className="compact-experience-label">WORK EXPERIENCE</span>
              <div><time>2025.12 — 至今</time><strong>资深电商设计</strong><p>杭州有熊（宠物食品与用品）</p></div>
              <div><time>2025.03 — 2025.12</time><strong>品牌视觉设计</strong><p>梦尔达科技（美妆个护）</p></div>
              <div><time>2023.11 — 2024.12</time><strong>天猫主设</strong><p>怡思丁防晒（西班牙防晒品牌）</p></div>
              <div><time>2021.05 — 2023.10</time><strong>天猫主设</strong><p>周六福电子商务（珠宝品牌）</p></div>
            </div>
            <div className="contact-lines">
              <a href="tel:17179882652"><span>PHONE</span>171 7988 2652</a>
              <a href="#contact"><span>LOCATION</span>杭州 / HANGZHOU</a>
            </div>
          </div>
        </div>

        <div className="brand-logo-space" aria-label="品牌 Logo 展示预留区">
          <span className="brand-logo-label">服务过的品牌</span>
          <div className="brand-logo-grid">
            <div className="brand-logo-card brand-sdx"><img src={assetPath("/brands/marks/sdx.png")} alt="SDX 拾度" /></div>
            <div className="brand-logo-card brand-isdin"><img src={assetPath("/brands/marks/isdin.png")} alt="ISDIN 怡思丁" /></div>
            <div className="brand-logo-card brand-zhou-liu-fu"><img src={assetPath("/brands/marks/zhou-liu-fu.png")} alt="周六福" /></div>
            <div className="brand-logo-card brand-ehd"><img src={assetPath("/brands/marks/ehd.png")} alt="EHD" /></div>
            <div className="brand-logo-card brand-zisea"><img src={assetPath("/brands/marks/zisea.png")} alt="ZISEA" /></div>
          </div>
        </div>
        <div className="stats-wrap">
          <div className="stats" aria-label="个人项目数据">
            <div><b>6</b><span>YEARS<br />工作经验</span></div>
            <div><b>5</b><span>BRANDS<br />品牌经历</span></div>
            <div><b>3D</b><span>FULL STACK<br />三维全流程</span></div>
            <div><b>AI+</b><span>WORKFLOW<br />创意工作流</span></div>
          </div>
        </div>

      </section>

      <section className="work section" id="work">
        <div className="shell">
          <div className="section-kicker"><span>02</span> DETAIL PAGE VISUALS</div>
          <div className="section-heading">
            <h2>详情页视觉</h2>
            <p>电商详情页视觉设计，以统一网格呈现不同品牌、品类与视觉风格。</p>
          </div>
          <div className="projects">
            <div className="work-gallery">
              {workGallery.map((project) => (
                <article
                  className={`work-tile ${containedWorkImages.has(project.image) ? "work-tile-contain" : ""} ${project.image.includes("ehd-02") ? "work-tile-focus-top" : ""}`}
                  key={project.no}
                  id={project.no === "01" ? "commercial" : undefined}
                  style={containedWorkImages.has(project.image)
                    ? ({ "--work-tile-image": `url("${project.image}")` } as CSSProperties)
                    : undefined}
                >
                  <img src={project.image} alt={`${project.brand} ${project.title}`} />
                  <div className="work-tile-caption">
                    <span>{project.no} / {project.brand}</span>
                    <h3>{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            {/* {projects.map((project) => (
              <article
                className={`project-card ${project.className}`}
                key={project.no}
                id={project.no === "01" ? "commercial" : project.no === "02" ? "keyvisual" : "personal"}
              >
                <div className="project-visual" aria-hidden="true">
                  <div className="scene-label">WANG MINGGUANG © 2026</div>
                  <div className="scene-orbit" />
                  <div className="scene-object"><i /><i /><i /></div>
                  <div className="scene-code">{project.no} / VISUAL STUDY</div>
                </div>
                <div className="project-info">
                  <div className="project-number">{project.no}</div>
                  <div>
                    <span className="project-en">{project.en}</span>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              </article>
            ))} */}
          </div>
          <div className="project-notes" id="integration" aria-label="项目思考与角色说明">
            <div className="project-note project-note-intro">
              <span>PROJECT OVERVIEW / 项目概述</span>
              <h3>让卖点更快被看见，<br />让品牌表达更完整。</h3>
            </div>
            <div className="project-note">
              <span>01 / 项目背景</span>
              <p>围绕男士洗护、美妆个护等不同品类，完成多组电商详情页视觉。重点是把复杂卖点整理成用户能快速理解的浏览顺序。</p>
            </div>
            <div className="project-note">
              <span>02 / 我的角色</span>
              <p>负责视觉方向、信息结构与关键页面设计，从卖点梳理、版式规范到主视觉落地，兼顾品牌调性与电商转化需求。</p>
            </div>
            <div className="project-note project-note-wide" id="poster">
              <span>03 / 设计思考</span>
              <p>先明确产品最需要被记住的利益点，再利用层级、节奏与色彩区分信息。不同品牌保留各自气质，同时让整组页面清晰、统一并可延展。</p>
            </div>
            <div className="project-note project-note-keywords">
              <span>04 / 关键词</span>
              <p>详情页设计　信息结构　品牌表达　长图阅读　转化视觉</p>
            </div>
          </div>
          <div className="detail-spreads" aria-label="完整详情页设计展示">
            <div className="detail-spreads-head">
              <span>FULL DETAIL PAGES / 完整详情页</span>
              <p>将长页面拆分为连续章节，在保留原始阅读顺序的同时，让不同信息段落形成更清晰的视觉节奏。</p>
            </div>
            <div className="detail-spreads-grid">
              {detailColumns.map((column) => (
                <section className={`detail-spread-column detail-spread-${column.no}`} key={column.no}>
                  <header>
                    <span>{column.no} / {column.en}</span>
                    <h3>{column.title}</h3>
                  </header>
                  <div className="detail-spread-flow">
                    {[column.images.slice(0, 4), column.images.slice(4)].map((track, trackIndex) => (
                      <div className="detail-spread-track" key={`${column.no}-${trackIndex}`}>
                        {track.map((image, index) => (
                          <figure key={image}>
                            <img
                              src={image}
                              alt={`${column.title}详情页第 ${trackIndex * 4 + index + 1} 段`}
                              loading="lazy"
                            />
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="detail-page-two section" id="strengths">
        <div className="shell">
          <div className="section-kicker"><span>03</span> DETAIL PAGE VISUAL / PAGE 2</div>
          <div className="section-heading page-two-heading">
            <h2>详情页视觉<br /><em>PAGE 2</em></h2>
            <p>围绕猫粮、猫砂、狗粮与防晒品类，以场景化首屏快速建立产品记忆，并通过清晰的信息层级呈现核心卖点与品牌视觉。</p>
          </div>

          <div className="page-two-covers" aria-label="四组详情页首屏设计">
            {pageTwoProjects.map((project) => (
              <article className={`page-two-cover page-two-cover-${project.slug}`} key={project.slug}>
                <div className="page-two-cover-image">
                  <img src={project.cover} alt={`${project.coverTitle}详情页首屏`} />
                </div>
                <div className="page-two-cover-meta">
                  <span>{project.no} / {project.coverEn}</span>
                  <h3>{project.coverTitle}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="page-two-flow-head">
            <span>CONTINUOUS DETAIL / 连续详情</span>
            <p>四套页面按原始阅读顺序向下展开，切片只用于编排展示，不打断每套详情页的内容逻辑。</p>
          </div>
          <div className="page-two-flows" aria-label="四组完整详情页连续展示">
            {pageTwoFlowProjects.map((project, projectIndex) => (
              <section className="page-two-column" key={`${project.slug}-flow`}>
                <header>
                  <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                  <div><b>{project.title}</b><small>{project.en}</small></div>
                </header>
                {project.detailImages ? (
                  <div className="page-two-track-grid">
                    {[project.detailImages.slice(0, 3), project.detailImages.slice(3)].map((track, trackIndex) => (
                      <div className="page-two-track" key={`${project.slug}-latest-track-${trackIndex + 1}`}>
                        {track.map((image, index) => (
                          <figure key={image}>
                            <img
                              src={image}
                              alt={trackIndex === 0 && index === 0
                                ? `${project.title}完整首屏展示`
                                : `${project.title}详情页连续内容`}
                              loading="lazy"
                            />
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="page-two-track-grid">
                    {[[project.flowCover, ...project.images.slice(0, 3)], project.images.slice(3)].map((track, trackIndex) => (
                      <div className="page-two-track" key={`${project.slug}-track-${trackIndex + 1}`}>
                        {track.map((image, index) => (
                          <figure key={image}>
                            <img
                              src={image}
                              alt={trackIndex === 0 && index === 0
                                ? `${project.title}完整首屏展示`
                                : `${project.title}详情页连续内容`}
                              loading="lazy"
                            />
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                <div className="page-two-filler" aria-label={`${project.title}视觉关键词`}>
                  <div className="page-two-filler-copy">
                    <span>{String(projectIndex + 1).padStart(2, "0")} / VISUAL SYSTEM</span>
                    <p>{project.note}</p>
                  </div>
                  <div className="page-two-filler-foot">
                    <i aria-hidden="true" />
                    <small>{project.keywords}</small>
                    <b aria-hidden="true">{String(projectIndex + 1).padStart(2, "0")}</b>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-page-three section" id="detail-page-three">
        <div className="shell">
          <div className="section-kicker"><span>03</span> DETAIL PAGE VISUAL / PAGE 3</div>
          <div className="section-heading page-two-heading">
            <h2>详情页视觉<br /><em>PAGE 3</em></h2>
            <p>围绕猫咪零食、犬粮、猫砂与宠物营养护理，以统一的双列网格呈现四组电商详情页视觉。</p>
          </div>

          <div className="page-two-covers" aria-label="详情页 03 四组首屏设计">
            {pageThreeProjects.map((project) => (
              <article className="page-two-cover page-three-cover" key={`${project.no}-cover`}>
                <div className="page-two-cover-image">
                  <img src={project.image} alt={`${project.title}详情页首屏`} />
                </div>
                <div className="page-two-cover-meta">
                  <span>{project.no} / {project.en}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="page-two-flow-head">
            <span>CONTINUOUS DETAIL / 连续详情</span>
            <p>四套页面按首图顺序向下展开，切片仅用于双列编排展示，不改变每套详情页原有的内容顺序。</p>
          </div>
          <div className="page-two-flows" aria-label="详情页 03 四组完整连续展示">
            {pageThreeProjects.map((project, projectIndex) => (
              <section className="page-two-column" key={`${project.detailKey}-flow`}>
                <header>
                  <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                  <div><b>{project.title}</b><small>{project.en}</small></div>
                </header>
                <div className="page-two-track-grid">
                  {[project.detailImages.slice(0, 3), project.detailImages.slice(3)].map((track, trackIndex) => (
                    <div className="page-two-track" key={`${project.detailKey}-track-${trackIndex + 1}`}>
                      {track.map((image, index) => (
                        <figure key={image}>
                          <img
                            src={image}
                            alt={trackIndex === 0 && index === 0
                              ? `${project.title}完整首屏展示`
                              : `${project.title}详情页连续内容`}
                            loading="lazy"
                          />
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="page-two-filler" aria-label={`${project.title}视觉关键词`}>
                  <div className="page-two-filler-copy">
                    <span>{String(projectIndex + 1).padStart(2, "0")} / VISUAL SYSTEM</span>
                    <p>{project.note}</p>
                  </div>
                  <div className="page-two-filler-foot">
                    <i aria-hidden="true" />
                    <small>{project.keywords}</small>
                    <b aria-hidden="true">{String(projectIndex + 1).padStart(2, "0")}</b>
                  </div>
                </div>
              </section>
            ))}
          </div>

        </div>
      </section>

      <section className="kv-showcase section" id="keyvisual-gallery">
        <div className="shell">
          <div className="section-kicker light"><span>04</span> KEY VISUAL DESIGN / 主 KV 视觉</div>
          <div className="section-heading kv-heading">
            <h2>主 KV<br /><em>视觉设计</em></h2>
            <p>围绕品牌节点、产品卖点与活动主题建立主视觉，让信息在第一眼被看见，也让不同营销场景保持一致的品牌记忆。</p>
          </div>

          <div className="kv-gallery" aria-label="主 KV 视觉作品展示">
            {orderedKvVisuals.map((visual) => (
              <article className={`kv-card ${visual.sourceNo && kvLeadOrder.includes(visual.sourceNo) ? "kv-card-contain" : ""} ${"contain" in visual && visual.contain ? "kv-card-fit" : ""} ${"tall" in visual && visual.tall ? "kv-card-tall" : ""} ${"topAlign" in visual && visual.topAlign ? "kv-card-top" : ""} ${"natural" in visual && visual.natural ? "kv-card-natural" : ""}`} key={visual.no}>
                <figure>
                  <img className="kv-card-backdrop" src={visual.image} alt="" aria-hidden="true" loading="lazy" />
                  <img
                    className={`kv-card-art ${visual.sourceNo === "07" ? "kv-card-art-lift-60" : visual.sourceNo && ["16", "21"].includes(visual.sourceNo) ? "kv-card-art-lift" : ""}`}
                    src={visual.image}
                    alt={`主 KV 视觉作品 ${visual.no}`}
                    loading="lazy"
                  />
                </figure>
                <div className="kv-card-meta">
                  <span>{visual.no}</span>
                  <p>CAMPAIGN VISUAL / E-COMMERCE KV</p>
                  <i aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="endorser-system adoption-system section" id="adoption-event">
        <div className="shell endorser-inner">
          <div className="section-kicker endorser-kicker"><span>05</span> PUBLIC WELFARE CAMPAIGN / 西湖银泰百货宠物领养活动</div>

          <div className="endorser-heading">
            <div>
              <small>CASE STUDY / 城市理享 × 西湖银泰百货</small>
              <h2>理享喵生，<br />让领养成为<em>城市日常。</em></h2>
            </div>
            <div className="endorser-intro">
              <b>从联合发起，到商场里的真实相遇</b>
              <p>活动由城市理享、银泰百货杭州西湖店、和猫住与它基金共同发起。以“开始和猫住”为沟通核心，从线上预热导流到线下领养互动，让公益信息被看见，也促成真实连接。</p>
            </div>
          </div>

          <div className="endorser-overview">
            <div className="endorser-summary">
              <span>01 / PROJECT OVERVIEW</span>
              <h3>少一点流浪，<br />多一点安心。</h3>
              <dl>
                <div><dt>线上预热</dt><dd>社媒预告 / 猫咪档案 / 活动倒计时</dd></div>
                <div><dt>线下触达</dt><dd>商场导视 / 主题展板 / 领养咨询</dd></div>
                <div><dt>活动玩法</dt><dd>公益问答 / 集章打卡 / 合影分享</dd></div>
                <div><dt>传播路径</dt><dd>线上种草 → 到店参与 → 社交扩散</dd></div>
              </dl>
              <p>用统一视觉串联预热、到店与分享，让活动不止停留在线下陈列，而是形成一条简洁完整的参与路径。</p>
            </div>
            <figure className="endorser-overview-art">
              <img src={assetPath("/adoption-event/main-kv.webp")} alt="西湖银泰百货理享喵生宠物领养活动主视觉" loading="lazy" />
            </figure>
          </div>

          <div className="endorser-system-head">
            <div><span>02</span><p>CHECK-IN EXPERIENCE<br />活动打卡区</p></div>
            <p>四幅横向画面共同组成打卡区内容：从活动主题、养猫生活场景到公益游戏提示，让现场既适合停留拍照，也能自然传达领养理念。</p>
          </div>

          <div className="endorser-guides">
            <figure>
              <img src={assetPath("/adoption-event/identity.webp")} alt="理享喵生活动主题与联合品牌标识" loading="lazy" />
              <figcaption><span>01</span><p>活动主题 / 联名识别</p><i /></figcaption>
            </figure>
            <figure>
              <img src={assetPath("/adoption-event/hero.webp")} alt="理享喵生活动打卡区猫砂场景插画" loading="lazy" />
              <figcaption><span>02</span><p>理想养猫生活 / 场景插画</p><i /></figcaption>
            </figure>
            <figure>
              <img src={assetPath("/adoption-event/play-zone.webp")} alt="宠物领养活动游戏打卡区视觉" loading="lazy" />
              <figcaption><span>03</span><p>游戏打卡区 / 公益互动</p><i /></figcaption>
            </figure>
            <figure>
              <img src={assetPath("/adoption-event/illustration.webp")} alt="理享喵生东方生活感猫咪插画" loading="lazy" />
              <figcaption><span>04</span><p>开始和猫住 / 生活方式表达</p><i /></figcaption>
            </figure>
          </div>

          <div className="endorser-system-head adoption-material-head">
            <div><span>03</span><p>OFFLINE VISUAL SYSTEM<br />线下物料系统</p></div>
            <p>将同一套主题延展至展板、挑空挂旗、横条幅与互动打卡区，让顾客从商场远端到活动现场都能连续识别活动信息。</p>
          </div>

          <div className="adoption-materials">
            <figure className="adoption-board-sheet">
              <img src={assetPath("/adoption-event/boards.webp")} alt="宠物领养活动八组主题展板设计" loading="lazy" />
              <figcaption><span>01</span><p>主题展板 / 猫咪生活场景</p></figcaption>
            </figure>
            <figure className="adoption-flag">
              <img src={assetPath("/adoption-event/flag-love.webp")} alt="让爱永不再流浪主题挂旗" loading="lazy" />
              <figcaption><span>02</span><p>让爱永不再流浪</p></figcaption>
            </figure>
            <figure className="adoption-flag">
              <img src={assetPath("/adoption-event/flag-together.webp")} alt="和猫住共赴理享主题挂旗" loading="lazy" />
              <figcaption><span>03</span><p>和猫住，共赴理享</p></figcaption>
            </figure>
            <figure className="adoption-flag">
              <img src={assetPath("/adoption-event/flag-living-01.webp")} alt="理享喵生开始和猫住主题吊旗" loading="lazy" />
              <figcaption><span>04</span><p>给流浪画上句号</p></figcaption>
            </figure>
            <figure className="adoption-flag">
              <img src={assetPath("/adoption-event/flag-living-02.webp")} alt="理享喵生公益领养主题吊旗" loading="lazy" />
              <figcaption><span>05</span><p>给理享写下冒号</p></figcaption>
            </figure>
            <div className="adoption-wide-stack">
              <div className="adoption-material-note">
                <span>COMMUNICATION IDEA</span>
                <h3>从“看见”流浪，<br />走向“开始和猫住”。</h3>
                <p>传播不是单向倡议，而是用游戏、打卡与真实领养信息，让逛商场的人愿意停下来、了解并参与。</p>
              </div>
              <figure className="adoption-banner">
                <img src={assetPath("/adoption-event/banner.webp")} alt="理享喵生线下活动横条幅" loading="lazy" />
                <figcaption><span>06</span><p>商场横幅 / 远距离识别</p></figcaption>
              </figure>
            </div>
          </div>

          <div className="endorser-application adoption-application">
            <div className="endorser-application-copy">
              <span>04 / LIVE IMPLEMENTATION</span>
              <h3>让设计进入现场，<br />也让公益被真实看见。</h3>
              <p>成套物料最终落地于西湖银泰百货。挑空挂旗建立远距离氛围，展板承接活动说明与领养信息，统一的米色、墨棕与亮黄色在复杂商业环境中保持温度与识别度。</p>
              <div><b>CO-BRANDING</b><b>ADOPTION</b><b>PUBLIC WELFARE</b><b>OFFLINE</b></div>
            </div>
            <figure>
              <img src={assetPath("/adoption-event/onsite.webp")} alt="西湖银泰百货宠物领养活动线下实拍" loading="lazy" />
            </figure>
          </div>

          <div className="endorser-footerline"><span>理享喵生 / PET ADOPTION CAMPAIGN</span><i /><span>WEST LAKE INTIME</span></div>
        </div>
      </section>

      <section className="main-image-showcase section" id="keyvisual">
        <div className="shell">
          <div className="section-kicker light"><span>06</span> E-COMMERCE MAIN IMAGE / 主图设计</div>
          <div className="main-image-heading">
            <h2>主图设计</h2>
            <p>围绕产品核心卖点组织首屏信息，在有限画面内平衡文字、产品与使用场景，让重点能够快速被看见。</p>
          </div>

          <div className="main-image-grid" aria-label="主图设计作品展示">
            {mainImages.map((item, index) => {
              const no = String(index + 1).padStart(2, "0");
              const image = assetPath(`/main-images/${item.file}`);
              return (
                <article className="main-image-card" key={item.file}>
                  <figure>
                    <img className="main-image-backdrop" src={image} alt="" aria-hidden="true" loading="lazy" />
                    <img className="main-image-art" src={image} alt={`${item.title}主图设计 ${no}`} loading="lazy" />
                  </figure>
                  <div><span>{no}</span><p>{item.en}</p><i /></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="personal-creation section" id="personal">
        <div className="shell personal-inner">
          <div className="section-kicker personal-kicker"><span>07</span> PERSONAL PRACTICE &amp; CREATION / 个人练习与创作</div>
          <div className="personal-heading">
            <div>
              <span>SELF-INITIATED PRACTICE / 3D &amp; VISUAL</span>
              <h2>个人练习<br />与创作</h2>
            </div>
            <p>工作之外，我会用三维练习角色、材质和产品场景。没有固定命题，更多是在一次次建模、灯光和构图里，找到自己真正喜欢的画面。</p>
          </div>

          <div className="personal-subhead">
            <span>CHARACTER &amp; CONCEPT / 角色与概念创作</span>
            <p>角色、机械与想象生物放在同一组中，让造型语言和个人偏好更集中地呈现。</p>
          </div>
          <div className="personal-gallery-grid" aria-label="角色与概念创作">
            {personalCharacterWorks.map((item) => {
              const image = assetPath(`/personal-creation/${item.image}`);
              return (
                <article className="personal-gallery-card" key={item.image}>
                  <figure>
                    <img className="personal-gallery-backdrop" src={image} alt="" aria-hidden="true" loading="lazy" />
                    <img className="personal-gallery-art" src={image} alt={item.title} loading="lazy" />
                  </figure>
                </article>
              );
            })}
          </div>

          <div className="personal-subhead personal-study-head">
            <span>PRODUCT &amp; MATERIAL / 产品与材质练习</span>
            <p>产品场景、材质和灯光练习集中展示，画幅统一对齐，同时保留每张作品的完整构图。</p>
          </div>
          <div className="personal-gallery-grid personal-product-gallery" aria-label="产品与材质练习">
            {personalProductWorks.map((item) => {
              const image = assetPath(`/personal-creation/${item.image}`);
              return (
                <article className="personal-gallery-card personal-product-card" key={item.image}>
                  <figure>
                    <img className="personal-gallery-backdrop" src={image} alt="" aria-hidden="true" loading="lazy" />
                    <img className="personal-gallery-art" src={image} alt={item.title} loading="lazy" />
                  </figure>
                </article>
              );
            })}
          </div>

          <div className="personal-footerline"><span>PERSONAL ARCHIVE / 2026</span><i /><span>KEEP EXPLORING</span></div>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-inner">
          <div className="section-kicker light"><span>08</span> CONTACT / COLLABORATION</div>
          <div className="contact-topline" aria-label="作品集信息">
            <span>PORTFOLIO / 2026</span>
            <span>VISUAL WORK COLLECTION</span>
            <span>WANG MINGGUANG</span>
          </div>
          <div className="contact-main">
            <div className="contact-message">
              <span>THANK YOU FOR WATCHING</span>
              <h2>
                <span>感谢看到这里。</span>
                <span><em>期待与您的进一步沟通</em><b aria-hidden="true">🤝</b></span>
              </h2>
              <p>如果你正在寻找品牌视觉、电商设计或 AI 创意方向的合作，欢迎联系我。也期待听到你的项目与想法。</p>
            </div>
            <a className="contact-call" href="tel:17179882652" aria-label="拨打王明光的电话">
              <span>PHONE / DIRECT</span>
              <strong>171 7988 2652</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
          <div className="footer-meta">
            <div><span>PHONE</span><a href="tel:17179882652">+86 171 7988 2652</a></div>
            <div><span>LOCATION</span><p>HANGZHOU, CHINA</p></div>
            <div><span>FOCUS</span><p>BRAND / E-COMMERCE / AI</p></div>
          </div>
          <div className="copyright">© 2026 WANG MINGGUANG · VISUAL DESIGN PORTFOLIO</div>
          <a className="footer-return-top" href="#home" aria-label="返回页面顶部">
            <span>返回顶部</span>
            <small>BACK TO TOP</small>
            <i aria-hidden="true">↑</i>
          </a>
        </div>
      </footer>
    </main>
  );
}
