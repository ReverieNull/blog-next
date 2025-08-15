// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

export default function HashTableBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <div>
     <h1>哈希表基础</h1>
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>作用</th>
            <th>场景示例</th>
            <th>复杂度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>new Map()</code></td>
            <td>可迭代、任意键类型</td>
            <td>缓存、频次统计</td>
            <td>O(1) 均摊</td>
          </tr>
          <tr>
            <td><code>obj[key] = val</code><br/><code>Object.create(null)</code></td>
            <td>简单对象做哈希</td>
            <td>计数、索引映射</td>
            <td>O(1) 均摊</td>
          </tr>
          <tr>
            <td><code>set(key,val)</code><br/><code>get(key)</code><br/><code>delete(key)</code></td>
            <td>增删查</td>
            <td>LRU、两数之和</td>
            <td>O(1)</td>
          </tr>
        </tbody>
      </table>
      <h1>哈希表常见算法</h1>
      <table>
      <thead><tr><th>题号·名称</th><th>考点</th><th>极简代码</th><th>复杂度</th></tr></thead>
      <tbody>
        <tr>
          <td>1 两数之和</td>
          <td>一次遍历</td>
          <td><pre>{`const twoSum=(a,t)=>{
          const m=new Map();
          for(let i=0;i<a.length;i++){
              const c=t-a[i];
              if(m.has(c))    return[m.get(c),i];
              m.set(a[i],i);  
              }
          };`}</pre></td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>3 无重复最长子串</td>
          <td>滑动窗口+Set</td>
          <td><pre>{`const lengthOfLongestSubstring=s=>{
          const set=new Set();
          let l=0,r=0,res=0;
          while(r<s.length){
              while(set.has(s[r])) set.delete(s[l++]);
              set.add(s[r++]);
              res=Math.max(res,r-l);
              }
            return res;
          };`}</pre></td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>49 字母异位词分组</td>
          <td>哈希+排序键</td>
          <td><pre>{`const groupAnagrams=strs=>{
          const m=new Map();
          for(const w of strs){
              const k=[...w].sort().join('');
              m.has(k) ? m.get(k).push(w) : m.set(k,[w]);
              }
              return [...m.values()];
          };`}</pre></td>
          <td>O(nk log k)</td>
        </tr>
        <tr>
          <td>146 LRU 缓存</td>
          <td>哈希+双向链表</td>
          <td><pre>{`class LRU{
          constructor(cap){
              this.map=new Map();
              this.cap=cap;
          }
          get(k){
              if(!this.map.has(k))  return -1;
              const v=this.map.get(k);
              this.map.delete(k);
              this.map.set(k,v);
              return v;
              }
          put(k,v){
              this.map.has(k)&&this.map.delete(k);
              this.map.set(k,v);
              this.map.size>this.cap&&this.map.delete(this.map.keys().next().value);
              }
          }`}</pre></td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>560 和为K的子数组</td>
          <td>前缀和+哈希</td>
          <td><pre>{`const subarraySum=(a,k)=>{
          let pre=0,res=0,m=new Map([[0,1]]);
          for(const v of a){
              pre+=v;
              res+=m.get(pre-k)||0;
              m.set(pre,(m.get(pre)||0)+1);
              }
          return res;
          };`}</pre></td>
          <td>O(n)</td>
        </tr>
      </tbody>
    </table>
      </div>
    </GlassBox>
  );
}
