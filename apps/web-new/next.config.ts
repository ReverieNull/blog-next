/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  // 仅添加重定向规则（不再添加回退规则）
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "//:path+",
        destination: "/:path+",
        permanent: true,
      }
    ];
  }
};

module.exports = nextConfig;