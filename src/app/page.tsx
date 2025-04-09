"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [familyId, setFamilyId] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const handleChatSearch = () => {
    if (!familyId || !userId) {
      alert("family_id、user_idを入力してください。");
      return;
    }
    router.push(`/chatsearch?family_id=${familyId}&user_id=${userId}`);
  };

  const handleRegister = () => {
    router.push(`/register?family_id=${familyId}&user_id=${userId}`);
  };

  return (
    <main className="p-6 bg-gray-50 max-w-xl mx-auto min-h-screen space-y-2">
      <h1 className="text-xl font-bold mb-4">ホーム</h1>

        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="family_id（開発時は「2」）"
            value={familyId}
            onChange={(e) => setFamilyId(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="user_id（開発時は「6」）"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleChatSearch}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            故人とチャット
          </button>
          <button
            onClick={handleRegister}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            データ登録
          </button>
        </div>
    </main>
  );
}
