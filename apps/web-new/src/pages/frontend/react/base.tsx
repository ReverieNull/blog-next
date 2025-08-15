// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function ReactBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
    <div>
<table>
<thead>
<tr><th>概念</th><th>讲解</th><th>代码示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>函数组件</td><td>纯函数返回 JSX</td><td><code>const App = () =&gt; &#60;h1&#62;Hi&#60;/h1&#62;</code></td><td>首字母必须大写</td></tr>
<tr><td>JSX 规则</td><td>类 XML 语法糖</td><td><code>&#60;div className=&#34;box&#34;&#62;文本&#60;/div&#62;</code></td><td>class → className</td></tr>
<tr><td>props</td><td>父传子数据</td><td><code>&#60;Child name=&#34;Tom&#34; /&#62;</code></td><td>只读，不可直接修改</td></tr>
<tr><td>useState</td><td>函数组件状态</td><td><code>const [count,set] = useState(0)</code></td><td>异步更新，需函数式 set</td></tr>
<tr><td>useEffect</td><td>副作用钩子</td><td><code>useEffect(() =&gt; {}, [])</code></td><td>空数组仅运行一次</td></tr>
<tr><td>条件渲染</td><td>三目或 &amp;&amp;</td><td><code>(flag && &#60;p&#62;show&#60;/p&#62;)</code></td><td>0 会意外渲染</td></tr> 
<tr><td>列表 key</td><td>diff 依据</td><td><code>&#60;li key=&#123;id&#125;&#62;&#123;text&#125;&#60;/li&#62;</code></td><td>不能用 index 作 key</td></tr>
<tr><td>事件绑定</td><td>驼峰 + 函数</td><td><code>&#60;button onClick=<code>&#60;button onClick=&#123;handleClick&#125;&#62;click&#60;/button&#62;</code></code></td><td>勿加括号，否则立即执行</td></tr>
<tr><td>Fragment</td><td>无额外 DOM 包裹</td><td><code>&#60;&#62;&#60;span&#62;A&#60;/span&#62;&#60;span&#62;B&#60;/span&#62;&#60;/&#62;</code></td><td>替代多余 div</td></tr>
<tr><td>StrictMode</td><td>开发期检查</td><td><code>&#60;React.StrictMode&#62;&#60;App /&#62;&#60;/React.StrictMode&#62;</code></td><td>仅 DEV 环境生效</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
