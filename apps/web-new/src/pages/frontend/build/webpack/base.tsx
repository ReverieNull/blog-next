// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';
// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function WebpackBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>配置示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>入口文件</td><td>指定打包的入口文件</td><td><code>entry: &#39;./src/index.js&#39;</code></td><td>多入口配置数组或对象</td></tr>
<tr><td>输出文件</td><td>指定打包后的输出文件</td><td><code>output: &#123; path: __dirname + &#39;/dist&#39;  &#125;</code></td><td>需要绝对路径</td></tr>
<tr><td>Loader</td><td>模块加载器</td><td><code>rules: [ &#123; test: /\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;]  &#125;]</code></td><td>Loader 执行顺序从后往前</td></tr>
<tr><td>Plugin</td><td>扩展插件</td><td><code>plugins: [new HtmlWebpackPlugin( &#123; template: &#39;./src/index.html&#39;  &#125;)]</code></td><td>插件执行顺序按数组顺序</td></tr>
<tr><td>模式</td><td>开发或生产环境</td><td><code>mode: &#39;development&#39; 或 &#39;production&#39;</code></td><td>生产模式自动压缩代码</td></tr>
<tr><td>DevServer</td><td>开发服务器</td><td><code>devServer:  &#123; port: 3000  &#125;</code></td><td>自动刷新与热更新</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
