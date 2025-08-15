// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const htmlSkeleton = `
function twoSum(nums,target){
  const map = new Map(); //创建Map对象
  for(let i =0 ; i<nums.length; i++){ //遍历数组
    const complement = target - nums[i] //拿到目标值
    if(map.has(complement)){   //如果目标值存在
      return [map.get(complement)]  //返回该元素和其索引
    }
      //不然就把当前的元素和所有加入到Map中
      map.set(nums[i],i)

  }
}

`;

export default function TwoSum() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>两数之和</h1>
      <h2>题目描述</h2>
      <p>给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。</p>
      <section>使用哈希表存储值，遍历查找所需值</section>
      <pre>
        <code className={styles.languageMarkup}>{htmlSkeleton}</code>
      </pre>
    </GlassBox>
  );
}
