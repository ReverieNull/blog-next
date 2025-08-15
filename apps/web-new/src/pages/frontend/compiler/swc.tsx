// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function SWC() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
       <h1>SWC 速查表</h1>
   <div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>配置示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>性能</td><td>Rust 编写的高性能 JavaScript 编译器</td><td><code>swc-loader</code> in Webpack</td><td>启用缓存提高速度</td></tr>
<tr><td>配置</td><td>SWC 的选项</td><td><code>.swcrc</code> 文件</td><td>支持 TypeScript 和 JSX</td></tr>
<tr><td>插件</td><td>扩展 SWC 的功能</td><td>使用 <code>@swc/core</code> 和 <code>@swc/jest</code></td><td>插件生态系统较小</td></tr>
<tr><td>预设</td><td>一组 SWC 插件的集合</td><td><code>&#123; &#34;jsc&#34;: &#123; &#34;target&#34;: &#34;es2018&#34; &#125; &#125;</code></td><td>配置项目目标环境</td></tr>
<tr><td>JSX 支持</td><td>转换和优化 JSX 语法</td><td><code>&#123; &#34;jsc&#34;: &#123; &#34;parser&#34;: &#123; &#34;syntax&#34;: &#34;typescript&#34; &#125; &#125;</code></td><td>配合 TypeScript 使用</td></tr>
<tr><td>压缩</td><td>压缩 JavaScript 代码</td><td>使用 <code>swc-loader</code> 的 <code>minify</code> 选项</td><td>配合 Webpack 使用</td></tr>
<tr><td>Source Map</td><td>生成源代码映射</td><td><code>sourceMaps: true</code> in .swcrc</td><td>便于调试</td></tr>
<tr><td>缓存</td><td>缓存编译结果提高速度</td><td><code>cache: true</code> in swc-loader</td><td>大项目效果明显</td></tr>
<tr><td>Tree Shaking</td><td>消除无用代码</td><td>配合 Webpack 或 Rollup</td><td>确保静态导入</td></tr>
<tr><td>支持</td><td>支持的 JavaScript 版本和特性</td><td><code>&#123; &#34;jsc&#34;: &#123; &#34;target&#34;: &#34;es2020&#34; &#125; &#125;</code></td><td>根据项目需求配置</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
