// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';
// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function NetworkHTTPS() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>作用</th><th>示例场景</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>SSL/TLS</td><td>加密传输协议</td><td>HTTPS 使用的加密协议</td><td>TLS 1.2 及以上推荐</td></tr>
<tr><td>证书</td><td>数字证书</td><td>由 CA 颁发的服务器证书</td><td>使用可信 CA 颁发的证书</td></tr>
<tr><td>公钥加密</td><td>使用公钥加密数据</td><td>浏览器使用服务器公钥加密请求数据</td><td>保护数据传输安全</td></tr>
<tr><td>私钥解密</td><td>使用私钥解密数据</td><td>服务器使用私钥解密请求数据</td><td>保护服务器私钥安全</td></tr>
<tr><td>证书链</td><td>证书的层级关系</td><td>根证书 → 中间证书 → 服务器证书</td><td>配置完整证书链</td></tr>
<tr><td>OCSP Stapling</td><td>状态检查优化</td><td>服务器主动推送证书状态</td><td>减少 OCSP 查询延迟</td></tr>
<tr><td>HSTS</td><td>HTTP 严格传输安全</td><td><code>Strict-Transport-Security: max-age=31536000</code></td><td>强制 HTTPS 访问</td></tr>
<tr><td>证书透明度</td><td>监督证书颁发过程</td><td>公共日志记录证书信息</td><td>提高证书颁发安全性</td></tr>
<tr><td>证书吊销</td><td>撤销已颁发的证书</td><td>使用 CRL 或 OCSP</td><td>定期检查证书状态</td></tr>
<tr><td>完整链路</td><td>从客户端到服务器的加密链路</td><td>浏览器到服务器全程 HTTPS</td><td>配置完整的 HTTPS 支持</td></tr>
<tr><td>混合内容</td><td>HTTPS 页面中的 HTTP 资源</td><td>避免使用 HTTP 资源</td><td>浏览器可能阻止混合内容</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
