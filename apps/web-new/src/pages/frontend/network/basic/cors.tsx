// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function NetworkCors() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>示例场景</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>同源</td><td>相同协议、主机和端口</td><td>http://example.com:8080 和 http://example.com:8080</td><td>同源策略防止 XSRF</td></tr>
<tr><td>跨域限制</td><td>不同源之间的脚本访问限制</td><td>http://example.com 和 http://another.com</td><td>使用 CORS 解决跨域</td></tr>
<tr><td>CORS</td><td>跨源资源共享</td><td>服务器返回 <code>Access-Control-Allow-Origin</code></td><td>配置 CORS 头允许跨域请求</td></tr>
<tr><td>预检请求</td><td>OPTIONS 请求检查跨域权限</td><td>浏览器在发送实际请求前发送 OPTIONS 请求</td><td>处理预检请求响应</td></tr>
<tr><td>跨域请求</td><td>跨域 AJAX 请求</td><td><code>fetch(&#34;https://another.com/api&#34;)</code></td><td>需要服务器支持 CORS</td></tr>
<tr><td>JSONP</td><td>通过 script 标签实现跨域</td><td><code>script src=&#34;https://another.com/api?callback=handleData&#34;</code></td><td>只支持 GET 方法</td></tr>
<tr><td>跨域图片</td><td>图片资源的跨域加载</td><td><code>img.crossOrigin = &#34;Anonymous&#34;</code></td><td>需要服务器支持 CORS</td></tr>
<tr><td>跨域字体</td><td>字体资源的跨域加载</td><td><code>@font-face &#123; src: url(&#34;https://another.com/font.ttf&#34;); &#125;</code></td><td>需要服务器支持 CORS</td></tr>
<tr><td>跨域错误</td><td>捕获跨域请求的错误</td><td><code>window.onerror</code> 和 <code>Promise.catch</code></td><td>错误信息可能有限</td></tr>
<tr><td>跨域安全</td><td>确保跨域请求的安全</td><td>使用 HTTPS 和验证请求头</td><td>防止恶意请求</td></tr>
</tbody>
</table>
</div>

    </GlassBox>
  );
}
