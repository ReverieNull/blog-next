// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function JSTS() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <div>
<table>
<thead>
<tr><th>TS 概念</th><th>作用</th><th>代码示例</th><th>常见坑 &amp; 提示</th></tr>
</thead>
<tbody>
<tr><td>类型注解</td><td>显式声明变量类型</td><td><code>let age:number = 18</code></td><td>any 会绕过类型检查</td></tr>
<tr><td>接口 Interface</td><td>对象形状描述</td><td><code>interface User &#123; name:string &#125;</code></td><td>同名接口自动合并</td></tr>
<tr><td>泛型 &lt;T&gt;</td><td>类型参数化</td><td><code>function id&lt;T&gt;(x:T):T&#123;return x&#125;</code></td><td>默认推导 vs 显式指定</td></tr>
<tr><td>联合类型</td><td>“或”关系</td><td><code>type Status = &#34;online&#34; | &#34;offline&#34;</code></td><td>用 | 而非 ||</td></tr>
<tr><td>交叉类型</td><td>“与”关系</td><td><code>type Admin = User (role:&#34;admin&#34;)</code></td><td>同名属性类型必须兼容</td></tr>
<tr><td>枚举 enum</td><td>具名常量集合</td><td><code>enum Color &#123;Red,Green&#125; </code></td><td>编译后仍是对象，体积增大</td></tr>
<tr><td>类型断言</td><td>告诉编译器“我比你清楚”</td><td><code>const el = document.getElementById(&#34;id&#34;) as HTMLInputElement</code></td><td>只在编译期生效</td></tr>
<tr><td>装饰器 @</td><td>元编程钩子</td><td><code>@Component class MyComp{}</code></td><td>实验特性，需 tsconfig 开启</td></tr>
<tr><td>声明文件 .d.ts</td><td>给 JS 库加类型</td><td><code>declare module &#34;lodash&#34;</code></td><td>@types/xxx 自动生成</td></tr>
<tr><td>严格模式 strict</td><td>开启全部类型检查</td><td><code>&#34;strict&#34;: true</code></td><td>null 检查、隐式 any 报错</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
