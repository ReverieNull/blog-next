// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function GitBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>命令示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>克隆</td><td>复制远程仓库到本地</td><td><code>git clone https://github.com/user/repo.git</code></td><td>检查网络连接</td></tr>
<tr><td>添加</td><td>添加文件到暂存区</td><td><code>git add file</code> 或 <code>git add .</code></td><td>检查文件状态使用 <code>git status</code></td></tr>
<tr><td>提交</td><td>提交暂存区内容到本地仓库</td><td><code>git commit -m &#34;message&#34;</code></td><td>提交前确保文件正确</td></tr>
<tr><td>查看历史</td><td>查看提交历史</td><td><code>git log</code></td><td>使用 <code>git log --oneline</code> 简化输出</td></tr>
<tr><td>分支</td><td>创建新分支</td><td><code>git branch new-branch</code></td><td>切换分支使用 <code>git checkout</code></td></tr>
<tr><td>合并</td><td>合并分支到当前分支</td><td><code>git merge branch</code></td><td>解决冲突后提交</td></tr>
<tr><td>推送</td><td>推送本地分支到远程仓库</td><td><code>git push origin branch</code></td><td>首次推送使用 <code>git push --set-upstream origin branch</code></td></tr>
<tr><td>拉取</td><td>获取远程仓库更新并合并</td><td><code>git pull origin branch</code></td><td>解决冲突后提交</td></tr>
<tr><td>重置</td><td>重置当前分支到指定提交</td><td><code>git reset --hard commit-hash</code></td><td>会导致数据丢失</td></tr>
<tr><td>远程</td><td>查看远程仓库配置</td><td><code>git remote -v</code></td><td>添加远程库使用 <code>git remote add</code></td></tr>
</tbody>
</table>
</div>

    </GlassBox>
  );
}
