// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function NetworkDebug() {
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
<tr><td>调试工具</td><td>浏览器内置的调试工具</td><td>Chrome DevTools</td><td>使用断点和控制台日志</td></tr>
<tr><td>性能分析</td><td>分析网页性能</td><td>Chrome DevTools 的 Performance 面板</td><td>识别性能瓶颈</td></tr>
<tr><td>网络监控</td><td>监控网络请求</td><td>Chrome DevTools 的 Network 面板</td><td>检查请求和响应</td></tr>
<tr><td>错误监控</td><td>捕获和记录 JavaScript 错误</td><td><code>window.onerror</code> 和第三方服务如 Sentry</td><td>实时监控错误</td></tr>
<tr><td>日志记录</td><td>记录应用运行日志</td><td><code>console.log()</code>, <code>console.error()</code></td><td>使用分类日志便于排查</td></tr>
<tr><td>性能指标</td><td>关键性能指标</td><td>FCP、LCP、TTFB、CLS、TBT</td><td>优化用户体验</td></tr>
<tr><td>热图分析</td><td>用户交互热图</td><td>使用工具如 Hotjar</td><td>优化用户界面</td></tr>
<tr><td>APM</td><td>应用性能管理</td><td>使用 New Relic、Datadog</td><td>监控应用性能指标</td></tr>
<tr><td>部署监控</td><td>监控部署过程</td><td>CI/CD 流水线中的测试和部署步骤</td><td>确保部署顺利</td></tr>
<tr><td>用户反馈</td><td>收集用户反馈</td><td>表单、弹窗</td><td>结合定量和定性数据</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
