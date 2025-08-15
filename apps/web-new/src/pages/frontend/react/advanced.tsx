// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function ReactAdvanced() {
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
<tr><td>useReducer</td><td>复杂状态逻辑</td><td><code>const [state,dispatch] = useReducer(reducer,init)</code></td><td>比 useState 更易测试</td></tr>
<tr><td>useCallback</td><td>缓存函数引用</td><td><code>const fn = useCallback(() =&gt; {}, [deps])</code></td><td>依赖数组别漏写</td></tr>
<tr><td>useMemo</td><td>缓存计算结果</td><td><code>const val = useMemo(() =&gt; heavy(), [deps])</code></td><td>计算必须纯函数</td></tr>
<tr><td>useRef</td><td>保存可变引用</td><td><code>const ref = useRef(null)</code></td><td>.current 可读写，不会触发重渲染</td></tr>
<tr><td>useLayoutEffect</td><td>同步 DOM 后执行</td><td><code>useLayoutEffect(() =&gt; {}, [])</code></td><td>会阻塞绘制，慎用</td></tr>
<tr><td>React.memo</td><td>组件级缓存</td><td><code>export default memo(Child)</code></td><td>props 浅比较，复杂对象需自定义</td></tr>
<tr><td>lazy 加载</td><td>代码分割</td><td><code>const Page = lazy(() =&gt import(&#34;./Page&#34;))</code></td><td>需包裹 Suspense</td></tr>
<tr><td>ErrorBoundary</td><td>捕获子树错误</td><td><code>class EB extends Component &#123; componentDidCatch(){} &#125;</code></td><td>仅捕获渲染阶段错误</td></tr>
<tr><td>Portal</td><td>渲染到任意 DOM</td><td><code>createPortal(children, domNode)</code></td><td>事件冒泡仍在 React 树</td></tr>
<tr><td>forwardRef</td><td>父拿子 ref</td><td><code>const Child = forwardRef((props, ref) =&gt; ...)</code></td><td>子组件必须配合 ref</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
