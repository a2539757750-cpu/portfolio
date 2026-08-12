import type { Metadata } from "next";

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

const timeline = [
  ["2025.05 — 2026.08", "梦尔达科技（杭州）有限公司", "视觉设计师"],
  ["2023.11 — 2024.12", "杭州米豆科技有限公司", "3D 设计师"],
  ["2022.03 — 2023.10", "周六福电子商务有限公司", "天猫设计"],
  ["2020.04 — 2021.05", "杭州云策文化创意有限公司", "视觉设计师"],
];

export default function Home() {
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

        <div className="hero-reference shell">
          <header className="hero-reference-top">
            <h1><span>品牌电商</span><span>视觉设计师</span></h1>
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
            <a href="#commercial"><span>商业设计</span><small>COMMERCIAL<br />DESIGN</small></a>
            <a href="#poster"><span>海报设计</span><small>POSTER<br />DESIGN</small></a>
            <a href="#keyvisual"><span>主图设计</span><small>KEY VISUAL<br />DESIGN</small></a>
            <a href="#personal"><span>个人创作</span><small>PERSONAL<br />CREATION</small></a>
            <a href="#integration"><span>作品整合</span><small>WORK<br />INTEGRATION</small></a>
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
            <div className="portrait-shape">王</div>
            <div className="portrait-meta">
              <span>BASED IN HANGZHOU</span>
              <span>06 YEARS EXPERIENCE</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="intro-lead">把产品、品牌与人的感受，<br />翻译成有秩序的视觉。</p>
            <p className="intro-text">
              我是王明光，拥有 6 年视觉设计相关经验。长期专注于电商视觉、品牌内容与三维产品表现，
              擅长从商业目标出发梳理视觉策略，并用稳定、精确的设计语言提升用户体验与传播效率。
              现在，我也在持续把 AI 工具融入创意探索与生产流程。
            </p>
            <div className="contact-lines">
              <a href="tel:17179882652"><span>PHONE</span>171 7988 2652</a>
              <a href="#contact"><span>LOCATION</span>杭州 / HANGZHOU</a>
            </div>
          </div>
        </div>

        <div className="stats" aria-label="个人项目数据">
          <div><b>6</b><span>YEARS<br />工作经验</span></div>
          <div><b>4</b><span>BRANDS<br />品牌经历</span></div>
          <div><b>3D</b><span>FULL STACK<br />三维全流程</span></div>
          <div><b>AI+</b><span>WORKFLOW<br />创意工作流</span></div>
        </div>

        <div className="experience">
          <div className="experience-title">SELECTED EXPERIENCE</div>
          <div className="timeline">
            {timeline.map(([date, company, role]) => (
              <div className="timeline-row" key={company}>
                <time>{date}</time><h3>{company}</h3><span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <div className="section-kicker"><span>02</span> SELECTED WORKS</div>
          <div className="section-heading">
            <h2>精选项目</h2>
            <p>项目图片将在你提供作品素材后替换；当前首版先展示视觉框架与叙事结构。</p>
          </div>
          <div className="projects">
            {projects.map((project) => (
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
            ))}
          </div>
          <div className="category-anchors" aria-label="补充作品分类定位">
            <span id="poster">海报设计 / POSTER DESIGN</span>
            <span id="integration">作品整合 / WORK INTEGRATION</span>
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="section-kicker"><span>03</span> CORE STRENGTHS</div>
        <div className="section-heading strengths-heading">
          <h2>设计不止是<br />“做得好看”。</h2>
          <p>我关注视觉系统能否被理解、被记住，并最终服务于品牌与业务。</p>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.no}>
              <div className="strength-top"><span>{item.no}</span><i>✦</i></div>
              <div>
                <span className="strength-en">{item.en}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="tools-line">
          <span>TOOLS</span>
          <b>PHOTOSHOP</b><i>×</i><b>PREMIERE PRO</b><i>×</i><b>CINEMA 4D</b><i>×</i><b>OCTANE RENDER</b><i>×</i><b>AI TOOLS</b>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-inner">
          <div className="section-kicker light"><span>04</span> CONTACT / COLLABORATION</div>
          <div className="contact-main">
            <p>有项目想法，或者只是想聊聊设计？</p>
            <a href="tel:17179882652">LET&apos;S CREATE<br />SOMETHING <em>REAL.</em> <span>↗</span></a>
          </div>
          <div className="footer-meta">
            <div><span>PHONE</span><a href="tel:17179882652">+86 171 7988 2652</a></div>
            <div><span>LOCATION</span><p>HANGZHOU, CHINA</p></div>
            <div><span>STATUS</span><p><i /> AVAILABLE FOR WORK</p></div>
            <div className="back-top"><a href="#home">BACK TO TOP ↑</a></div>
          </div>
          <div className="copyright">© 2026 WANG MINGGUANG. DESIGNED WITH INTENT.</div>
        </div>
      </footer>
    </main>
  );
}
