// vite 专用（webpack 看备注）
export const pageModules = import.meta.glob('../pages/frontend/**/*.tsx');

// list11 -> /frontend/html/base
export function keyToPath(key: string) {
  return key
    .replace(/^list/, '')
    .replace(/(\d{2})/g, '/$1')
    .slice(1)
    .toLowerCase();
}

// 把路径补成实际文件 key
export function pathToFile(path: string) {
  return `../pages/frontend/${path}.tsx`;
}
