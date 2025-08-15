// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function NetworkSecurity() {
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
<tr><td>XSS</td><td>跨站脚本攻击</td><td>注入恶意脚本</td><td>使用转义和内容安全策略</td></tr>
<tr><td>CSRF</td><td>跨站请求伪造</td><td>伪造用户请求</td><td>使用 CSRF Token</td></tr>
<tr><td>SQL 注入</td><td>恶意 SQL 代码注入</td><td>用户输入拼接到 SQL 查询</td><td>使用参数化查询</td></tr>
<tr><td>SSRF</td><td>服务器端请求伪造</td><td>服务器发起恶意请求</td><td>限制服务器端请求源</td></tr>
<tr><td>XXE</td><td>XML 外部实体攻击</td><td>恶意 XML 实体解析</td><td>禁用外部实体</td></tr>
<tr><td>文件包含</td><td>恶意文件包含漏洞</td><td>包含用户指定的文件</td><td>限制文件路径范围</td></tr>
<tr><td>命令注入</td><td>恶意命令执行</td><td>用户输入拼接到系统命令</td><td>使用安全的命令执行方法</td></tr>
<tr><td>安全头</td><td>HTTP 安全头</td><td><code>Content-Security-Policy: default-src &#34;self&#34;</code></td><td>配置关键安全头</td></tr>
<tr><td>安全策略</td><td>网站安全策略</td><td>HTTPS、HSTS、CSP</td><td>综合使用多种安全措施</td></tr>
<tr><td>安全审计</td><td>定期检查安全漏洞</td><td>使用工具如 OWASP ZAP</td><td>定期进行安全审计</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
