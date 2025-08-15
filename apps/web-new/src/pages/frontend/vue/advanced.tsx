// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function VUEAdvanced() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>代码示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>混合 (Mixins)</td><td>重用组件逻辑</td><td><code>mixins: [myMixin]</code></td><td>注意 mixins 中的命名冲突</td></tr>
<tr><td>自定义指令</td><td>创建自定义指令</td><td><code>Vue.directive(&#34;my-directive&#34;, {})</code></td><td>指令钩子函数的执行顺序</td></tr>
<tr><td>渲染函数</td><td>使用 JavaScript 渲染界面</td><td><code>render: function (createElement) {}</code></td><td>需要熟悉虚拟 DOM 的创建</td></tr>
<tr><td>高级生命周期</td><td>更细致地控制组件生命周期</td><td><code>beforeUpdate() {}、updated() {}</code></td><td>避免在生命周期中进行副作用操作</td></tr>
<tr><td>异步组件</td><td>按需加载组件</td><td><code>const MyComponent = () =&gt; import(&#34;./MyComponent.vue&#34;)</code></td><td>使用 Suspense 处理加载状态</td></tr>
<tr><td>动态组件</td><td>动态切换组件</td><td><code>&lt;component :is=&#34;currentComponent&#34;&gt;&lt;/component&gt;</code></td><td>需要管理组件的状态和数据</td></tr>
<tr><td>过渡动画</td><td>为组件添加进入/离开动画</td><td><code>&lt;transition name=&#34;fade&#34;&gt;&lt;/transition&gt;</code></td><td>定义 CSS 过渡效果</td></tr>
<tr><td>递归组件</td><td>渲染自身组件</td><td><code>props: [&#34;level&#34;]</code></td><td>避免无限递归</td></tr>
<tr><td>错误处理</td><td>全局或局部捕获组件错误</td><td><code>errorCaptured() {}</code></td><td>在开发环境中调试错误</td></tr>
<tr><td>性能优化</td><td>提高应用性能和响应速度</td><td><code>使用 v-show 代替 v-if</code></td><td>避免不必要的 DOM 操作</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
