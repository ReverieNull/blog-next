// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';
// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function WebpackAdvanced(){
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
     <div>
<table>
<thead>
<tr><th>概念</th><th>作用</th><th>配置示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>Tree Shaking</td><td>消除无用代码</td><td><code>mode: &#39;production&#39;</code></td><td>需静态导入，避免动态 require</td></tr>
<tr><td>外部依赖</td><td>外部库不打包</td><td><code>externals:  &#123; jquery: &#39;jQuery&#39;  &#125;</code></td><td>CDN 引入或 Node 全局安装</td></tr>
<tr><td>源地图</td><td>调试源码</td><td><code>devtool: &#39;source-map&#39;</code></td><td>生产环境避免完整源地图</td></tr>
<tr><td>HMR</td><td>热模块替换</td><td><code>hot: true</code> in devServer</td><td>需组件支持 HMR</td></tr>
<tr><td>代码分割</td><td>将代码分割成多个 chunk</td><td><code>optimization:  &#123; splitChunks:  &#123; chunks: &#39;all&#39;  &#125;  &#125;</code></td><td>减少初始加载时间</td></tr>
<tr><td>懒加载</td><td>组件懒加载</td><td><code>const MyComponent = () =&gt; import(&#39;./MyComponent&#39;)</code></td><td>需配合 Suspense 使用</td></tr>
</tbody>
</table>
</div>

    </GlassBox>
  );
}
