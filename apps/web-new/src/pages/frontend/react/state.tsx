// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function ReactState() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <div>
<table>
<thead>
<tr><th>方案</th><th>核心思想</th><th>用法</th><th>适用场景</th></tr>
</thead>
<tbody>
<tr><td>Context API</td><td>跨组件共享</td><td><code>&#60;Provider value=&#123;state&#125;&#62;&#123;children&#125;&#60;/Provider&#62;</code></td><td>小型项目</td></tr>
<tr><td>Redux Toolkit</td><td>集中式 store</td><td><code>configureStore(&#123;reducer&#125;)</code></td><td>大型项目</td></tr>
<tr><td>Zustand</td><td>轻量 hook store</td><td><code>const useStore = create(set =&gt; (&#123;count:0&#125;))</code></td><td>小型项目</td></tr>
<tr><td>Recoil</td><td>原子状态</td><td><code>const countState = atom(&#123;key:&#34;count&#34;,default:0&#125;)</code></td><td>高性能场景</td></tr>
<tr><td>Jotai</td><td>原子 + 轻量</td><td><code>const [count] = useAtom(atom(0))</code></td><td>简单状态</td></tr>
<tr><td>React Query</td><td>服务器状态缓存</td><td><code>useQuery(&#34;todos&#34;, fetchTodos)</code></td><td>接口缓存</td></tr>
<tr><td>Valtio</td><td>Proxy 响应式</td><td><code>const state = proxy(&#123;count:0&#125;)</code></td><td>类 Vue 项目</td></tr>
<tr><td>useReducer + Context</td><td>轻量组合</td><td><code>const [state, dispatch] = useReducer(reducer, init)</code></td><td>中型项目</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
