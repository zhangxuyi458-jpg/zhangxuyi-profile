const research = [
  {
    period: "2026.04 — 至今",
    role: "开放课题 · 主要参与人",
    title: "黄淮海平原耕地质量综合评价及安全风险管控",
    body: "围绕耕地粮食生产与生态效应面临的复合风险，开展耕地“生产—生态”质量综合评价、安全风险定量评估及影响机理解析。参与课题设计，负责团队协作与项目统筹。",
  },
  {
    period: "2025.04 — 至今",
    role: "研究课题 · 课题负责人",
    title: "不同农田管理措施下生产—生态效应权衡分析及情景优化",
    body: "主导课题全流程设计、数据分析、结果输出与可视化，开展生产—生态效应权衡、影响机制分析及多目标情景优化。",
  },
  {
    period: "2024.04 — 至今",
    role: "国家重点研发计划子课题 · 参与人",
    title: "农情信息空天地高精度高时效智能监测系统研发与应用",
    body: "关注农业数字孪生的技术发展与应用现状，完成文献搜集、系统梳理与综述撰写。",
  },
  {
    period: "2023.04 — 2023.07",
    role: "科研训练 · 参与人",
    title: "检测汞离子的比率荧光探针研究",
    body: "制备低检出限、高灵敏度的比例荧光探针并应用于水环境检测；负责数据分析处理及 Origin 研究制图。",
  },
];

