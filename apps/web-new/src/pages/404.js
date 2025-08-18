// pages/404.js
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - 页面未找到</h1>
      <p>抱歉，您访问的页面不存在</p>
      <Link href="/">
        <a style={{ color: '#0070f3', textDecoration: 'underline' }}>
          返回首页
        </a>
      </Link>
    </div>
  )
}