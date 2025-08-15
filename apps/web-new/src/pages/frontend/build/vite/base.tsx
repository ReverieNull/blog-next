// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';
// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function ViteBase() {
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
<tr><td>热更新</td><td>开发时热更新无需刷新页面</td><td>无需额外配置，Vite 内置支持</td><td>确保使用最新版本</td></tr>
<tr><td>配置文件</td><td>配置项目的构建选项</td><td><code>import &#123; defineConfig &#125; from &#39;vite&#39;</code></td><td>使用 TypeScript 配置更佳</td></tr>
<tr><td>插件</td><td>扩展 Vite 的功能</td><td><code>plugins: [vue()]</code></td><td>插件顺序可能影响构建</td></tr>
<tr><td>构建</td><td>构建项目生成生产环境代码</td><td><code>vite build</code></td><td>配置 outputDir 指定输出目录</td></tr>
<tr><td>开发服务器</td><td>启动开发服务器</td><td><code>vite dev</code></td><td>配置 server 选项自定义端口</td></tr>
<tr><td>静态资产</td><td>处理静态资源</td><td><code>assetsInclude: [&#39;**/*&#39;]</code></td><td>配置 assetsDir 指定目录</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
