import "./globals.css";

export const metadata = {
  title: "EternaLink",
  description: "FastAPI + Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {/* アプリ名ヘッダー */}
        <header className="bg-blue-600 text-white text-xl font-bold p-4 shadow">
          EternaLink
        </header>

        {/* 各ページの内容 */}
        {children}
      </body>
    </html>
  );
}