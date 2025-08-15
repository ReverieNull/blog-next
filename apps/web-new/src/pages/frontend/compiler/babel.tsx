// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function Babel() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>Babel 基础速查表</h1>
     <div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>配置示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>预设</td><td>一组 Babel 插件的集合</td><td><code>.babelrc: &#123; &#34;presets&#34;: [&#34;@babel/preset-env&#34;] &#125;</code></td><td>根据项目需求选择预设</td></tr>
<tr><td>插件</td><td>单个功能的代码转换</td><td><code>.babelrc: &#123; &#34;plugins&#34;: [&#34;@babel/plugin-transform-arrow-functions&#34;] &#125;</code></td><td>插件可以单独使用</td></tr>
<tr><td>目标浏览器</td><td>指定需要兼容的浏览器</td><td><code>browserslist: [&#39;&gt; 1%&#39;, &#39;last 2 versions&#39;]</code></td><td>在 <code>package.json</code> 中配置</td></tr>
<tr><td>Polyfill</td><td>运行时填充缺失的功能</td><td><code>import &#39;core-js/stable&#39;</code></td><td>按需引入避免体积过大</td></tr>
<tr><td>配置文件</td><td>Babel 配置文件</td><td><code>.babelrc</code> 或 <code>babel.config.js</code></td><td>项目根目录放置</td></tr>
<tr><td>JSX 支持</td><td>转换 JSX 语法</td><td><code>preset-react: &#123; &#34;pragma&#34;: &#34;React.createElement&#34; &#125;</code></td><td>确保安装相关预设</td></tr>
<tr><td>压缩</td><td>压缩 Babel 输出的代码</td><td>使用 <code>terser-webpack-plugin</code></td><td>配合 Webpack 使用</td></tr>
<tr><td>Source Map</td><td>生成源代码映射</td><td><code>sourceMaps: true</code> in .babelrc</td><td>便于调试</td></tr>
<tr><td>Tree Shaking</td><td>消除无用代码</td><td>配合 Webpack 或 Rollup</td><td>确保静态导入</td></tr>
<tr><td>缓存</td><td>缓存转换结果提高构建速度</td><td><code>cacheDirectory: true</code> in .babelrc</td><td>大项目效果明显</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
