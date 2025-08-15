// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function NetworkCache () {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>作用</th><th>示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>浏览器缓存</td><td>浏览器存储的本地副本</td><td><code>Cache-Control: max-age=3600</code></td><td>减少重复请求</td></tr>
<tr><td>强制缓存</td><td>无需检查直接使用缓存</td><td><code>Cache-Control: max-age</code></td><td>缓存到期自动重新请求</td></tr>
<tr><td>协商缓存</td><td>检查缓存是否更新</td><td><code>ETag</code> 和 <code>Last-Modified</code></td><td>服务器返回 304 未修改</td></tr>
<tr><td>CDN</td><td>内容分发网络</td><td>使用 Cloudflare、Akamai 等服务</td><td>提高全球用户访问速度</td></tr>
<tr><td>缓存控制</td><td>控制缓存机制</td><td><code>Cache-Control</code>, <code>Expires</code></td><td>优化缓存策略提高性能</td></tr>
<tr><td>缓存策略</td><td>缓存更新策略</td><td><code>Cache-Control: no-cache</code></td><td>根据需求选择策略</td></tr>
<tr><td>缓存失效</td><td>强制清除缓存</td><td><code>Cache-Control: max-age=0</code></td><td>用户清除缓存或强制刷新</td></tr>
<tr><td>静态资源</td><td>静态文件的缓存</td><td>图片、CSS、JavaScript</td><td>配置远期过期时间</td></tr>
<tr><td>动态资源</td><td>动态生成内容的缓存</td><td>API 响应</td><td>配置短期过期时间</td></tr>
<tr><td>缓存清理</td><td>清理过期或无效缓存</td><td>使用缓存失效策略和用户操作</td><td>定期检查缓存有效性</td></tr>
<tr><td>缓存命中率</td><td>缓存请求与总请求的比例</td><td>监控缓存命中率指标</td><td>优化缓存配置提高命中率</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
