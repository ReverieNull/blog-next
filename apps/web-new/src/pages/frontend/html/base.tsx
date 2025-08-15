// src/FEHTML/BASE/index.tsx
import React from 'react';
import { useMemo, useState } from 'react';
import GlassBox from '@/components/GlassBox';
import  styles from '@/pages/frontend/pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const rows = [
  ['<!doctype html>', '告诉浏览器用 HTML5 标准渲染', '<!doctype html>', '前面不能有任何字符，否则触发怪异模式'],
  ['<html lang>', '声明页面语言，影响读屏、SEO', '<html lang="zh-CN">', '不写 lang → 读屏软件读成英文发音'],
  ['<meta charset="UTF-8">', '指定字节流到字符的映射', '<meta charset="UTF-8">', '必须放在 <head> 第一行，否则中文乱码'],
  ['<meta name="viewport">', '移动端视口控制', '<meta name="viewport" content="width=device-width,initial-scale=1">', '加 user-scalable=no 会被商店拒审'],
  ['<title>', '浏览器标签 & 搜索结果标题', '<title>前端实习 | 个人博客</title>', '超过 60 字符会被截断'],
  ['<meta name="description">', '搜索结果摘要', '<meta name="description" content="记录前端学习日常">', '缺失 → 搜索引擎自己抓导航'],
  ['<link rel="canonical">', '指定权威 URL', '<link rel="canonical" href="https://my.dev/post/1">', '写错路径 → 全站被误判抄袭'],
  ['<link rel="icon">', '网站图标', '<link rel="icon" href="favicon.ico">', '不设置 → 浏览器默认地球图标'],
  ['<header>', '页眉或文章头部', '<header><h1>{{title}}</h1></header>', '一个页面可以多次出现，但主 header 语义唯一'],
  ['<nav>', '主要导航区域', '<nav aria-label="主导航">…</nav>', '不加 aria-label → 读屏提示两次'],
  ['<main>', '页面主体（只能有一个）', '<main id="content">…</main>', '放多个 <main> 会被可访问性工具报错'],
  ['<section>', '文档章节', '<section aria-labelledby="s1">…</section>', '无标题 → HTML Outline 报错'],
  ['<article>', '独立可分发内容块', '<article class="post">…</article>', '可嵌套，里层 article 表示评论'],
  ['<aside>', '侧边栏/附加信息', '<aside>目录</aside>', '放在 <main> 外表示整站侧边栏'],
  ['<footer>', '页脚', '<footer>&copy; 2025</footer>', '可多次出现（文章页脚/站点页脚）'],
  ['<h1>-<h6>', '六级标题', '<h1>{{title}}</h1>', '跳级 → 可访问性警告'],
  ['<p>', '段落', '<p>正文</p>', '内不能放 <div>，会被浏览器自动拆标签'],
  ['<br>', '强制换行', '第一行<br>第二行', '连续多个被读屏重复朗读'],
  ['<hr>', '主题分隔线', '<hr class="divider">', '语义是“主题转折”，不是装饰线'],
];

export default function HTMLBase() {
  const [filter, setFilter] = useState('');

  const filtered = useMemo(
    () => rows.filter(r => r.some(c => c.toLowerCase().includes(filter.toLowerCase()))),
    [filter]
  );
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>HTML 基础速查表</h1>
            <input
        type="text"
        placeholder="搜索标签..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>标签/属性</th>
            <th>讲解</th>
            <th>示例</th>
            <th>提示</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(([tag, desc, code, pit], idx) => (
            <tr key={idx}>
              <td><code className={styles.languageMarkup}>{tag}</code></td>
              <td>{desc}</td>
              <td><code className={styles.languageMarkup}>{code}</code></td>
              <td>{pit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </GlassBox>
  );
}
