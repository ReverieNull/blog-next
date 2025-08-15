// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function FrontendWelcome() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>前端(Front-End)</h1>
      <section>
        指的是用户在使用网站或者应用程序时，直接看到、触摸到、并与之交互的部分。
    简单来说，就是你在浏览器或手机屏幕上看到的一切内容和操作界面。 
      </section>
      <h2>前端主要包含什么？</h2>
      <h3>1.基础三件套</h3>
      <ul>
        <li><strong>HTML</strong>：网页的&#34;骨架&#34;，负责页面的结构和内容(比如标题、段落、按钮)</li>
        <li><strong>CSS</strong>：网页端&#34;皮肤&#34;，负责样式和布局(颜色、字体、排版)</li>
        <li><strong>JavaScript</strong>：网页的&#34;大脑&#34;，负责交互以及动态功能(点击按钮弹出窗口、数据加载)</li>
      </ul>
      <h3>2.现代开发工具与框架</h3>
      <ul>
        <li><strong>框架/库</strong>：如React、Vue、Angular，用于高效构建复杂交互界面</li>
        <li><strong>构建工具</strong>：如Webpack、Vite，优化代码并打包项目</li>
        <li><strong>CSS预处理器</strong>：如Sass、Less，增强CSS的可维护性</li>
        <li><strong>响应式设计</strong>：确保网站在手机、平板、电脑等不同设备上正常显示</li>
      </ul>
      <h2>前端的作用是什么？</h2>
      <ul>
        <li><strong>数据可视化</strong>：将后台传来的数据变成用户能够理解的图表、列表等</li>
        <li><strong>实现用户交互</strong>：处理点击、滑动、表单输入等操作、给予实时反馈</li>
        <li><strong>提升体验</strong>：通过动画、过渡效果、加载优化让用户操作更流畅</li>
        <li><strong>适配多设备</strong>：确保不同屏幕尺寸下界面仍然美观易用</li>
      </ul>
      <h2>前端 vs 后端</h2>
      <p>
        <strong>前端</strong>：用户界面、交互、动画、性能优化、SEO优化、用户体验优化
      </p>
      <p>
        <strong>后端</strong>：数据处理、业务逻辑、数据存储、安全、性能优化、SEO优化
      </p>
      <h2>前端发展趋势</h2>
       <ul>
        <li><strong>框架生态的持续演进</strong>：React、Vue、Angular不断更新，效率更高</li>
        <li><strong>TypeScript普及</strong>：TypeScript作为JavaScript的超集，在其基础上添加了类型系统，提升代码质量</li>
        <li><strong>跨平台开发</strong>：用前端技术开发桌面应用(Electron)、移动应用(ReactNative)、鸿蒙应用(ArkTS)</li>
        <li><strong>性能与体验优化</strong>：PWA(渐进式Web应用)、WebAssembly等技术提升速度和体验</li>
        <li><strong>低代码/无代码平台</strong>：通过可视化工具快速构建界面(如Webflow)</li>
      </ul>
      <h2>如何学习前端?</h2>
      <p><strong>基础路线</strong>：HTML →  CSS → JavaScript → 响应式设计 → Git</p>
      <p><strong>进阶路线</strong>：框架(React/Vue) → Node.js基础 → TypeScript → 构建工具(Webpack/Vite)</p>
      <p><strong>CI/CD自动化</strong>：GitHub Actions/GitLab CI/Jenkins  → 部署工具(如Vercel、Netlify、Docker)</p>
      <p><strong>扩展技能</strong>：性能优化 → 测试框架(Jest/Cypress) → Serverless → 微前端</p>
      <h3>以上便是该前端笔记涉及到的一部分，无论您是因为热爱，还是因为工作，都祝愿您马到成功</h3>
    </GlassBox>
  );
}
