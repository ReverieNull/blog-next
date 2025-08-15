// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function SortBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
 <div>
          <h1>排序基础</h1>
      <table>
        <thead>
          <tr>
            <th>算法</th>
            <th>思想</th>
            <th>JS 一行/核心</th>
            <th>复杂度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>快速排序</td>
            <td>分治 + 基准划分</td>
            <td>
              <pre>{`const q = arr => arr.length < 2 ? arr :
[...q(arr.filter(v=>v<pivot)), pivot, ...q(arr.filter(v=>v>pivot))];`}</pre>
            </td>
            <td>平均 O(n log n)</td>
          </tr>
          <tr>
            <td>归并排序</td>
            <td>分治 + 合并有序子序列</td>
            <td>递归 split & merge</td>
            <td>O(n log n) / O(n)</td>
          </tr>
          <tr>
            <td>堆排序</td>
            <td>构建最大堆后反复取顶</td>
            <td>
                <pre>{`// 堆排序（升序）极简版
function heapSort(a){
  const n=a.length;
  const down=i=>{
    let l=i*2+1,r=i*2+2,large=i;
    if(l<n&&a[l]>a[large])large=l;
    if(r<n&&a[r]>a[large])large=r;
    if(large!==i){[a[i],a[large]]=[a[large],a[i]];down(large);}
  };
  for(let i=n>>1;i--;)down(i);          // 建堆
  for(let end=n;end-->1;){[a[0],a[end]]=[a[end],a[0]];down(end);}
  return a;
}
`}</pre>
            </td>
            <td>O(n log n)</td>
          </tr>
          <tr>
            <td>计数/桶排序</td>
            <td>用桶/计数数组替代比较</td>
            <td><code>const cnt = new Array(max+1).fill(0)</code></td>
            <td>O(n+k)</td>
          </tr>
          <tr>
            <td>内置排序</td>
            <td>TimSort（归并+插入）</td>
            <td><code>arr.sort((a,b)=&gt;a-b)</code></td>
            <td>O(n log n)</td>
          </tr>
        </tbody>
      </table>

      <h1>常见排序算法</h1>
       <table>
      <thead><tr><th>题号·名称</th><th>考点</th><th>极简代码</th><th>复杂度</th></tr></thead>
      <tbody>
        <tr>
          <td>912 排序数组</td>
          <td>快排</td>
          <td><pre>{`const sortArray = a => 
          a.length<2 ? a : [...sortArray(a.filter(v=>v<a[0])),...a.filter(v=>v===a[0])),...sortArray(a.filter(v=>v>a[0]))];`}</pre></td>
          <td>平均 O(n log n)</td>
        </tr>
        <tr>
          <td>75 颜色分类</td>
          <td>三路快排</td>
          <td><pre>
            {`const sortColors=a=>{
          let l=0,i=0,r=a.length-1;
          while(i<=r){
                a[i] === 0 ? [a[i++],a[l++]]=[a[l],a[i]] : a[i]===1?i++:[a[i],a[r--]]=[a[r],a[i]]
                }
        };`}</pre></td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>215 第K大（堆排）</td>
          <td>最大堆</td>
          <td><pre>{`const findKthLargestHeap=(a,k)=>{
          const heapSort=a=>{
                const down=(n,i)=>{
                        let l=i*2+1,r=i*2+2,large=i;
                        if(l<n&&a[l]>a[large])  large=l;
                        if(r<n&&a[r]>a[large])  large=r;
                        if(large!==i){
                                [a[i],a[large]]=[a[large],a[i]];down(n,large)
                                }
                };
          for(let i=a.length>>1;i--;)down(a.length,i);
          for(let e=a.length;e-->1;){
                [a[0],a[e]]=[a[e],a[0]];
                down(e,0)}
                return a
          };
        heapSort(a);
        return a[a.length-k]
        };`}</pre></td>
          <td>O(n log n)</td>
        </tr>
        <tr>
          <td>347 前K高频（桶排）</td>
          <td>计数桶</td>
          <td><pre>{`const topKFrequent=(a,k)=>{
          const m=new Map();
          a.forEach(v=>m.set(v,(m.get(v)||0)+1));
          const bucket=Array(a.length+1).fill().map(()=>[]);
          for(const [v,c]of m)  bucket[c].push(v);
          const res=[];
          for(let i=bucket.length-1;i>=0;i--){
                for(const v of bucket[i]){
                        res.push(v);
                }
          if(res.length===k)  return res
          }
          };`}</pre></td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>164 最大间距</td>
          <td>桶排序</td>
          <td><pre>{`const maximumGap=a=>{
          const n=a.length;
          if(n<2)  return 0;
          const min=Math.min(...a),max=Math.max(...a);
          const bucketSize=Math.max(1,Math.floor((max-min)/(n-1))),bucketCount=Math.floor((max-min)/bucketSize)+1;
          const buckets=Array.from({length:bucketCount},()=>({min:Infinity,max:-Infinity}));
          for(const v of a){
                const idx=Math.floor((v-min)/bucketSize);
                buckets[idx].min=Math.min(buckets[idx].min,v);
                buckets[idx].max=Math.max(buckets[idx].max,v)
        }
        let gap=0,prev=buckets[0].max;
        for(let i=1;i<bucketCount;i++){
                if(buckets[i].min!==Infinity){
                        gap=Math.max(gap,buckets[i].min-prev);
                        prev=buckets[i].max
                }
        return gap
        };`}</pre></td>
          <td>O(n)</td>
        </tr>
      </tbody>
    </table>
    </div>
    </GlassBox>
  );
}
