/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  // 关键配置：启用静态导出
  output: 'export',
  
  // 添加重定向规则
  async redirects() {
    return [
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
  
  // 添加回退规则
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
      }
    ];
  }
};

module.exports = nextConfig;