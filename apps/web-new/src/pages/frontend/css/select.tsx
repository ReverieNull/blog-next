// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function CSSSelect() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>CSS 选型决策</h1>
      <div>
<table>
<thead>
<tr>
<th>决策维度</th>
<th>原生 CSS</th>
<th>Sass / Less</th>
<th>Tailwind CSS</th>
<th>Bootstrap 5</th>
<th>Ant Design</th>
</tr>
</thead>
<tbody>
<tr>
<td>学习曲线</td>
<td>★</td>
<td>★★</td>
<td>★★☆</td>
<td>★</td>
<td>★★☆</td>
</tr>
<tr>
<td>构建依赖</td>
<td>无</td>
<td>Node / Dart-Sass</td>
<td>PostCSS</td>
<td>无（CDN 可用）</td>
<td>Webpack / Vite</td>
</tr>
<tr>
<td>首屏体积</td>
<td>最小</td>
<td>中等</td>
<td>按需最小</td>
<td>≈ 150 KB</td>
<td>≈ 500 KB</td>
</tr>
<tr>
<td>定制深度</td>
<td>100 %</td>
<td>高</td>
<td>极高</td>
<td>中等</td>
<td>高（主题变量）</td>
</tr>
<tr>
<td>浏览器兼容</td>
<td>全支持</td>
<td>需编译</td>
<td>IE11+</td>
<td>IE11+</td>
<td>IE11+</td>
</tr>
<tr>
<td>适用场景</td>
<td>个人 / 极简</td>
<td>设计系统 / 中台</td>
<td>设计驱动</td>
<td>快速原型</td>
<td>企业后台</td>
</tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
