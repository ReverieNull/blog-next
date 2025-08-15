// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function JSInterview() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>面试题</th><th>答案</th><th>追问点 / 易踩坑</th></tr>
</thead>
<tbody>
<tr><td>== 与 === 区别？</td><td>== 会隐式转换，=== 严格相等</td><td>null == undefined 返回 true</td></tr>
<tr><td>闭包是什么？</td><td>函数 + 词法作用域</td><td>内存泄漏 &amp; 循环引用</td></tr>
<tr><td>this 指向？</td><td>调用时决定；箭头函数捕获外层</td><td>call/apply/bind 改变指向</td></tr>
<tr><td>原型链终点？</td><td>null</td><td>Object.prototype.__proto__ === null</td></tr>
<tr><td>事件循环顺序？</td><td>同步 → 微任务 → 宏任务</td><td>Promise.then 比 setTimeout 优先</td></tr>
<tr><td>防抖 vs 节流？</td><td>防抖：延迟执行；节流：间隔执行</td><td>搜索框 vs 滚动监听</td></tr>
<tr><td>深拷贝实现？</td><td>JSON.parse(JSON.stringify(obj))</td><td>无法拷贝函数、循环引用</td></tr>
<tr><td>跨域方案？</td><td>CORS、JSONP、代理、postMessage</td><td>简单请求 vs 预检请求</td></tr>
<tr><td>webpack 作用？</td><td>模块打包器</td><td>Loader vs Plugin</td></tr>
<tr><td>Vite vs Webpack？</td><td>Vite 用原生 ESM + 预构建</td><td>开发冷启动快，生产仍用 Rollup</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
