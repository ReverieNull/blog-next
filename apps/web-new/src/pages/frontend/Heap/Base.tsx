// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function HeapBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<h1>堆基础（优先队列）</h1>
      <table>
        <thead>
          <tr>
            <th>API/概念</th>
            <th>作用</th>
            <th>场景示例</th>
            <th>复杂度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>new MinHeap()</code><br/><code>new MaxHeap()</code></td>
            <td>最小/最大堆结构</td>
            <td>Top-K、任务调度</td>
            <td>构造 O(n)</td>
          </tr>
          <tr>
            <td><code>insert(val)</code></td>
            <td>上浮插入</td>
            <td>实时排行榜</td>
            <td>O(log n)</td>
          </tr>
          <tr>
            <td><code>extractTop()</code></td>
            <td>弹出堆顶</td>
            <td>取最小/最大值</td>
            <td>O(log n)</td>
          </tr>
          <tr>
            <td><code>peek()</code></td>
            <td>查看堆顶</td>
            <td>比较当前最值</td>
            <td>O(1)</td>
          </tr>
        </tbody>
      </table>
    <h1>堆常见算法</h1>
     <table>
      <thead><tr><th>题号·名称</th><th>考点</th><th>极简代码</th><th>复杂度</th></tr></thead>
      <tbody>
        <tr>
          <td>215 第K大</td>
          <td>小顶堆</td>
          <td><pre>{`      const findKthLargest=(a,k)=>{
          const h=new MinPriorityQueue();
          a.forEach(v=>{
              h.size()<k?h.enqueue(v):v>h.front().element&&(h.dequeue(),h.enqueue(v))
          });
          return h.front().element;
          };`}   </pre></td>
       
          <td>O(n log k)</td>
        </tr>
        <tr>
          <td>347 前K高频</td>
          <td>桶+堆</td>
          <td><pre>{`      const topKFrequent=(a,k)=>{
          const m=new Map();
          a.forEach(v=>m.set(v,(m.get(v)||0)+1));
          return [...m.entries()].sort((x,y)=>y[1]-x[1]).slice(0,k).map(e=>e[0]);};`}
          </pre>
          </td>
          <td>O(n log k)</td>
        </tr>
        <tr>
          <td>23 合并K个升序链表</td>
          <td>小顶堆</td>
          <td><pre>{`      const mergeKLists=l=>{
          const h=new MinPriorityQueue();
          l.forEach(node=>node&&h.enqueue(node,node.val));
          let d=new ListNode(),cur=d;
          while(!h.isEmpty()){
              const node=h.dequeue().element;
              cur.next=node;
              cur=cur.next;
              node.next&&h.enqueue(node.next,node.next.val)
          }
          return d.next;
          };`}</pre></td>
          <td>O(N log k)</td>
        </tr>
        <tr>
          <td>295 数据流中位数</td>
          <td>双堆</td>
          <td><pre>{`class MedianFinder{
          constructor(){
              this.max=new
              MaxPriorityQueue();
              this.min=new
              MinPriorityQueue();
           }
           addNum(v){
              this.max.enqueue(v);
              this.min.enqueue(this.max.dequeue().element);
              this.max.size()<this.min.size()&&this.max.enqueue(this.min.dequeue().element);
           }
           findMedian(){
              return this.max.size()>this.min.size()?this.max.front().element:(this.max.front().element+this.min.front().element)/2;
           }
           }`}</pre></td>
          <td>O(log n)</td>
        </tr>
        <tr>
          <td>253 会议室 II</td>
          <td>最小堆</td>
          <td><pre>{`const minMeetingRooms=i=>{
          i.sort((a,b)=>a[0]-b[0]);
          const h=new 
          MinPriorityQueue();
          for(const [s,e] of i){
              if(!h.isEmpty()&&h.front().element<=s){
              h.dequeue();
              h.enqueue(e);
          }
              }
          return h.size();
              };`}</pre></td>
          <td>O(n log n)</td>
        </tr>
      </tbody>
    </table>
    </GlassBox>
  );
}
