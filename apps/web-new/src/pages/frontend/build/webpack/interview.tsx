// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function WebpackInterview() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
     <div>
<table>
<thead>
<tr><th>问题</th><th>答案</th><th>追问</th></tr>
</thead>
<tbody>
<tr><td>Webpack 如何优化构建性能？</td><td>使用缓存、Tree Shaking、代码分割</td><td>如何配置 Cache？</td></tr>
<tr><td>Tree Shaking 的原理是什么？</td><td>通过静态分析消除无用代码</td><td>动态导入能否 Tree Shaking？</td></tr>
<tr><td>HMR 的实现原理？</td><td>通过 Socket 通信更新模块</td><td>如何解决 HMR 失败回退问题？</td></tr>
<tr><td>如何配置代码分割？</td><td>使用 splitChunks 配置</td><td>vendor chunk 和 async chunk 的区别？</td></tr>
<tr><td>Webpack 如何处理 CSS？</td><td>使用 style-loader 和 css-loader</td><td>如何提取 CSS 文件？</td></tr>
<tr><td>如何优化 Webpack 的输出速度？</td><td>使用 DLLPlugin 和 dll-reference-plugin</td><td>DLL 的缺点是什么？</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
