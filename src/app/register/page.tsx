"use client";
import { useState } from "react";

export default function RegisterPage() {
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [loadingVector, setLoadingVector] = useState(false);

    const handleUpdateLocation = async () => {
        setLoadingLocation(true);
        try {
            const res = await fetch("http://localhost:8000/update-location", {
                method: "POST",
            });
            const data = await res.json();
            alert(data.message);
        } catch (err) {
            alert("位置データの更新に失敗しました");
        }
        setLoadingLocation(false);
    };

    const handleUpdateVector = async () => {
        setLoadingVector(true);
        try {
            const res = await fetch("http://localhost:8000/update-vector", {
                method: "POST",
            });
            const data = await res.json();
            alert(data.message);
        } catch (err) {
            alert("日記vectorの更新に失敗しました");
        }
        setLoadingVector(false);
    };

    return (
        <main className="p-6 bg-gray-50 max-w-xl mx-auto min-h-screen">
            <h2 className="text-xl font-bold mb-4">データ登録</h2>

            <div className="flex flex-col space-y-2">
                <button
                    onClick={handleUpdateLocation}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={loadingLocation}
                >
                    {loadingLocation ? "更新中..." : "位置データ更新"}
                </button>

                <button
                    onClick={handleUpdateVector}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={loadingVector}
                >
                    {loadingVector ? "更新中..." : "日記vector更新"}
                </button>
            </div>
        </main>
    );
}

