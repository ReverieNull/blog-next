// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function CSSAdvanced() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>CSS进阶属性一览表</h1>
     <div>
<table>
<thead>
<tr><th>属性/概念</th><th>一句话讲解</th><th>代码示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>clamp()</td><td>流体值</td><td>font-size:clamp(1rem,2vw,2rem)</td><td>老浏览器需 polyfill</td></tr>
<tr><td>CSS Modules</td><td>构建时哈希类名</td><td>import styles from &#34;./index.module.css&#34;</td><td>不能动态拼接类名</td></tr>
<tr><td>CSS-in-JS</td><td>样式与组件同文件</td><td>const Button = styled.button\`color:red;\`</td><td>SSR 需 critical-css</td></tr>
<tr><td>Container Query</td><td>父容器宽度响应式</td><td>@container(min-width:400px)&#123;...&#125;</td><td>需 container-type:inline-size</td></tr>
<tr><td>prefers-color-scheme</td><td>系统深色模式</td><td>@media(prefers-color-scheme:dark)&#123;...&#125;</td><td>需同时提供切换按钮</td></tr>
<tr><td>backdrop-filter</td><td>毛玻璃背景</td><td>backdrop-filter:blur(4px)</td><td>需半透明背景</td></tr>
<tr><td>will-change</td><td>提前 GPU 合成层</td><td>will-change:transform</td><td>滥用 → 占显存</td></tr>
<tr><td>mix-blend-mode</td><td>混合模式</td><td>mix-blend-mode:multiply</td><td>父级需不透明背景</td></tr>
<tr><td>aspect-ratio</td><td>固定比例</td><td>aspect-ratio:16/9</td><td>IE 无支持，padding-top hack</td></tr>
<tr><td>scroll-behavior</td><td>平滑滚动</td><td>html(scroll-behavior:smooth)</td><td>Safari小于15 需 polyfill</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
