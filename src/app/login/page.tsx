"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  //const [familyId, setFamilyId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

// ログインフォームの送信処理
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  // バリデーションチェック
  if (!userId || !password) {
    setError("ユーザーID と パスワード を入力してください。");
    return;
  }

  try {
    // バックエンドAPIにログイン情報を送信
    const response = await axios.post("/login", { userId, password });

    if (response.status === 200) {
      // ログイン成功時、ダッシュボードへ遷移
      router.push("/dashboard");
    }
  } catch (err) {
    console.error(err);
    setError("ログイン情報が間違っています。再度確認してください。");
  }
};

  return (
    <main className="p-6 bg-gray-50 max-w-xl mx-auto min-h-screen space-y-6">
      <h1 className="text-xl font-bold text-black">EternaLinkへようこそ！</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="ユーザーID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border p-2 rounded w-full placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full placeholder-gray-500"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="p-2 bg-[#785d13] text-white rounded-full w-full hover:bg-[#6a4e0d] transition duration-200 mt-64"
        >
          ログイン
        </button>
      </form>
    </main>
  );
}
