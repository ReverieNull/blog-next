// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function CSSInterview() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>CSS常见面试题</h1>
      <div>
<table>
<thead>
<tr><th>面试题</th><th>一句话答案</th><th>追问点 / 易踩坑</th></tr>
</thead>
<tbody>
<tr><td>盒模型两种模式？</td><td>标准：width=content；怪异：width=content+padding+border</td><td>无 doctype 触发怪异</td></tr>
<tr><td>BFC 触发条件？</td><td>overflow:hidden / display:flow-root 等</td><td>不能阻止兄弟 margin 合并</td></tr>
<tr><td>flex 子项宽度计算？</td><td>先 flex-basis → 剩余空间按 flex-grow 分配</td><td>flex:1 是 1 1 0%</td></tr>
<tr><td>Grid 隐式行高？</td><td>grid-auto-rows:100px</td><td>auto-fill 与 auto-fill 区别</td></tr>
<tr><td>sticky 失效原因？</td><td>任一祖先 overflow:hidden/scroll</td><td>吸底用 bottom:0</td></tr>
<tr><td>垂直居中 3 种？</td><td>①flex ②绝对+transform ③table-cell</td><td>transform 会新建层</td></tr>
<tr><td>响应式断点策略？</td><td>mobile-first:576/768/992/1200</td><td>用 em 写断点</td></tr>
<tr><td>CLS 如何优化？</td><td>img 写死 width/height 或用 aspect-ratio</td><td>Lighthouse 阈值小于0.1</td></tr>
<tr><td>will-change 滥用？</td><td>提前 GPU 合成，用完需删除</td><td>合成层过多占显存</td></tr>
<tr><td>CSS 变量主题切换？</td><td>--primary + data-theme 一键切换</td><td>IE11 需 PostCSS fallback</td></tr>
</tbody>
</table>
</div>
<h1>CSS常见手写题</h1>
<div>
<table>
<thead>
<tr>
<th>布局/图形</th>
<th>一句话思路</th>
<th>现代写法（拷贝即用）</th>
<th>追问点 / 易踩坑</th>
</tr>
</thead>
<tbody>
<tr>
<td>Grid 三栏等高</td>
<td>父级一行三列自动等高</td>
<td><code>display:grid; grid-template-columns:200px 1fr 200px;</code></td>
<td>grid-auto-rows:1fr 防多余空间</td>
</tr>
<tr>
<td>Flex 三栏</td>
<td>左右定宽，中间占剩余</td>
<td><code>display:flex; aside&#123;width:200px&#125; main&#123;flex:1&#125;</code></td>
<td>中间需 min-width:0 防撑爆</td>
</tr>
<tr>
<td>圣杯布局（历史）</td>
<td>中间先渲染，左右定宽</td>
<td><code>float + 负 margin + 相对定位</code></td>
<td>维护成本高，Grid 取代</td>
</tr>
<tr>
<td>双飞翼布局（历史）</td>
<td>圣杯变种，中间再包一层</td>
<td><code>中间 inner&#123;margin:0 200pxid&#125; + 浮动</code></td>
<td>已无优势，面试答“历史方案”</td>
</tr>
<tr>
<td>等高三栏（Flex）</td>
<td>三列同高</td>
<td><code>display:flex; align-items:stretch //  display:table</code></td>
<td>Flex 下 margin 不会撑高</td>
</tr>
<tr>
<td>自适应三栏</td>
<td>响应式自适应列数</td>
<td><code>display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr))</code></td>
<td>auto-fit vs auto-fill</td>
</tr>
<tr>
<td>三栏等高</td>
<td>三列同高自动撑满</td>
<td><code>display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 1fr;</code></td>
<td>Flex 下 margin 不会撑高容器</td>
</tr>
<tr>
<td>水平垂直居中</td>
<td>一维/二维通用</td>
<td><code>display: flex; align-items: center; justify-content: center;</code></td>
<td>transform 垂直居中会触发 GPU 合成层</td>
</tr>
<tr>
<td>Sticky Footer</td>
<td>内容不足时 footer 贴底</td>
<td><code>body&#123;min-height:100vh;display:flex;flex-direction:column&#125; main&#123;flex:1&#125;</code></td>
<td>负 margin 需已知 footer 高度</td>
</tr>
<tr>
<td>CSS 三角形</td>
<td>利用边框</td>
<td><code>width:0;height:0;border:10px solid transparent;border-bottom-color:red;</code></td>
<td>需设置宽高为 0，否则变形</td>
</tr>
<tr>
<td>九宫格瀑布流</td>
<td>自适应列数</td>
<td><code>display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;</code></td>
<td>grid-auto-rows:masonry 仍实验性</td>
</tr>
<tr>
<td>移动端 100% 高度</td>
<td>避免地址栏浮动</td>
<td><code>height:100dvh;</code></td>
<td>100vh 在 iOS Safari 会超屏</td>
</tr>
<tr>
<td>1px 边框</td>
<td>高分屏 1 物理像素</td>
<td><code>::after&#123;transform:scaleY(.5)&#125;</code></td>
<td>需伪元素撑开，iOS 地址栏抖动</td>
</tr>
<tr>
<td>滚动驱动动画</td>
<td>CSS @scroll-timeline</td>
<td><code>@scroll-timeline scroll &#123; source:selector(#scroller); &#125;</code></td>
<td>仅 Chrome 实验，生产用 GSAP</td>
</tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
