// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';


// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function LinkedListLinkedListBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
      {/* 第一部分：链表常用 API */}
      <h1>链表常用 API & 场景</h1>
      <table>
        <thead>
          <tr><th>操作</th><th>作用</th><th>前端 / 算法场景</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>new ListNode(val)</code></td>
            <td>创建节点 &#123;val, next&#125;</td>
            <td>构造任意单链表</td>
          </tr>
          <tr>
            <td><code>node.next</code></td>
            <td>访问或修改后继指针</td>
            <td>遍历、插入、反转</td>
          </tr>
          <tr>
            <td><code>dummyHead</code> 哑节点</td>
            <td>统一头插 / 删除逻辑，避免判空</td>
            <td>头删、反转、合并、分割</td>
          </tr>
          <tr>
            <td><code>slow / fast 双指针</code></td>
            <td>找中点、判环、倒数第 k 个</td>
            <td>面试高频模板</td>
          </tr>
          <tr>
            <td><code>prev / curr 指针</code></td>
            <td>原地反转链表</td>
            <td>206. Reverse Linked List</td>
          </tr>
        </tbody>
      </table>
      <h1>链表常见算法</h1>
      <table>
        <thead>
          <tr><th>题目</th><th>核心思路</th><th>关键代码片段</th><th>复杂度</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>反转链表</td>
            <td>prev/curr 迭代翻转 next 指针</td>
            <td>
              <pre>{`let prev = null, curr = head;
while (curr) {
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
return prev;`}</pre>
            </td>
            <td>O(n) / O(1)</td>
          </tr>

          <tr>
            <td>链表中环检测</td>
            <td>快慢指针相遇即环</td>
            <td>
              <pre>{`let slow = fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true;
}
return false;`}</pre>
            </td>
            <td>O(n) / O(1)</td>
          </tr>

          <tr>
            <td>找环入口</td>
            <td>快慢相遇后，再派一个指针从头同步走</td>
            <td>
              <pre>{`// 接上面相遇代码
let ptr = head;
while (ptr !== slow) {
  ptr = ptr.next;
  slow = slow.next;
}
return ptr;`}</pre>
            </td>
            <td>O(n) / O(1)</td>
          </tr>

          <tr>
            <td>合并两个有序链表</td>
            <td>哑节点 + 依次摘小节点</td>
            <td>
              <pre>{`const dummy = new ListNode(0);
let cur = dummy, p1 = l1, p2 = l2;
while (p1 && p2) {
  if (p1.val < p2.val) { cur.next = p1; p1 = p1.next; }
  else { cur.next = p2; p2 = p2.next; }
  cur = cur.next;
}
cur.next = p1 || p2;
return dummy.next;`}</pre>
            </td>
            <td>O(n+m) / O(1)</td>
          </tr>

          <tr>
            <td>删除倒数第 k 个节点</td>
            <td>快慢指针让快先走 k 步</td>
            <td>
              <pre>{`const dummy = new ListNode(0, head);
let fast = slow = dummy;
while (k--) fast = fast.next;
while (fast.next) { fast = fast.next; slow = slow.next; }
slow.next = slow.next.next;
return dummy.next;`}</pre>
            </td>
            <td>O(n) / O(1)</td>
          </tr>

          <tr>
            <td>回文链表</td>
            <td>快慢找中点 + 反转后半 + 双指针比对</td>
            <td>
              <pre>{`// 1. 快慢找中点
// 2. reverse(mid)
// 3. 两端同时遍历比较`}</pre>
            </td>
            <td>O(n) / O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    </GlassBox>
  );
}
