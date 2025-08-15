// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function CSSFramework() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>CSS 框架和生态</h1>
     <div>
<table>
<thead>
<tr>
<th>框架 / 生态</th>
<th>定位</th>
<th>核心特色</th>
<th>文件后缀</th>
<th>典型命令 / CDN</th>
<th>适用场景</th>
<th>学习曲线</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bootstrap</td>
<td>经典 UI 组件库</td>
<td>栅格系统 + 预制组件 + JS 插件</td>
<td>.css / .scss</td>
<td><code>npm i bootstrap</code></td>
<td>后台、快速原型、兼容旧浏览器</td>
<td>低</td>
</tr>
<tr>
<td>Tailwind CSS</td>
<td>实用原子类</td>
<td>utility-first、JIT 按需生成</td>
<td>.css + config.js</td>
<td><code>npm i -D tailwindcss</code></td>
<td>定制化设计、组件库二次封装</td>
<td>中</td>
</tr>
<tr>
<td>Bulma</td>
<td>Flexbox 风格 UI</td>
<td>纯 CSS、语义化类名、无 JS</td>
<td>.css / .sass</td>
<td><code>npm i bulma</code></td>
<td>快速页面、轻量级项目</td>
<td>低</td>
</tr>
<tr>
<td>Foundation</td>
<td>企业级响应式</td>
<td>可深度定制、移动优先、XY 栅格</td>
<td>.scss</td>
<td><code>npm i foundation-sites</code></td>
<td>中后台、复杂响应式需求</td>
<td>中</td>
</tr>
<tr>
<td>Materialize</td>
<td>Material Design</td>
<td>卡片、按钮、波纹效果、JS 组件</td>
<td>.css / .js</td>
<td><code>npm i materialize-css</code></td>
<td>需要 Material 风格的产品</td>
<td>低</td>
</tr>
<tr>
<td>Semantic UI</td>
<td>语义化命名</td>
<td>自然语言类名、丰富组件</td>
<td>.css / .js</td>
<td><code>npm i semantic-ui-css</code></td>
<td>语义化团队、快速原型</td>
<td>中</td>
</tr>
<tr>
<td>Bootstrap + React</td>
<td>React 封装</td>
<td>React-Bootstrap 组件、无 jQuery</td>
<td>.tsx</td>
<td><code>npm i react-bootstrap</code></td>
<td>React 项目、后台系统</td>
<td>低</td>
</tr>
<tr>
<td>Ant Design</td>
<td>React 企业级</td>
<td>组件齐全、设计规范、主题定制</td>
<td>.tsx / less</td>
<td><code>npm i antd</code></td>
<td>中大型企业后台</td>
<td>中</td>
</tr>
<tr>
<td>Element Plus</td>
<td>Vue 企业级</td>
<td>Vue3 组件、暗黑模式、国际化</td>
<td>.vue / scss</td>
<td><code>npm i element-plus</code></td>
<td>Vue 后台、管理端</td>
<td>中</td>
</tr>
<tr>
<td>Tailwind + JIT</td>
<td>按需原子类</td>
<td>JIT 模式、PurgeCSS 自动摇树</td>
<td>.css + tailwind.config.js</td>
<td><code>npx tailwindcss init -p</code></td>
<td>高定制、小体积、SSR/SSG</td>
<td>中</td>
</tr>
<tr>
<td>UnoCSS</td>
<td>按需原子引擎</td>
<td>iconify、vscode 提示、零运行时代码</td>
<td>.css + unocss.config.ts</td>
<td><code>npm i -D unocss</code></td>
<td>极致性能、Vite 项目</td>
<td>中</td>
</tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
