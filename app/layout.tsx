import './globals.css';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/app/components/GoogleAnalytics';
import Navbar from '@/app/components/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}` || 'http://localhost:3000'),
  title: {
    default: `zS1m's Blog | 凝结尾迹`,
    template: '%s | 凝结尾迹'
  },
  description: '专注于日常学习技术分享'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <GoogleAnalytics />
      <body>
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
