"use client";
//import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
//  const [familyId, setFamilyId] = useState("");
//  const [userId, setUserId] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSettings = () => {
    router.push('/settings');
  };

//  const handleRegister = () => {
//    router.push(`/register?family_id=${familyId}&user_id=${userId}`);
//  };

  return (
    <main className="p-6 bg-gray-50 max-w-xl mx-auto min-h-screen flex flex-col justify-center items-center space-y-6">
      {/* アプリケーション名 */}
      <h1 className="text-4xl font-bold text-black">EternaLink</h1>

      {/* ロゴ画像 */}
      <Image
        src="/eternalink.png"
        alt="EternaLink Logo"
        width={128}              // w-32 相当
        height={128}             // h-32 相当
        className="object-contain"
        priority                 // LCP最適化
      />

      {/* ボタン */}
      <div className="flex flex-col gap-4 mt-24">
        <button
          onClick={handleLogin}
          className="p-2 bg-[#785d13] text-white rounded-full w-64"
        >
          ログイン
        </button>
        <button
          onClick={handleSettings}
          className="p-2 bg-[#785d13] text-white rounded-full w-64"
        >
          設定
        </button>
      </div>
    </main>
/*
    <main className="p-6 bg-gray-50 max-w-xl mx-auto min-h-screen space-y-2">
      <h1 className="text-xl font-bold mb-4 text-black">ホーム</h1>

        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="family_id（開発時は「2」）"
            value={familyId}
            onChange={(e) => setFamilyId(e.target.value)}
            className="border p-2 rounded w-full placeholder-gray-500"
          />
          <input
            type="number"
            placeholder="user_id（開発時は「6」）"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border p-2 rounded w-full placeholder-gray-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleChatSearch}
            className="p-2 bg-[#785d13] text-white rounded w-full"
          >
            故人とチャット
          </button>
          <button
            onClick={handleRegister}
            className="p-2 bg-[#785d13] text-white rounded w-full"
          >
            データ登録
          </button>
        </div>
    </main>
*/
    );
}
