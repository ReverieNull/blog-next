// pages/index.tsx
import dynamic from 'next/dynamic';

// 动态导入您的SPA应用，避免SSR问题
const SPAApp = dynamic(() => import('@/App'), {
  ssr: false, // 禁用服务器端渲染
});

export default function HomePage() {
  return (
    <div className="app-container">
      <SPAApp />
    </div>
  );
}