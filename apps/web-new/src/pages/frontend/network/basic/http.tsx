// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function NetworkHTTP() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>请求行</td><td>HTTP 请求的第一行</td><td><code>GET /path HTTP/1.1</code></td><td>方法、路径和协议版本</td></tr>
<tr><td>状态码</td><td>服务器响应状态</td><td><code>200 OK</code>, <code>404 Not Found</code></td><td>处理常见状态码</td></tr>
<tr><td>请求头</td><td>客户端发送的附加信息</td><td><code>Host: example.com</code></td><td>自定义头注意大小写</td></tr>
<tr><td>响应头</td><td>服务器返回的附加信息</td><td><code>Content-Type: text/html</code></td><td>解析响应内容类型</td></tr>
<tr><td>请求体</td><td>发送的数据</td><td><code>application/json</code> 数据</td><td>大数据注意性能</td></tr>
<tr><td>响应体</td><td>服务器返回的数据</td><td>HTML、JSON、图片等</td><td>处理解析数据</td></tr>
<tr><td>Cookie</td><td>存储在客户端的小数据</td><td><code>Set-Cookie: name=value</code></td><td>管理用户会话</td></tr>
<tr><td>Session</td><td>服务器端存储的用户会话</td><td><code>session_id=12345</code></td><td>状态管理</td></tr>
<tr><td>缓存控制</td><td>控制缓存机制</td><td><code>Cache-Control: max-age=3600</code></td><td>减少服务器负载</td></tr>
<tr><td>ETag</td><td>资源的唯一标识符</td><td><code>ETag: &#34;12345&#34;</code></td><td>资源验证</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
