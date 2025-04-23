"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DashboardPage: React.FC = () => {
  const router = useRouter();

  // handleChartSearchの処理（引数としてuserIdとfamilyIdを受け取る）
  const handleChartSearch = (userId: string, familyId: string) => {
    if (familyId === "1") {
      // familyIdが1の場合の挙動
      //alert(`磯野波平さんのエコーとチャットを開始します。User ID: ${userId}, Family ID: ${familyId}`);
      router.push(`/chatsearch?user_id=${userId}&family_id=${familyId}`);
    } else if (familyId === "2") {
      // familyIdが2の場合の挙動
      //alert(`フグ田マスオさんのエコーとチャットを開始します。User ID: ${userId}, Family ID: ${familyId}`);
      router.push(`/chatsearch?user_id=${userId}&family_id=${familyId}`);
    }
  };

  return (
    <main className="p-6 bg-gray-50 max-w-xl mx-auto min-h-screen space-y-6">
      <h1 className="text-xl font-bold text-black">ダッシュボード</h1>
      <p>天国のご家族とチャットができます。</p>

      {/* ボタン1 - 磯野波平 */}
      <button
        onClick={() => handleChartSearch("6", "1")}
        className="flex items-center p-3 bg-[#785d13] text-white rounded w-full gap-4"
      >
        <img src="/namihei.png" alt="磯野波平" className="w-12 h-12 object-contain" />
        <span>磯野波平（エコー）</span>
      </button>

      {/* ボタン2 - フグ田マスオ */}
      <button
        onClick={() => handleChartSearch("6", "2")}
        className="flex items-center p-3 bg-[#785d13] text-white rounded w-full gap-4"
      >
        <img src="/masuo.png" alt="フグ田マスオ" className="w-12 h-12 object-contain" />
        <span>フグ田マスオ（エコー）</span>
      </button>
    </main>
  );
};

export default DashboardPage;
/*
// src/app/dashboard/page.tsx
const DashboardPage: React.FC = () => {
    return (
      <main className="p-6 bg-gray-50 max-w-xl mx-auto min-h-screen space-y-6">
        <h1 className="text-xl font-bold text-black">ダッシュボード</h1>
        <p>ようこそ、ダッシュボードへ！</p>
      </main>
    );
  };
  
  export default DashboardPage;
  */