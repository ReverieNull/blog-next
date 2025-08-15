// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function SQBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>栈与队列API速查表</h1>
       <div>
      <table>
        <thead>
          <tr>
            <th>类别</th>
            <th>常用 API</th>
            <th>作用</th>
            <th>前端高频场景</th>
          </tr>
        </thead>
        <tbody>
          {/* ——— Stack 栈 ——— */}
          <tr><td rowSpan={4}>栈 <small>后进先出</small></td></tr>
          <tr>
            <td><code>push(item)</code></td>
            <td>压入栈顶</td>
            <td>路由历史、撤销/重做、DFS、括号匹配</td>
          </tr>
          <tr>
            <td><code>pop()</code></td>
            <td>弹出并返回栈顶</td>
            <td>撤销最后一步操作、出栈求值</td>
          </tr>
          <tr>
            <td><code>stack[stack.length-1]</code><br/><small>或 at(-1)</small></td>
            <td>查看栈顶但不移除</td>
            <td>最小栈、单调栈模板</td>
          </tr>

          {/* ——— Queue 队列 ——— */}
          <tr><td rowSpan={4}>队列 <small>先进先出</small></td></tr>
          <tr>
            <td><code>push / enqueue(item)</code></td>
            <td>入队尾</td>
            <td>消息队列、任务调度、BFS</td>
          </tr>
          <tr>
            <td><code>shift() / dequeue()</code></td>
            <td>出队头</td>
            <td>轮询接口、逐帧渲染任务</td>
          </tr>
          <tr>
            <td><code>queue[0]</code><br/><small>或 at(0)</small></td>
            <td>查看队头</td>
            <td>判断下一个要处理的元素</td>
          </tr>

          {/* ——— 双端队列 Deque ——— */}
          <tr><td rowSpan={5}>双端队列</td></tr>
          <tr>
            <td><code>unshift(item)</code></td>
            <td>头插</td>
            <td>单调队列头维护最大值</td>
          </tr>
          <tr>
            <td><code>shift()</code></td>
            <td>头删</td>
            <td>滑动窗口最大值出队过期的下标</td>
          </tr>
          <tr>
            <td><code>push(item)</code></td>
            <td>尾插</td>
            <td>常规入队</td>
          </tr>
          <tr>
            <td><code>pop()</code></td>
            <td>尾删</td>
            <td>单调队列从尾部踢出较小值</td>
          </tr>

          {/* ——— 高级封装 ——— */}
          <tr>
            <td>
              <small>如需要 O(1) 的栈顶 / 队头操作，可封装：</small><br/>
              <code>class MyStack &#123; push(x){} pop(){} top(){}&#125;</code><br/>
              <code>class MyQueue &#123; enqueue(x){} dequeue(){} front(){} &#125;</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <h1>栈与队列常见算法</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>题目</th>
            <th>核心思路</th>
            <th>JS 关键代码</th>
            <th>复杂度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>有效的括号</td>
            <td>遇左括号压栈，遇右括号弹栈比对</td>
            <td>
              <pre>{`const map = {')':'(','}':'{',']':'['};
const st = [];
for (const c of s) {
  if (map[c]) {
    if (st.pop() !== map[c]) return false;
  } else st.push(c);
}
return !st.length;`}</pre>
            </td>
            <td>O(n) / O(n)</td>
          </tr>

          <tr>
            <td>最小栈</td>
            <td>辅助栈实时存当前最小值</td>
            <td>
              <pre>{`constructor() {
  this.st = [];
  this.minSt = [Infinity];
}
push(x){
  this.st.push(x);
  this.minSt.push(Math.min(x, this.minSt.at(-1)));
}
pop(){this.st.pop();this.minSt.pop();}
top(){return this.st.at(-1);}
getMin(){return this.minSt.at(-1);}`}</pre>
            </td>
            <td>O(1) / O(n)</td>
          </tr>

          <tr>
            <td>用栈实现队列</td>
            <td>双栈：A 只进，B 为空时倒序出</td>
            <td>
              <pre>{`const A=[], B=[];
enqueue: (x) => A.push(x);
dequeue: () => {
  if (!B.length) while (A.length) B.push(A.pop());
  return B.pop();
}`}</pre>
            </td>
            <td>摊还 O(1) / O(n)</td>
          </tr>

          <tr>
            <td>用队列实现栈</td>
            <td>双队列轮流倒，保留队尾</td>
            <td>
              <pre>{`push: (x) => q1.push(x);
pop: () => {
  while (q1.length>1) q2.push(q1.shift());
  const v = q1.shift();
  [q1,q2]=[q2,q1];
  return v;
}`}</pre>
            </td>
            <td>摊还 O(n) / O(n)</td>
          </tr>

          <tr>
            <td>每日温度</td>
            <td>单调递减栈：存下标，升温时出栈</td>
            <td>
              <pre>{`const st=[], res=new Array(T.length).fill(0);
for(let i=0;i<T.length;i++){
  while(st.length && T[i]>T[st.at(-1)]){
    const j=st.pop();
    res[j]=i-j;
  }
  st.push(i);
}
return res;`}</pre>
            </td>
            <td>O(n) / O(n)</td>
          </tr>

          <tr>
            <td>滑动窗口最大值</td>
            <td>单调递减双端队列：队头即窗口最大值</td>
            <td>
              <pre>{`const q=[], res=[];
for(let i=0;i<nums.length;i++){
  while(q.length && nums[i]>=nums[q.at(-1)]) q.pop();
  q.push(i);
  if(q[0]<=i-k) q.shift();
  if(i>=k-1) res.push(nums[q[0]]);
}
return res;`}</pre>
            </td>
            <td>O(n) / O(k)</td>
          </tr>
        </tbody>
      </table>
    </div>


    </GlassBox>
  );
}
