// app/chat-search/page.tsx など（ルート用のファイル）
'use client';

import { Suspense } from 'react';
import ChatSearchInner from './ChatSearchInner';

export default function ChatSearchPage() {
  return (
    <main className="min-h-screen p-6 max-w-xl mx-auto bg-gray-50">
      <h2 className="text-xl font-bold mb-4">トーク</h2>
      {/* Suspense 境界、必ず fallback を用意 */}
      <Suspense fallback={<p className="text-center">読み込み中…</p>}>
        <ChatSearchInner />
      </Suspense>
    </main>
  );
}
