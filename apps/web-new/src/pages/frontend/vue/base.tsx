// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function VUEBase() {
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
<tr><td>组件化</td><td>将界面拆分为独立的组件</td><td><code>&lt;template&gt;...&lt;/template&gt;</code></td><td>父子组件通信使用 props 和事件</td></tr>
<tr><td>数据绑定</td><td>数据与视图的双向绑定</td><td><code>v-bind:title=&#34;message&#34;</code></td><td>注意数据类型和初始值</td></tr>
<tr><td>条件渲染</td><td>根据条件渲染元素</td><td><code>v-if=&#34;condition&#34; 和 v-else</code></td><td>避免在模板中使用复杂表达式</td></tr>
<tr><td>列表渲染</td><td>渲染列表数据</td><td><code>v-for=&#34;(item, index) in items&#34;</code></td><td>使用 key 属性提高渲染效率</td></tr>
<tr><td>事件处理</td><td>绑定和处理用户事件</td><td><code>v-on:click=&#34;handleClick&#34; 或 @click</code></td><td>事件处理函数定义在 methods 中</td></tr>
<tr><td>表单输入绑定</td><td>表单元素与数据的双向绑定</td><td><code>v-model=&#34;inputValue&#34;</code></td><td>注意表单元素的初始值设置</td></tr>
<tr><td>生命周期钩子</td><td>在组件生命周期中执行特定逻辑</td><td><code>created() {}、mounted() {}</code></td><td>在 created 中发起数据请求</td></tr>
<tr><td>计算属性</td><td>基于已有数据计算新值</td><td><code>computed: &#123; fullName() {} &#125;</code></td><td>计算属性是只读的，除非使用 setter</td></tr>
<tr><td>修饰符</td><td>修改指令的行为</td><td><code>.stop、.prevent、.trim</code></td><td>修饰符可以组合使用</td></tr>
<tr><td>动态样式</td><td>动态绑定元素的样式</td><td><code>:style=&#34;&#123; color: activeColor &#125;&#34;</code></td><td>使用或对象数组绑定样式</td></tr>
</tbody>
</table>
</div>

    </GlassBox>
  );
}
