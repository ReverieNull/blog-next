// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import styles from '../pagescss/htmlbase.css/all.module.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';


export default function GitPlatform() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
<div>
<table>
<thead>
<tr><th>概念</th><th>一句话讲解</th><th>操作示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>GitHub</td><td>代码托管与协作平台</td><td><code>git remote add origin https://github.com/user/repo.git</code></td><td>公共仓库注意隐私</td></tr>
<tr><td>GitLab</td><td>企业级代码托管与 CI/CD</td><td><code>git remote add origin https://gitlab.com/user/repo.git</code></td><td>自主部署支持私有化</td></tr>
<tr><td>Bitbucket</td><td>代码托管与 CI/CD</td><td><code>git remote add origin https://bitbucket.org/user/repo.git</code></td><td>免费私有仓库有限制</td></tr>
<tr><td>Gitee</td><td>国内代码托管平台</td><td><code>git remote add origin https://gitee.com/user/repo.git</code></td><td>国内用户访问快</td></tr>
<tr><td>比较</td><td>比较不同托管平台</td><td>GitHub 适合开源项目，GitLab 适合企业级项目</td><td>根据需求选择平台</td></tr>
<tr><td>CI/CD</td><td>自动化构建和部署</td><td>GitHub Actions, GitLab CI/CD</td><td>配置 <code>.github/workflows</code> 文件</td></tr>
<tr><td>仓库管理</td><td>管理代码仓库</td><td>创建、删除、设置权限</td><td>注意权限配置</td></tr>
<tr><td>项目管理</td><td>管理项目进度和任务</td><td>GitHub Projects, GitLab Issues</td><td>配合标签和里程碑使用</td></tr>
<tr><td>Wiki</td><td>项目文档</td><td>GitHub Wiki, GitLab Wiki</td><td>保持文档与代码同步</td></tr>
<tr><td>审计</td><td>审计代码提交和仓库活动</td><td>查看提交历史和用户操作日志</td><td>定期检查安全</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
