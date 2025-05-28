import React, { useEffect, useState } from "react";

// 有効期限（expiry date）
const 有効期限 = new Date("2025-06-15T00:00:00Z");

export default function キャッシュ({ children }) {
  const [ロック中, ロック設定] = useState(false);

  useEffect(() => {
    const 現在 = new Date();
    if (現在 >= 有効期限) {
      ロック設定(true);
    }
  }, []);

  if (ロック中) {
    return (
      <div className="fixed inset-0 z-50 bg-black text-red-600 flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold">⏳ プレビュー期間が終了しました</h1>
          <p className="text-2xl font-semibold">アクセスを再有効化するには開発者に連絡してください。Ken Ryan Calvez</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
