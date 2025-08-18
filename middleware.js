export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // 1. 修复尾部斜杠问题
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url);
  }
  
  // 2. 处理路径大小写问题
  const shouldRedirect = url.pathname.toLowerCase() !== url.pathname;
  if (shouldRedirect) {
    url.pathname = url.pathname.toLowerCase();
    return Response.redirect(url);
  }
  
  return null;
}