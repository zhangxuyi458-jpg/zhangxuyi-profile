import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张旭艺｜生态学研究者",
  description: "张旭艺的个人学术主页：生态学、农业数字孪生、空间分析与数据可视化。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
