// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const htmlSkeleton = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>HTML 示例</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>站点标题</h1>
    <nav>
      <a href="/">首页</a>
      <a href="/about">关于</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>最新文章</h2>
      <article>
        <h3>文章标题</h3>
        <p>正文内容……</p>
      </article>
    </section>
  </main>

  <footer>
    <small>&copy; 2024 My Blog</small>
  </footer>
</body>
</html>`;

export default function DPKNAPSACK() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>HTML 基础速查表</h1>

      <h2>1. 文本标签</h2>
      <p>
        <strong>strong</strong>、<em>em</em>、<u>u</u>、<del>del</del>、
        <mark>mark</mark>、<code>code</code>、<small>small</small>
      </p>

      <h2>2. 列表</h2>
      <ul>
        <li>无序列表 1</li>
        <li>无序列表 2</li>
      </ul>
      <ol>
        <li>有序列表 1</li>
        <li>有序列表 2</li>
      </ol>

      <h2>3. 表格</h2>
      <table>
        <thead>
          <tr>
            <th>标签</th>
            <th>作用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt;table&gt;</td>
            <td>表格容器</td>
          </tr>
          <tr>
            <td>&lt;thead&gt;</td>
            <td>表头</td>
          </tr>
        </tbody>
      </table>

      <h2>4. 媒体</h2>


      <h2>5. 表单</h2>
      <form>
        <label>
          姓名：
          <input type="text" placeholder="请输入姓名" required />
        </label>
        <br />
        <label>
          邮箱：
          <input type="email" placeholder="name@example.com" required />
        </label>
        <br />
        <label>
          年龄：
          <input type="number" min="0" max="120" />
        </label>
        <br />
        <label>
          爱好（多选）：
          <select multiple>
            <option>阅读</option>
            <option>音乐</option>
            <option>运动</option>
          </select>
        </label>
        <br />
        <button type="submit">提交</button>
      </form>

      <h2>6. 折叠面板</h2>
      <details>
        <summary>点我展开详情</summary>
        <p>这里是隐藏的内容，支持任意 HTML。</p>
      </details>

      <h2>7. 完整页面骨架示例</h2>
      <pre>
        <code className={styles.languageMarkup}>{htmlSkeleton}</code>
      </pre>
    </GlassBox>
  );
}
