// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

export default function VUEState() {
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
<tr><td>Vuex</td><td>集中式状态管理模式</td><td><code>import Vuex from &#34;vuex&#34;</code></td><td>使用 mapState 和 mapActions 辅助函数</td></tr>
<tr><td>Pinia</td><td>新一代状态管理库</td><td><code>import &#123; defineStore &#125; from &#34;pinia&#34;</code></td><td>使用 setup 函数进行状态定义</td></tr>
<tr><td>响应式转换</td><td>将普通对象转换为响应式对象</td><td><code>ref(), reactive()</code></td><td>注意原始值的响应式转换</td></tr>
<tr><td>状态持久化</td><td>保存和恢复应用状态</td><td><code>localStorage 和 vuex-persistedstate</code></td><td>确保序列化和反序列化正确</td></tr>
<tr><td>模块化</td><td>将状态管理模块化</td><td><code>modules: &#123; moduleA: {} &#125;</code></td><td>避免命名冲突和作用域问题</td></tr>
<tr><td>异步操作</td><td>管理异步状态和操作</td><td><code>actions: &#123; asyncAction(&#123; commit &#125;) {} &#125;</code></td><td>使用 dispatch 触发其他 action</td></tr>
<tr><td>getters</td><td>计算和转换状态数据</td><td><code>getters: &#123; doubleCount: state =&gt; state.count * 2 &#125;</code></td><td>getters 是读取操作</td></tr>
<tr><td>mutations</td><td>修改状态的唯一方式</td><td><code>mutations: &#123; increment(state) {} &#125;</code></td><td>mutations 是同步操作</td></tr>
<tr><td>插件支持</td><td>使用插件扩展 Vuex 功能</td><td><code>plugins: [createLogger()]</code></td><td>确保插件兼容新版本的 Vuex</td></tr>
<tr><td>调试工具</td><td>调试和检查应用状态</td><td><code>Vue DevTools</code></td><td>在开发环境中启用 DevTools</td></tr>
</tbody>
</table>
</div>

    </GlassBox>
  );
}
