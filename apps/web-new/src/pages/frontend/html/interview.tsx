// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function HTMLInterview() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>HTML常见面试题</h1>
    <div>
<table>
<thead>
<tr><th>面试题</th><th>一句话答案</th><th>追问点</th></tr>
</thead>
<tbody>
<tr><td>doctype 不写会怎样？</td><td>触发怪异盒模型，IE 宽度含 border</td><td>怪异盒模型计算方式？</td></tr>
<tr><td>srcset 如何配套 sizes？</td><td>srcset=&#34;a.jpg 320w&#34; sizes=&#34;(max-width:600px) 320px&#34;</td><td>w 描述符 vs x 描述符区别？</td></tr>
<tr><td>rel=&#34;noopener&#34; 作用？</td><td>阻止 window.opener 钓鱼</td><td>还要不要 noreferrer？</td></tr>
<tr><td>语义化标签 SEO 好处？</td><td>爬虫理解结构，提升可访问性</td><td>section vs article 区别？</td></tr>
<tr><td>localStorage vs sessionStorage</td><td>前者永久，后者标签生命周期；5 MB</td><td>如何监听 storage 事件？</td></tr>
<tr><td>input type=&#34;email&#34; 校验规则？</td><td>宽松正则，需额外 pattern 严格验证</td><td>手机键盘差异？</td></tr>
<tr><td>canvas 高清屏模糊原因？</td><td>物理像素≠CSS像素，需 devicePixelRatio 缩放</td><td>如何同步坐标？</td></tr>
<tr><td>Shadow DOM 样式隔离原理？</td><td>内部样式不泄露，slot 透传</td><td>mode:closed 的调试限制？</td></tr>
<tr><td>圣杯布局现代写法？</td><td>Grid: grid-template-columns:200px 1fr 200px</td><td>旧版 Flex 负 margin 已淘汰</td></tr>
<tr><td>1px 边框高分屏实现？</td><td>transform:scaleY(.5) 或 媒体查询 min-device-pixel-ratio</td><td>iOS 地址栏浮动抖动？</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
