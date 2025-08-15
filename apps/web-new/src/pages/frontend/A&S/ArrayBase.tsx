// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function ArrayBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>常用数组、字符串API一览</h1>
        <div>
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>作用</th>
            <th>注意事项 & 实际使用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Array.prototype.map</code></td>
            <td>把每个元素映射成新值，返回<strong>等长</strong>新数组</td>
            <td>别在里面 <code>push</code>；<br/>实际：把接口 list 转成组件 list</td>
          </tr>
          <tr>
            <td><code>Array.prototype.filter</code></td>
            <td>过滤后返回<strong>子集</strong>数组</td>
            <td>链式顺序先 <code>filter</code> 后 <code>map</code> 可减少遍历；<br/>实际：筛掉已下架商品</td>
          </tr>
          <tr>
            <td><code>Array.prototype.reduce</code></td>
            <td>把数组“折叠”成单一值（累加、对象、树等）</td>
            <td>记得给初始值，防止空数组报错；<br/>实际：求购物车总价</td>
          </tr>
          <tr>
            <td><code>Array.prototype.sort((a,b)=&gt;a-b)</code></td>
            <td>原地排序（按数字/字符串/自定义）</td>
            <td>不传回调按 Unicode 排序，[10,2] 会变 [10,2]；<br/>实际：排行榜按分数倒序</td>
          </tr>
          <tr>
            <td><code>Array.prototype.includes</code></td>
            <td>判断是否<strong>包含</strong>某值，返回布尔</td>
            <td>能识别 <code>NaN</code>，但对象比较仍是引用；<br/>实际：权限数组里检查是否有 <code>&#39;admin&#39;</code></td>
          </tr>
          <tr>
            <td><code>Array.prototype.splice(start, deleteCount, ...items)</code></td>
            <td>万能增删改：从指定位置删 <code>deleteCount</code> 个并插入新元素</td>
            <td>会<strong>改变原数组</strong>；<br/>实际：拖拽排序时把元素插到新位置</td>
          </tr>
          <tr>
            <td><code>String.prototype.split(sep)</code></td>
            <td>按分隔符拆成数组</td>
            <td><code>&#39;&#39;/</code> 拆字符，<code>/\s+/</code> 拆空格；<br/>实际：解析 CSV 行</td>
          </tr>
          <tr>
            <td><code>String.prototype.replace(re, fn)</code></td>
            <td>替换匹配内容，可全局</td>
            <td>无 <code>/g</code> 只替换第一处；<br/>实际：把 <code>\n</code> 换成 <code>&lt;br/&gt;</code></td>
          </tr>
          <tr>
            <td><code>String.prototype.trim()</code></td>
            <td>去掉两端空白字符（空格、Tab、换行）</td>
            <td>IE9+；<br/>实际：登录前清理用户输入手机号</td>
          </tr>
          <tr>
            <td><code>JSON.stringify(obj)</code></td>
            <td>对象/数组 → JSON 字符串</td>
            <td>会丢失函数、<code>undefined</code>、循环引用抛错；<br/>实际：localStorage 缓存数据</td>
          </tr>
          <tr>
            <td><code>JSON.parse(str)</code></td>
            <td>JSON 字符串 → 对象/数组</td>
            <td>一定 <code>try…catch</code>，防恶意字符串；<br/>实际：读取 localStorage 并还原</td>
          </tr>
          <tr>
            <td><code>Array.from(arrayLike)</code></td>
            <td>把类数组/可迭代对象变成真正数组</td>
            <td>支持 <code>mapFn</code> 第二参；<br/>实际：把 <code>NodeList</code> 转成数组后用 <code>map</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1>常见数组、字符串算法</h1>
       <div>
      <table>
        <thead>
          <tr><th>问题</th><th>答案</th><th>追问</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>反转字符串</td>
            <td>双指针交换首尾字符，时间 O(n)，空间 O(1)</td>
            <td>如何原地反转 Unicode 字符串？</td>
          </tr>
          <tr>
            <td>两数之和（返回索引）</td>
            <td>哈希表存 &#123;值:索引&#125;，一次遍历即可，O(n)</td>
            <td>如果数组已排序，可否用双指针优化空间？</td>
          </tr>
          <tr>
            <td>无重复字符的最长子串</td>
            <td>滑动窗口+哈希集合，右扩左收，O(n)</td>
            <td>如何处理 Unicode 拓展字符？</td>
          </tr>
          <tr>
            <td>合并两个有序数组</td>
            <td>从后向前双指针填充，避免额外空间，O(m+n)</td>
            <td>若要求不能修改原数组，如何实现？</td>
          </tr>
          <tr>
            <td>有效的括号</td>
            <td>栈匹配，左括号压栈，右括号弹栈比对，O(n)</td>
            <td>如何扩展支持 { } 以外的自定义括号对？</td>
          </tr>
          <tr>
            <td>最长公共前缀</td>
            <td>纵向逐字符比较或排序后首尾比较，O(S)</td>
            <td>如果字符串数组非常大，如何降低内存占用？</td>
          </tr>
          <tr>
            <td>删除排序数组中的重复项</td>
            <td>快慢指针覆盖重复值，返回新长度，O(n)</td>
            <td>如何保留最多 k 次重复？</td>
          </tr>
          <tr>
            <td>实现 strStr()</td>
            <td>KMP 预处理 next 数组，主串不回溯，O(n+m)</td>
            <td>如何进一步优化到 Boyer-Moore?</td>
          </tr>
          <tr>
            <td>三数之和为 0</td>
            <td>排序+双指针去重，O(n²)</td>
            <td>如何扩展到四数之和？</td>
          </tr>
          <tr>
            <td>旋转数组最小值</td>
            <td>二分查找，判断 mid 与右边界，O(log n)</td>
            <td>若存在重复元素，如何保障复杂度？</td>
          </tr>
        </tbody>
      </table>
    </div>
    </GlassBox>
  );
}