const publications = [
  {
    title: "农业数字孪生概念内涵、技术框架与应用进展",
    journal: "中国农业资源与区划",
    href: "https://link.cnki.net/urlid/11.3513.S.20250217.1153.004",
  },
  {
    title: "基于氮化碳量子点 / 罗丹明 B 系统检测汞离子的比率荧光探针",
    journal: "应用化学",
    href: "https://kns.cnki.net/kns8s/defaultresult/index?kw=基于氮化碳量子点%2F罗丹明B系统检测汞离子的比率荧光探针",
  },
  {
    title: "基于供需关系的固碳服务全程耦合流动机制及补偿方案探究",
    journal: "生态学报",
    href: "https://kns.cnki.net/kns8s/defaultresult/index?kw=基于供需关系的固碳服务全程耦合流动机制及补偿方案探究",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top">XY.</a>
        <div className="navLinks">
          <a href="#about">关于我</a>
          <a href="#education">教育背景</a>
          <a href="#research">科研经历</a>
          <a href="#achievements">成果展示</a>
          <a href="#skills">技能与特长</a>
          <a href="#explore">学习与探索</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="hello"><i /> HELLO / 你好</p>
          <h1>Hi，<br />我是张旭艺</h1>
          <p className="intro">生态学硕士研究生，具备农业生态系统评价、空间数据分析及科研项目管理经验。熟练掌握R语言、ArcGIS及多源数据分析技术，具备数据处理、统计建模、空间分析与科研可视化能力。主持农田生产–生态效应权衡研究，参与国家重点研发计划，具有独立开展科研设计、数据分析和成果输出的能力。</p>
          <div className="heroActions">
            <a className="primary" href="./files/zhang-xuyi-resume.pdf" download="张旭艺_个人简历.pdf">下载个人简历 <span>↓</span></a>
            <a className="secondary" href="#about">联系我</a>
          </div>
        </div>
        <div className="portraitWrap">
          <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
          <img src="./images/life.png" alt="张旭艺个人生活照" />
          <div className="statusCard"><span>NOW</span><b>生态学硕士</b><small>正在进行农田生态研究</small></div>
        </div>
      </section>

      <section className="marquee" aria-label="研究方向"><div>生态学 · 农业生态系统评价 · 空间数据分析 · 科研可视化 · 生产—生态权衡 ·</div></section>

      <section className="about shell section" id="about">
        <div className="ecologyBoard">
          <header className="ecologyIntro">
            <p>01 / ABOUT ME</p><h2>空间生态探索者</h2><span>SPATIAL ECOLOGIST</span>
            <small>用空间视角理解农业　｜　用科学方法寻找人与自然的平衡</small>
          </header>
          <div className="ecologyGrid">
            <article className="profilePanel identityPanel">
              <div className="panelTitle"><i>●</i><div><h3>我的身份</h3><span>RESEARCH IDENTITY</span></div></div>
              <h4>生态系统研究者 <em>🌱</em></h4>
              <ul><li>中国农业科学院生态学硕士研究生</li><li>中共党员</li><li>聚焦农业生态系统可持续发展</li></ul>
              <p className="panelNote">从空间数据中探索人与自然的平衡</p>
            </article>
            <div className="aboutCenter">
              <div className="aboutOrbit orbitA" /><div className="aboutOrbit orbitB" />
              <span className="orbitLabel labelData">数据分析<small>Data Analysis</small></span>
              <span className="orbitLabel labelSpace">空间推演<small>Spatial Modeling</small></span>
              <span className="orbitLabel labelEco">生态视角<small>Ecological Perspective</small></span>
              <span className="orbitLabel labelStory">科学表达<small>Scientific Communication</small></span>
              <div className="aboutAvatar"><img src="./images/about-avatar-3d.png" alt="张旭艺卡通立体形象" /><b>Hi! 这是我</b></div>
            </div>
            <article className="profilePanel skillPanel">
              <div className="panelTitle mint"><i>✎</i><div><h3>我的能力</h3><span>RESEARCH SKILLS</span></div></div>
              <h4><strong>数据</strong> × <strong>空间</strong> × <strong>表达</strong></h4>
              <ul><li><b>R语言</b><small>数据分析与建模</small></li><li><b>ArcGIS / QGIS</b><small>空间分析与制图</small></li><li><b>多源遥感数据</b><small>处理与融合分析</small></li><li><b>科研可视化</b><small>图表设计与可视化表达</small></li></ul>
              <p className="panelNote green">将复杂问题转化为清晰故事</p>
            </article>
            <article className="profilePanel practicePanel">
              <div className="panelTitle violet"><i>▲</i><div><h3>我的实践</h3><span>RESEARCH PRACTICE</span></div></div>
              <ul><li>主持研究课题</li><li>参与国家重点研发计划</li><li>SCI论文研究与投稿</li><li>科研成果可视化设计</li><li>学术会议报告与交流</li></ul>
              <p className="panelNote purple">热爱科研，注重实证，乐于分享</p>
            </article>
            <article className="profilePanel focusPanel">
              <div className="panelTitle mint"><i>◎</i><div><h3>我的关注</h3><span>RESEARCH FOCUS</span></div></div>
              <ul><li><b>农业生态系统</b><small>农田管理与生态过程</small></li><li><b>生产—生态权衡</b><small>识别机制与优化路径</small></li><li><b>空间智能分析</b><small>模型构建与空间模拟</small></li></ul>
              <p className="panelNote green">用科学回应问题，用行动改善未来</p>
            </article>
          </div>
          <blockquote className="philosophy"><span>★</span><div><b>我的理念 <small>RESEARCH PHILOSOPHY</small></b><p>我相信，每一组数据背后，都隐藏着自然系统的故事。</p><em>Behind every dataset lies a story of nature.</em></div></blockquote>
          <div className="contactBar"><b>联系我 <small>FIND ME</small></b><a href="mailto:2064107153@qq.com"><span>✉</span><div>2064107153@qq.com<small>Email</small></div></a><a href="tel:+8613653547751"><span>☎</span><div>+86 136 5354 7751<small>Phone</small></div></a></div>
        </div>
      </section>

      <section className="education section" id="education">
        <div className="shell">
          <div className="sectionLabel">02 / EDUCATION</div>
          <div className="sectionHeading"><h2>教育背景</h2><p>持续学习，也持续把知识带回真实的生态问题现场。</p></div>
          <div className="eduGrid">
            <article className="eduCard"><div className="eduImage"><img src="./images/caas-campus.jpg" alt="中国农业科学院校园" /></div><p className="eduYear">2024.09 — 2027.06</p><h3>中国农业科学院</h3><p>生态学 · 硕士</p><ul><li>研究生二等奖学金</li><li>优秀共产党员</li><li>社会活动优秀奖</li></ul></article>
            <article className="eduCard offset"><div className="eduImage"><img src="./images/shanxi-campus.jpg" alt="山西大学校园" /></div><p className="eduYear">2020.09 — 2024.06</p><h3>山西大学</h3><p>环境科学 · 学士</p><ul><li>校级“三好学生”</li><li>一等奖学金（前5%）</li><li>优秀共青团员（前5%）</li></ul></article>
          </div>
        </div>
      </section>

      <section className="research shell section" id="research">
        <div className="sectionLabel">03 / RESEARCH</div>
        <div className="sectionHeading"><h2>科研经历</h2><p>从微观检测到区域尺度评价，逐步建立跨尺度的生态问题研究能力。</p></div>
        <div className="timeline">
          {research.map((item, index) => <article className="timelineItem" key={item.title}><div className="timelineMarker"><b>0{research.length-index}</b></div><div className="timelineDate">{item.period}</div><div className="timelineContent"><p>{item.role}</p><h3>{item.title}</h3><div>{item.body}</div></div></article>)}
        </div>
      </section>

      <section className="achievements section" id="achievements">
        <div className="shell">
          <div className="sectionLabel">04 / ACHIEVEMENTS</div>
          <div className="sectionHeading"><h2>成果展示</h2><p>把研究问题、方法与发现沉淀成可以被阅读、讨论和继续推进的成果。</p></div>
          <ol className="publicationList">{publications.map((publication,i)=><li key={publication.title}><span>0{i+1}</span><a href={publication.href} target="_blank" rel="noreferrer"><small>{publication.journal}</small><p>{publication.title}</p><b>知网查看 ↗</b></a></li>)}</ol>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="shell">
          <div className="sectionLabel">05 / SKILLS & INTERESTS</div>
          <div className="sectionHeading"><h2>技能与特长</h2><p>科研之外，运动让我保持节奏，摄影让我保持观察。</p></div>
          <div className="skillStrip">
            <span>R语言建模</span><span>ArcGIS空间分析</span><span>多源数据整合</span><span>科研可视化</span><span>项目统筹</span><span>英文写作</span>
          </div>
          <div className="interestGrid">
            <article className="interestCard videoCard"><video src="./images/swimming-mobile.mp4" autoPlay muted loop playsInline controls preload="metadata" aria-label="游泳视频">您的浏览器暂不支持视频播放。</video><div className="interestOverlay"><span>01</span><div><h3>业余游泳爱好者</h3><p>在水中训练耐力与专注</p></div><b>↗</b></div></article>
            <article className="interestCard"><img src="./images/football.jpg" alt="足球运动" /><div className="interestOverlay"><span>02</span><div><h3>绿茵场杀手</h3><p>团队、判断与协作</p></div><b>↗</b></div></article>
            <article className="interestCard videoCard"><video src="./images/badminton-mobile.mp4" autoPlay muted loop playsInline controls preload="metadata" aria-label="羽毛球视频">您的浏览器暂不支持视频播放。</video><div className="interestOverlay"><span>03</span><div><h3>羽球场灵动达人</h3><p>速度与即时反应</p></div><b>↗</b></div></article>
            <article className="interestCard photoCard"><img src="./images/photo-1.jpg" alt="张旭艺摄影作品" /><img src="./images/photo-2.jpg" alt="张旭艺摄影作品" /><div className="interestOverlay"><span>04</span><div><h3>城市光影收藏家</h3><p>记录光线与日常细节</p></div><b>↗</b></div></article>
          </div>
        </div>
      </section>

      <section className="explore shell section" id="explore">
        <div className="futureIntro">
          <div><div className="sectionLabel">06 / LEARNING & LOOKING FORWARD</div><h2>持续学习<br />期待未来同行 <i>✦</i></h2><p>保持热爱，持续探索，用科学与数据创造更美好的未来。</p></div>
          <blockquote><b>“</b><p>每一次探索<br />都是通向未来的一小步，<br />而我相信，<br />这会让我走得更远。</p><span /></blockquote>
        </div>
        <div className="futureMap">
          <div className="futureOrbit"><i /><i /><i /><i /></div>
          <div className="futureCore"><b>⚡</b><h3>我的未来目标</h3><span>FUTURE GOALS</span><p>以科学探索世界<br />用数据创造价值<br />与AI共建可持续未来</p></div>
          <article className="futureNode nodeOne"><i>🌱</i><div><h3>深耕专业领域</h3><p>持续在农业生态系统与景观可持续发展方向深耕，产出更有价值的研究成果。</p></div></article>
          <article className="futureNode nodeTwo"><i>🤖</i><div><h3>拥抱AI与科技</h3><p>积极学习AI前沿技术，探索智能化科研与决策的新方法和新工具。</p></div></article>
          <article className="futureNode nodeThree"><i>📈</i><div><h3>跨学科融合</h3><p>融合生态学、地理信息、数据科学与人工智能，探索更高效的研究范式。</p></div></article>
          <article className="futureNode nodeFour"><i>🤝</i><div><h3>创造社会价值</h3><p>用科学的力量解决实际问题，助力农业绿色发展和人与自然和谐共生。</p></div></article>
          <article className="futureNode nodeFive"><i>🌐</i><div><h3>面向全球视野</h3><p>关注全球粮食安全、气候变化等议题，以更开放的视野贡献中国智慧。</p></div></article>
        </div>
        <div className="futureContact"><h3>与我联系 <span>➤</span></h3><a href="mailto:2064107153@qq.com"><i>✉</i><span>2064107153@qq.com<small>Email</small></span></a><a href="tel:+8613653547751"><i>☎</i><span>+86 136 5354 7751<small>Phone</small></span></a><a href="#research"><i>⌁</i><span>科研主页<small>Research Profile</small></span></a><a href="#achievements"><i>▤</i><span>学术成果<small>Publications</small></span></a></div>
      </section>

      <footer><div className="shell footerBottom"><span>© 2026 张旭艺</span><span>用研究回应土地，用设计传递思考。</span><a href="#top">返回顶部 ↑</a></div></footer>
    </main>
  );
}
