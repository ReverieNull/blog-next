// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

export default function GraphBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <div> 
<h1>图结构基础</h1>
      <table>
        <thead>
          <tr>
            <th>表示法</th>
            <th>作用</th>
            <th>场景示例</th>
            <th>复杂度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>邻接表 <code>Map&lt;node, []&gt;</code></td>
            <td>稀疏图省空间</td>
            <td>社交网络、依赖图</td>
            <td>O(V+E)</td>
          </tr>
          <tr>
            <td>邻接矩阵 <code>[][]</code></td>
            <td>稠密图快速查边</td>
            <td>地图网格、棋盘</td>
            <td>O(V²)</td>
          </tr>
          <tr>
            <td>BFS（队列）</td>
            <td>最短路径无权图</td>
            <td>层序遍历、最短步数</td>
            <td>O(V+E)</td>
          </tr>
          <tr>
            <td>DFS（递归/栈）</td>
            <td>连通性、拓扑排序</td>
            <td>文件依赖、环路检测</td>
            <td>O(V+E)</td>
          </tr>
        </tbody>
      </table>
    <h1>图常见算法</h1>
    <table>
      <thead><tr><th>题号·名称</th><th>考点</th><th>极简代码</th><th>复杂度</th></tr></thead>
      <tbody>
        <tr>
          <td>200 岛屿数量</td>
          <td>DFS 四向</td>
          <td><pre>{`const numIslands = g => {
          const dfs = (i,j) => {
              if(i<0||j<0||i>=g.length||j>=g[0].length||g[i][j]!=='1')    return;
              g[i][j]='0';
              [[-1,0],[1,0],[0,-1],[0,1]].forEach(([x,y])=>dfs(i+x,j+y))};
              let c=0;
              for(let i=0;i<g.length;i++){
                 for(let j=0;j<g[0].length;j++){
                     if(g[i][j]==='1'){
                       c++;
                       dfs(i,j)}
                      }
                  }
                }
              return c
              };`}</pre></td>
          <td>O(V+E)</td>
        </tr>
        <tr>
          <td>207 课程表</td>
          <td>BFS 拓扑排序</td>
          <td><pre>{`const canFinish = (n,p) => {
          const g=Array.from({length:n},()=>[]),deg=new Array(n).fill(0);
          for(const [a,b]of p){
              g[b].push(a);
              deg[a]++
            }
          const q=deg.map((v,i)=>[v,i]).filter(v => v[0] === 0).map(v=>v[1]);
          let cnt=0;
          while(q.length){
              const u=q.shift();
              cnt++;
              for(const v of g[u]){
                  if(--deg[v]===0)q.push(v)
              }
              return cnt===n
          };`}</pre></td>
          <td>O(V+E)</td>
        </tr>
        <tr>
          <td>210 课程表 II</td>
          <td>拓扑输出</td>
          <td>{`const findOrder=(n,p)=>{/* 同上，q.push(u)改为res.push(u) */}`}</td>
          <td>O(V+E)</td>
        </tr>
        <tr>
          <td>787 K站中转最便宜</td>
          <td>分层图 BFS</td>
          <td><pre>{`const findCheapestPrice=(n,f,s,d,k)=>{
          const g=Array.from({length:n},()=>[]);
          for(const [u,v,w]of f)  g[u].push([v,w]);
          const q=[[s,0,0]],dist=new Array(n).fill(Infinity);
          while(q.length){
              const [u,c,step]=q.shift();
              if(step>k)  continue;
              for(const [v,w] of g[v]){
                  if(c+w<dist[v]){
                      dist[v]=c+w;
                      q.push([v,c+w,step+1])
                   }
              }
          }
              return dist[d]===Infinity?-1:dist[d]
      };`}</pre></td>
          <td>O(K·E)</td>
        </tr>
        <tr>
          <td>133 克隆图</td>
          <td>DFS/BFS 深拷贝</td>
          <td><pre>{`const cloneGraph=(node,map=new Map())=>{
          if(!node)  return null;
          if(map.has(node))  return map.get(node);
          const copy = new Node(node.val);
          map.set(node,copy);
          copy.neighbors = node.neighbors.map(n=>cloneGraph(n,map));
          return copy;
          }
          };`}</pre></td>
          <td>O(V+E)</td>
        </tr>
      </tbody>
    </table>  
      </div>
    </GlassBox>
  );
}
