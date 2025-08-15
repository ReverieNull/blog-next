// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function JSAdvanced() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
     <div>
<table>
<thead>
<tr><th>概念 / API</th><th>作用</th><th>代码示例</th><th>常见坑 &amp; 提示</th></tr>
</thead>
<tbody>
<tr><td>Promise.allSettled</td><td>全部完成/失败都返回</td><td><code>Promise.allSettled([p1,p2])</code></td><td>不会短路</td></tr>
<tr><td>async/await</td><td>同步写法异步</td><td><code>const res = await fetch(url)</code></td><td>外层需 async 函数</td></tr>
<tr><td>Generator</td><td>可暂停函数</td><td><code>function* g(){ 'yield 1' }</code></td><td>需手动 next() 驱动</td></tr>
<tr><td>Proxy</td><td>元编程拦截</td><td><code>new Proxy(target, handler)</code></td><td>性能损耗 &amp; 不可 polyfill</td></tr>
<tr><td>Reflect</td><td>Proxy 配套工具</td><td><code>Reflect.get(obj,&#34;key&#34;)</code></td><td>与 Proxy 组合使用</td></tr>
<tr><td>WeakMap/WeakSet</td><td>键对象弱引用</td><td><code>const wm = new WeakMap()</code></td><td>键必须是对象，不可枚举</td></tr>
<tr><td>Intl.DateTimeFormat</td><td>本地化日期</td><td><code>new Intl.DateTimeFormat(&#34;zh-CN&#34;).format(date)</code></td><td>IE11 需 polyfill</td></tr>
<tr><td>Event Loop</td><td>宏/微任务队列</td><td>同步 → 微任务 → 宏任务</td><td>Promise.then 比 setTimeout 优先</td></tr>
<tr><td>Service Worker</td><td>浏览器后台代理</td><td><code>navigator.serviceWorker.register(&#34;/sw.js&#34;)</code></td><td>HTTPS 强制要求</td></tr>
<tr><td>WebAssembly</td><td>高性能字节码</td><td><code>WebAssembly.instantiateStreaming(fetch(&#34;a.wasm&#34;))</code></td><td>与 JS 交互成本高</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
