"use client";
import { useState } from "react";

// กำหนดประเภทของข้อมูลที่หน้า Dashboard จะส่งมาให้การ์ดแต่ละใบ
interface FlashcardProps {
  kanji: string;
  reading: string;
  meaning: string;
  onResult: (result: 'remember' | 'forget') => void;
}

export default function Flashcard({ kanji, reading, meaning, onResult }: FlashcardProps) {
  // useState เก็บสถานะการพลิกการ์ด (ค่าเริ่มต้นคือ false = ไม่พลิก)
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-80 h-96 mx-auto cursor-pointer" 
      style={{ perspective: "1000px" }} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 rounded-xl shadow-lg border-2 border-slate-100 flex flex-col justify-center items-center p-6 text-center bg-white ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ด้านหน้า: คำศัพท์ */}
        <div className="absolute inset-0 flex flex-col justify-center items-center" style={{ backfaceVisibility: "hidden" }}>
          <p className="text-gray-400 text-sm font-medium mb-4">Japanese N5</p>
          <h2 className="text-5xl font-bold text-slate-800 mb-2">{kanji}</h2>
          <p className="text-xl text-slate-500">{reading}</p>
        </div>

        {/* ด้านหลัง: คำแปลและปุ่มให้คะแนน */}
        <div 
          className="absolute inset-0 flex flex-col justify-center items-center" 
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8">{meaning}</h2>
          
          {/* ใช้ e.stopPropagation() เพื่อไม่ให้การกดปุ่มไปทริกเกอร์การพลิกการ์ดซ้ำ */}
          <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => { onResult('forget'); setIsFlipped(false); }} 
              className="bg-red-50 hover:bg-red-100 text-red-600 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              จำไม่ได้
            </button>
            <button 
              onClick={() => { onResult('remember'); setIsFlipped(false); }} 
              className="bg-green-50 hover:bg-green-100 text-green-600 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              จำได้
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

