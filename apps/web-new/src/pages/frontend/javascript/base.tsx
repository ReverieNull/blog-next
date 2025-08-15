// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function JSBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念 / 语法</th><th>作用</th><th>代码示例</th><th>常见问题 &amp; 提示</th></tr>
</thead>
<tbody>
<tr><td>var / let / const</td><td>作用域 &amp; 可变差异</td><td><code>const a = 1; let b = 2;</code></td><td>var 有变量提升</td></tr>
<tr><td>原始类型</td><td>6 种原始 + symbol</td><td><code>typeof 123 // &#34;number&#34;</code></td><td>null -&gt; &#34;object&#34;</td></tr>
<tr><td>模板字符串</td><td>字符串插值</td><td><code>`Hello $&#123;name&#125;`</code></td><td>反引号勿与引号混用</td></tr>
<tr><td>解构赋值</td><td>快速取值</td><td><code>const x y = obj</code></td><td>嵌套时保持同名</td></tr>
<tr><td>箭头函数</td><td>简洁 + 不绑定 this</td><td><code>(a,b) =&gt; a + b</code></td><td>无 arguments / 不能 new</td></tr>
<tr><td>Promise</td><td>链式异步</td><td><code>new Promise((res, rej) =&gt; res(1))</code></td><td>忘记 return 会断链</td></tr>
<tr><td>Array.map()</td><td>映射数组</td><td><code>[1,2,3].map(x =&gt; x*2)</code></td><td>不修改原数组</td></tr>
<tr><td>Array.filter()</td><td>条件过滤</td><td><code>[1,2,3].filter(x =&gt; x &gt; 2)</code></td><td>返回新数组</td></tr>
<tr><td>Array.reduce()</td><td>累加器</td><td><code>[1,2,3].reduce((a,b) =&gt; a+b,0)</code></td><td>初始值勿忘给</td></tr>
<tr><td>localStorage</td><td>永久本地存储</td><td><code>localStorage.setItem(&#34;k&#34;,&#34;v&#34;)</code></td><td>5 MB 上限</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
