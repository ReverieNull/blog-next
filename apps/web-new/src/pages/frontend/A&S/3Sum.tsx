// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const htmlSkeleton = `
//思路就是排序二分双指针去重
function threeSum(nums,target=0){

  nums.sort((a,b)=>a-b) //排个序先，确保是升序
  const res = []  //满足条件的不止一个，先放个空数组存结果
  for(let i = 0;i<nums.length;i++){  //开始循环
   if (i && nums[i] === nums[i - 1]) continue; //给
   i去重 
  let left = i+1 ,right = nums.length-1 //左右指针
    while(left < right){ //双指针循环     
      let sum = nums[i] + nums[left] + nums[right] //计算sum
      if(sum === target){ 
        res.push([nums[i],nums[left],nums[right]]) 如果说满足条件，返回这三个元素
        while(left < right && nums[left] === nums[left+1]) left++ //去重，去左重
        while(left < right && nums[right] === nums[right-1]) right-- //还是去重，但去右重 
        left++
        right--
      } else if(sum < target){ //sum小于目标值，左指针右移增大
        left++
      } else { //sum大于目标值，右指针左移减小
        right--
      }
  }
      }
  return res;  //返回结果
  }
`;

export default function ThreeSum() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>三数之和</h1>
      <h2>题目描述</h2>
      <p>
        给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 / target？找出所有满足条件且不重复的三元组。
      </p>
      <pre>
        <code className={styles.languageMarkup}>{htmlSkeleton}</code>
      </pre>
    </GlassBox>
  );
}
