// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function ViteInterview() {
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
<tr><td>Vite 和 Webpack 的区别？</td><td>Vite 使用原生 ES 模块，Webpack 使用打包后模块</td><td>Vite 热更新比 Webpack 快？</td></tr>
<tr><td>Vite 的热更新如何实现？</td><td>通过原生 ESM 和 HTTP 服务器推送</td><td>如何处理生产环境构建？</td></tr>
<tr><td>Vite 如何优化构建速度？</td><td>启动时缓存依赖解析</td><td>缓存如何失效？</td></tr>
<tr><td>Vite 的配置文件如何处理环境变量？</td><td>通过 <code>import.meta.env</code> 访问</td><td>.env 文件如何区分环境？</td></tr>
<tr><td>Vite 如何支持 TypeScript?</td><td>自动处理 TypeScript 文件</td><td>如何配置自定义类型？</td></tr>
<tr><td>Vite 的插件系统和 Webpack 的区别？</td><td>Vite 插件基于 ES 模块，Webpack 基于 CommonJS</td><td>如何迁移插件生态？</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
