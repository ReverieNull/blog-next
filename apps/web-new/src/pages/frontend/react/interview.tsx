// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function ReactInterview() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
     <div>
<table>
<thead>
<tr><th>问题</th><th>答案</th><th>追问</th></tr>
</thead>
<tbody>
<tr><td>虚拟 DOM 原理？</td><td>JS 对象映射真实 DOM，diff 后最小化更新</td><td>key 作用？</td></tr>
<tr><td>useEffect 依赖数组？</td><td>空数组只运行一次；不写每次渲染都运行</td><td>闭包陷阱？</td></tr>
<tr><td>React.memo 失效？</td><td>props 浅比较，对象每次都新引用</td><td>自定义比较？</td></tr>
<tr><td>setState 是同步还是异步？</td><td>在 React 事件中是异步；在 setTimeout 中是同步</td><td>批量更新？</td></tr>
<tr><td>Redux 三大原则？</td><td>单一 store、只读 state、纯函数 reducer</td><td>immer 用法？</td></tr>
<tr><td>React Router v6 变化？</td><td>Routes/Route、useNavigate、相对路径</td><td>Switch 替代？</td></tr>
<tr><td>Portals 事件冒泡？</td><td>仍在 React 树，不穿透真实 DOM</td><td>如何阻止？</td></tr>
<tr><td>ErrorBoundary 不能捕获？</td><td>异步、事件处理器、SSR 错误</td><td>全局监控？</td></tr>
<tr><td>useCallback 何时用？</td><td>子组件用 React.memo 且父组件重渲染</td><td>依赖遗漏？</td></tr>
<tr><td>Next.js vs CRA？</td><td>Next 带 SSR/SSG，CRA 纯客户端</td><td>部署方式？</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
