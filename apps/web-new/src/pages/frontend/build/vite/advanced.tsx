// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function ViteAdvanced() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
    <div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>代码示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>SSR</td><td>服务端渲染支持</td><td><code>vite preview</code></td><td>配合 SSR 框架如 Vue SSR</td></tr>
<tr><td>环境变量</td><td>配置环境变量</td><td><code>.env</code> 文件</td><td>预定义 MODE 变量</td></tr>
<tr><td>优化</td><td>优化构建性能和产出</td><td><code>build: &#123; minify: &#39;terser&#39; &#125;</code></td><td>使用 Rollup 插件优化</td></tr>
<tr><td>TypeScript</td><td>支持 TypeScript</td><td>配置 <code>tsconfig.json</code></td><td>确保 Vite 配置正确支持</td></tr>
<tr><td>代码分割</td><td>将代码分割成多个 chunk</td><td><code>build: &#123; rollupOptions: &#123; output: &#123; chunkFileNames: &#39;chunks/[name]-[hash].js&#39; &#125; &#125; &#125;</code></td><td>减少初始加载时间</td></tr>
<tr><td>懒加载</td><td>组件懒加载</td><td><code>const MyComponent = () =&gt; import(&#39;./MyComponent.vue&#39;)</code></td><td>需配合 Suspense 使用</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
