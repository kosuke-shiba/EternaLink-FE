// app/chat-search/ChatSearchInner.tsx
'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ChatSearchInner() {
    const [query, setQuery] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [botMessage, setBotMessage] = useState("");
    const [photo, setPhoto] = useState<string | null>(null);
    const [familyId, setFamilyId] = useState<number | null>(null);
    const [userId, setUserId] = useState<number | null>(null);

    const searchParams = useSearchParams();
    const family = searchParams.get("family_id");
    const user   = searchParams.get("user_id");

    useEffect(() => {
        if (!family || !user) {
            alert("URLに family_id と user_id が必要です");
            return;
        }
        setFamilyId(Number(family));
        setUserId(Number(user));
    }, [family, user]);

    const handleSubmit = async () => {
        if (!query || familyId === null || userId === null) return;

        setUserMessage(query);
        setBotMessage("");
        setPhoto(null);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_input: query,
                family_id: familyId,
                user_id: userId,
            }),
        });

        const data = await res.json();
        setBotMessage(data.response);
        setPhoto(data.photo || "画像なし");
        setQuery("");
    };

    return (
        <main className="min-h-screen p-6 max-w-xl mx-auto bg-gray-50">
            <h2 className="text-xl font-bold mb-4">故人とチャット</h2>

            <div className="flex gap-2 mb-6">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="メッセージを入力"
                    className="flex-1 border p-2 rounded"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-[#785d13] text-white px-4 py-2 rounded"
                >
                    発言
                </button>
            </div>

            {userMessage && (
                <div className="mb-4">
                    <p className="text-sm font-semibold text-right text-gray-600">あなたの発言</p>
                    <div className="bg-yellow-50 text-right p-3 rounded-xl max-w-[80%] ml-auto border-1 border-[#785d13]">
                        {userMessage}
                    </div>
                </div>
            )}

            {botMessage && (
                <div className="mb-4">
                    <p className="text-sm font-semibold text-left text-gray-600">故人からの言葉</p>
                    <div className="bg-yellow-50 text-left p-3 rounded-xl max-w-[80%] mr-auto border-1 border-[#785d13]">
                        {botMessage}
                    </div>
                    <div className="mt-2 text-left text-sm text-gray-600">
                        {typeof photo !== "string" || photo === "画像なし" ? (
                            <p>画像なし</p>
                        ) : (
                            <img src={photo} alt="写真なし" className="w-72 rounded-lg shadow" />
                            //<Image src={photo} alt="写真なし" width={300} height={300} />
                        )}
                    </div>
                </div>
            )}
        </main>
    )
}
