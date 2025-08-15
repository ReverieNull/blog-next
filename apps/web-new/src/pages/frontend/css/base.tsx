// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function CSSBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>CSS基础属性一览表</h1>
      <div>
<table>
<thead>
<tr><th>属性/概念</th><th>一句话讲解</th><th>代码示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>box-sizing</td><td>盒模型模式</td><td>box-sizing:border-box</td><td>怪异盒模型需 doctype</td></tr>
<tr><td>flex:1</td><td>自动填充剩余空间</td><td>flex:1 1 0</td><td>旧 Safari 需 0% 而非 0</td></tr>
<tr><td>grid 三栏等高</td><td>grid-template-columns:repeat(3,1fr)</td><td>grid-auto-rows:1fr</td><td>隐式行高导致多余空间</td></tr>
<tr><td>BFC 触发</td><td>overflow:hidden / display:flow-root</td><td>清除浮动、防 margin 穿透</td><td>BFC 不能阻止兄弟 margin 合并</td></tr>
<tr><td>position:sticky</td><td>吸顶/底</td><td>position:sticky;top:0</td><td>父级不能 overflow:hidden</td></tr>
<tr><td>vertical-center</td><td>flex align-items:center</td><td>display:flex;align-items:center</td><td>transform 垂直居中会新建层</td></tr>
<tr><td>@media 断点</td><td>mobile-first:576/768/992/1200</td><td>@media(min-width:768px)(...)</td><td>用 em 写断点防缩放</td></tr>
<tr><td>object-fit</td><td>图片填充方式</td><td>object-fit:cover</td><td>IE 16+ 支持</td></tr>
<tr><td>CSS 变量</td><td>主题一键切换</td><td>:root(--c:red) body(color:var(--c))</td><td>IE11 需 PostCSS fallback</td></tr>
<tr><td>line-clamp</td><td>多行省略</td><td>-webkit-line-clamp:3</td><td>仅 WebKit 内核</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
