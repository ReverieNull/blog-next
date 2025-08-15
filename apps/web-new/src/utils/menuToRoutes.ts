// src/utils/menuToRoutes.ts
import { lazy, LazyExoticComponent, ComponentType } from 'react';
import type { MenuProps } from 'antd';

// vite 的 glob 类型声明
type Module = { default: ComponentType<unknown> };
type PageModules = Record<string, () => Promise<Module>>;

// 把 import.meta.glob 强转成我们需要的类型
export const pageModules = import.meta.glob('../pages/frontend/**/*.tsx') as PageModules;

// list11 -> /frontend/html/base
export function keyToPath(key: string): string {
  return key
    .replace(/^list/, '')
    .replace(/(\d{2})/g, '/$1')
    .slice(1)
    .toLowerCase();
}

// 把路径补成实际文件 key
export function pathToFile(path: string): string {
  return `../pages/frontend/${path}.tsx`;
}

export function extractRoutes(items: MenuProps['items']) {
  const routes: {
    path: string;
    element: LazyExoticComponent<ComponentType>;
  }[] = [];

  function dfs(nodes?: MenuProps['items']) {
    if (!Array.isArray(nodes)) return;
    for (const node of nodes) {
      if (!node || node.type === 'divider') continue;

      // 有 children 就继续递归
      if ('children' in node && Array.isArray(node.children) && node.children.length) {
        dfs(node.children);
      }
      // 叶子节点且 key 存在
      else if ('key' in node && typeof node.key === 'string') {
        const file = pathToFile(keyToPath(node.key));
        if (pageModules[file]) {
          routes.push({
            path: keyToPath(node.key),
            element: lazy(pageModules[file]),
          });
        }
      }
    }
  }
  dfs(items);
  return routes;
}
