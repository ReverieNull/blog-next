// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

export default function NetworkBrowserModel() {
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
<tr><td>TCP/IP</td><td>网络通信协议</td><td>浏览器与服务器通信</td><td>理解 OSI 七层模型</td></tr>
<tr><td>DNS</td><td>域名解析服务</td><td>将域名解析为 IP 地址</td><td>使用公共 DNS 提高解析速度</td></tr>
<tr><td>HTTP</td><td>超文本传输协议</td><td>请求和响应数据</td><td>HTTP/2 提高性能</td></tr>
<tr><td>HTTPS</td><td>安全的 HTTP 协议</td><td>加密传输数据</td><td>使用有效证书</td></tr>
<tr><td>WebSocket</td><td>全双工通信协议</td><td>实时通信应用</td><td>长连接保持</td></tr>
<tr><td>TCP 三次握手</td><td>建立 TCP 连接的过程</td><td>浏览器发起请求到服务器建立连接</td><td>可能导致延迟</td></tr>
<tr><td>TCP 四次挥手</td><td>断开 TCP 连接的过程</td><td>浏览器关闭连接</td><td>确保连接正确关闭</td></tr>
<tr><td>三次握手失败</td><td>TCP 连接建立失败</td><td>网络不稳定或服务器无响应</td><td>检查网络和服务器状态</td></tr>
<tr><td>四次挥手延迟</td><td>TCP 连接断开延迟</td><td>服务器资源紧张</td><td>优化服务器配置</td></tr>
<tr><td>网络延迟</td><td>数据传输所需时间</td><td>测量服务器响应时间</td><td>使用 CDN 提高访问速度</td></tr>
</tbody>
</table>
</div>

    </GlassBox>
  );
}
