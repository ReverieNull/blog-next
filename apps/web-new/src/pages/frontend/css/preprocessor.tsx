// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function CSSPreprocessor() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    
    <GlassBox>
      <h1>CSS 预处理器</h1>
      <div>
<table>
<thead>
<tr>
<th>预处理器</th>
<th>诞生</th>
<th>文件后缀</th>
<th>变量符号</th>
<th>核心特性</th>
<th>编译器</th>
<th>生态 / 备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sass</td>
<td>2007</td>
<td>.sass / .scss</td>
<td><code>$color</code></td>
<td>嵌套、Mixin、函数、循环、继承</td>
<td>Dart-Sass / Ruby-Sass</td>
<td>最成熟；Bootstrap v5 用 Sass</td>
</tr>
<tr>
<td>SCSS</td>
<td>2007</td>
<td>.scss</td>
<td><code>$color</code></td>
<td>与 Sass 同，但语法完全兼容 CSS</td>
<td>Dart-Sass</td>
<td>Sass 的主流语法；推荐写法</td>
</tr>
<tr>
<td>Less</td>
<td>2009</td>
<td>.less</td>
<td><code>@color</code></td>
<td>嵌套、Mixin、运算、函数</td>
<td>less.js / Node 版</td>
<td>简单易学；Bootstrap v3-v4 用 Less</td>
</tr>
<tr>
<td>Stylus</td>
<td>2010</td>
<td>.styl</td>
<td><code>color = #333</code></td>
<td>缩进/大括号任选、函数、循环、插件</td>
<td>Node.js</td>
<td>语法灵活；Node 社区常用</td>
</tr>
<tr>
<td>PostCSS</td>
<td>2014</td>
<td>.css</td>
<td>—</td>
<td>插件体系（autoprefixer、Tailwind…）</td>
<td>Node.js</td>
<td>“后处理器”，常与 Sass/Less 联用</td>
</tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
