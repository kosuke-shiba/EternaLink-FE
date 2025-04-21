// src/pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { userId, password } = req.body;

    // サンプルのユーザー情報（本番環境ではデータベースや認証サービスを使用）
    const validUserId = "user"; // ここでは仮のID
    const validPassword = "password"; // ここでは仮のパスワード

    // ユーザー認証の簡易な例
    if (userId === validUserId && password === validPassword) {
      res.status(200).json({ message: "ログイン成功" });
    } else {
      res.status(401).json({ message: "無効なログイン情報" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
