import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // 1. 修复尾部斜杠问题
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }
  
  // 2. 阻止静态文件请求被重写
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/static') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }
  
  // 3. 重写所有其他请求到首页（但保留原始URL）
  url.pathname = '/';
  return NextResponse.rewrite(url);
}