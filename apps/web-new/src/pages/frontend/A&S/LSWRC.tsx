// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const htmlSkeleton = `
//滑动窗口（同向双指针）,右指针扩展窗口,现重复出时左指针右缩,用 Set/Map 判重
function lengthOfLongestSubstring(s) { 
  const set = new Set();
  let left = 0, right = 0, res = 0;
  while (right < s.length) { ///右指针扩展窗口
    if (!set.has(s[right])) {  //目前set无重复字符
      set.add(s[right]);  将当前字符加进去
      right++;  //右指针右移
      res = Math.max(res, right - left); //更新最长的子串 
    } else {  //如果窗口内字符重复，则左指针右移，直到不重复为止 
      set.delete(s[left]); //删除窗口内重复字符
      left++;  //左指针右移
    } 
  }


} 

`;



export default function LSWRC() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>最长无重复子串</h1>

      <h2>题目要求</h2>
      <p>给定字符串 s找<strong>最长连续子串</strong>要求字符<strong>全部唯一</strong>返回其<strong>长度</strong>
      </p>
      <pre>
        <code className={styles.languageMarkup}>{htmlSkeleton}</code>
      </pre>
    </GlassBox>
  );
}
