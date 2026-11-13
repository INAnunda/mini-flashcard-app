"use client";
import { useState, useEffect } from "react";
import Flashcard from "@/components/Flashcard";

export default function Home() {
  // useState เก็บสถานะคะแนน
  const [score, setScore] = useState({ known: 0, unknown: 0 });

  // useEffect (1): ดึงคะแนนเดิมจากเครื่องผู้ใช้ตอนโหลดหน้าเว็บครั้งแรก
  useEffect(() => {
    const savedScore = localStorage.getItem("flashcard_score");
    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }
  }, []); // Array ว่าง หมายถึงให้ทำแค่ครั้งเดียวตอนโหลดหน้า

  // useEffect (2): บันทึกคะแนนลงเครื่องทุกครั้งที่ State score มีการเปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem("flashcard_score", JSON.stringify(score));
  }, [score]);

  // ฟังก์ชันอัปเดตคะแนน
  const handleScoreUpdate = (result: 'remember' | 'forget') => {
    if (result === 'remember') {
      setScore(prev => ({ ...prev, known: prev.known + 1 }));
    } else {
      setScore(prev => ({ ...prev, unknown: prev.unknown + 1 }));
    }
  };

  // ข้อมูลจำลองสำหรับทดสอบ (Mock Data)
  const deck = [
    { kanji: "食べる", reading: "たべる", meaning: "กิน" },
    { kanji: "日", reading: "ひ / にち", meaning: "พระอาทิตย์ / วัน" },
    { kanji: "曜", reading: "よう", meaning: "วันในสัปดาห์" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">My Study Deck</h1>
            <p className="text-slate-500 mt-1">N5 Vocabulary Revision</p>
          </div>
          
          {/* แสดงคะแนนที่ผูกกับ State */}
          <div className="flex gap-4 text-center">
            <div className="bg-green-50 px-4 py-2 rounded-lg">
              <p className="text-xs text-green-600 font-bold uppercase">จำได้</p>
              <p className="text-2xl font-bold text-green-700">{score.known}</p>
            </div>
            <div className="bg-red-50 px-4 py-2 rounded-lg">
              <p className="text-xs text-red-600 font-bold uppercase">จำไม่ได้</p>
              <p className="text-2xl font-bold text-red-700">{score.unknown}</p>
            </div>
          </div>
        </header>

        {/* นำ Mock Data มา Loop สร้างการ์ด */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deck.map((word, index) => (
            <Flashcard 
              key={index}
              kanji={word.kanji}
              reading={word.reading}
              meaning={word.meaning}
              onResult={handleScoreUpdate}
            />
          ))}
        </div>
      </div>
    </main>
  );
}