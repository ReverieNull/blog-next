import "../styles/globals.css";
import "@/assets/styles/global.css";
import "@/index.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/themecontext";
import "@/assets/styles/antd-menu.css";
import "@/assets/styles/content.module.css";
import "@/assets/styles/header.module.css";
import "@/assets/styles/Layout.module.css";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', saved);
    
    // 添加路由事件监听器
    const handleRouteChange = (url: string) => {
      if (!isValidRoute(url)) {
        router.replace('/');
      }
    };
    
    // 添加路由错误处理 - 使用更具体的类型替代 any
    const handleRouteError = (error: Error & { cancelled?: boolean }, url: string) => {
      if (error.cancelled) {
        return;
      }
      router.replace('/');
    };
    
    // 订阅路由事件
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteError);
    
    // 初始加载时检查当前路由
    if (typeof window !== 'undefined' && !isValidRoute(window.location.pathname)) {
      router.replace('/');
    }
    
    return () => {
      // 取消订阅
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteError);
    };
  }, [router]);

  // 检查路由是否有效的函数
  const isValidRoute = (path: string) => {
    // 这里列出你所有有效的路由
    const validRoutes = [
      '/',
      '/about',
      '/blog',
      '/contact',
      // 添加其他静态路由...
      // 动态路由模式，例如：/post/123
      /^\/post\/\d+$/,
    ];
    
    return validRoutes.some(route => 
      typeof route === 'string' ? path === route : route.test(path)
    );
  };

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}