// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function DPBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <div>
     <h1>动态规划基础</h1>
      <table>
        <thead>
          <tr>
            <th>要素</th>
            <th>作用</th>
            <th>示例</th>
            <th>复杂度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>状态定义 <code>dp[i]</code></td>
            <td>子问题的最优解</td>
            <td><code>dp[i] = 以 i 结尾的最长子串</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>转移方程</td>
            <td>如何由小状态推大状态</td>
            <td><code>dp[i] = dp[i-1] + cost</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>初始条件</td>
            <td>最小子问题答案</td>
            <td><code>dp[0] = 0</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>滚动数组</td>
            <td>降维节省空间</td>
            <td>斐波那契只存前两项</td>
            <td>O(1) 空间</td>
          </tr>
        </tbody>
      </table>
      <h1>动态规划常见算法</h1>
    <table>
      <thead><tr><th>题号·名称</th><th>考点</th><th>极简代码</th><th>复杂度</th></tr></thead>
      <tbody>
        <tr>
          <td>70 爬楼梯</td>
          <td>线性 DP</td>
          <td><pre>{`const climbStairs=n=>{
          let a=1,b=1;
          for(let i=2;i<=n;i++){
            [a,b]=[b,a+b]
            }
            return b
            };`}</pre></td>
          <td>O(n) / O(1)</td>
        </tr>
        <tr>
          <td>53 最大子序和</td>
          <td>前缀/连续</td>
          <td><pre>{`const maxSubArray=a=>{
          let cur=a[0],max=a[0];
          for(let i=1;i<a.length;i++){
              cur=Math.max(a[i],cur+a[i]);
              max=Math.max(max,cur)
              }
          return max};`}</pre></td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>198 打家劫舍</td>
          <td>线性 DP</td>
          <td><pre>{`const rob=a=>{
          let pre=0,cur=0;
          for(const v of a){
              [pre,cur]=[cur,Math.max(cur,pre+v)]
              }
          return cur};`} 
            </pre></td>
          <td>O(n) / O(1)</td>
        </tr>
        <tr>
          <td>322 零钱兑换</td>
          <td>完全背包</td>
          <td><pre>{`const coinChange=(coins,amt)=>{
          const dp=Array(amt+1).fill(amt+1);
          dp[0]=0;
          for(const c of coins){
              for(let i=c;i<=amt;i++){
                  dp[i]=Math.min(dp[i],dp[i-c]+1);
              }
          }
              return dp[amt] > amt ? -1 : dp[amt] 
          };`}</pre></td>
          <td>O(n·amt)</td>
        </tr>
        <tr>
          <td>5 最长回文子串</td>
          <td>中心扩散 / DP</td>
          <td><pre>{`const longestPalindrome=s=>{
          let res='';
          const expand=(l,r)=>{
              while(l>=0&&r<s.length&&s[l]===s[r]){
                  if(r-l+1>res.length)  res=s.slice(l,r+1);l--;r++
                  }
              };
              for(let i=0;i<s.length;i++){
                  expand(i,i);
                  expand(i,i+1)
              }
          return res
          };`}</pre></td>
          <td>O(n²) / O(1)</td>
        </tr>
      </tbody>
    </table>
      </div>
    </GlassBox>
  );
}
