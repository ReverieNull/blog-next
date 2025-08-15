// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function TreeBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
 <div>
      <h1>树结构基础（二叉树为主）</h1>
      <table>
        <thead>
          <tr>
            <th>API/概念</th>
            <th>作用</th>
            <th>前端/算法场景</th>
            <th>复杂度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>new TreeNode(val)</code></td>
            <td>创建节点 &#123;val, left, right&#125;</td>
            <td>构造任意二叉树</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td><code>DFS（前/中/后序）</code></td>
            <td>递归/迭代遍历整棵树</td>
            <td>查找、求和、路径记录</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td><code>BFS（层序）</code></td>
            <td>队列层序遍历</td>
            <td>按层输出、最短路径</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>递归出口</td>
            <td>node === null 时 return</td>
            <td>防止空指针</td>
            <td>-</td>
          </tr>
          <tr>
            <td>高度/深度</td>
            <td>max(leftH, rightH) + 1</td>
            <td>判断平衡树、最大深度</td>
            <td>O(n)</td>
          </tr>
        </tbody>
      </table>
      <h1>树常见算法</h1>
       <table>
      <thead><tr><th>题号·名称</th><th>考点</th><th>极简代码</th><th>复杂度</th></tr></thead>
      <tbody>
        <tr>
          <td>104 最大深度</td>
          <td>DFS</td>
          <td>{`const maxDepth= r => r ? 1+Math.max(maxDepth(r.left),maxDepth(r.right)) : 0;`}</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>110 平衡二叉树</td>
          <td>DFS+剪枝</td>
          <td><pre>{`const isBalanced = r => {
          const dfs = n => !n ? 0 : ((h=Math.max(d=dfs(n.left),dfs(n.right))+1)>1?-1:h);
          return dfs(r)!==-1};`}</pre></td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>124 最大路径和</td>
          <td>后序</td>
          <td><pre>{`let res=-Infinity;
          const dfs = n =>{ 
          !n ? 0:(l=Math.max(0,dfs(n.left)),r=Math.max(0,dfs(n.right)),res=Math.max(res,n.val+l+r),n.val+Math.max(l,r));
          }
          dfs(root);
          return res;`}</pre></td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>226 翻转二叉树</td>
          <td>递归</td>
          <td>{`const invertTree = r => r ? ([r.left,r.right]=[invertTree(r.right),invertTree(r.left)],r) : r ;`
            }</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>543 二叉树直径</td>
          <td>后序</td>
          <td><pre>{`    let d=0;
          const dfs = n => {
          !n ? 0 : (l=dfs(n.left),r=dfs(n.right),d=Math.max(d,l+r),1+Math.max(l,r));
          dfs(root);
          }
          return d;`}</pre></td>
          <td>O(n)</td>
        </tr>
      </tbody>
    </table>
    </div>
    </GlassBox>
  );
}
