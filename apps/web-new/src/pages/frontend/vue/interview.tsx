 // src/FEHTML/BASE/index.tsx
 import React from 'react';
 import GlassBox from '@/components/GlassBox';
 import styles from '../pagescss/htmlbase.css/all.module.css';
 
 // 可选：引入 Prism 高亮（只需 npm i prismjs）
 import Prism from 'prismjs';
 import 'prismjs/themes/prism-tomorrow.css';
 import 'prismjs/components/prism-markup';
 
 
 export default function VUEInterview() {
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
<tr><td>Vue 响应式原理？</td><td>通过 Object.defineProperty 和 Proxy 实现数据的双向绑定</td><td>Vue 2 和 Vue 3 的响应式实现区别？</td></tr>
<tr><td>组件更新机制？</td><td>使用虚拟 DOM 比较新旧 DOM 的差异并高效更新真实 DOM</td><td>如何优化组件更新性能？</td></tr>
<tr><td>Vuex 和 Pinia 的区别？</td><td>Pinia 是 Vue 3 的推荐状态管理库，简化了 Vuex 的使用</td><td>Vuex 和 Pinia 的性能对比？</td></tr>
<tr><td>Vue 3 的新特性？</td><td>Composition API、Teleport、Suspense</td><td>Composition API 和 Options API 的区别？</td></tr>
<tr><td>Vue Router 的模式？</td><td>hash 模式和 history 模式</td><td>hash 模式和 history 模式的区别？</td></tr>
<tr><td>如何优化 Vue 应用性能？</td><td>懒加载、组件缓存、减少 DOM 操作</td><td>具体实现懒加载的方式？</td></tr>
<tr><td>Vue 的指令系统？</td><td>自定义指令和内置指令</td><td>如何创建自定义指令？</td></tr>
<tr><td>Vue 的响应式 vs React 的 Hooks?</td><td>Vue 的响应式基于依赖追踪，React Hooks 基于闭包</td><td>两者在性能上的差异？</td></tr>
<tr><td>Vue模板 的编译？</td><td>模板编译成渲染函数</td><td>如何自定义渲染函数？</td></tr>
<tr><td>Vue 的双向数据绑定？</td><td>通过响应式系统和 DOM 更新实现</td><td>双向绑定的优点和缺点？</td></tr>
</tbody>
</table>
</div>
     </GlassBox>
   );
 }
 