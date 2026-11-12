export default function Flashcard() {
  return (
    <div className="w-80 h-96 mx-auto perspective-1000 group cursor-pointer">
      {/* กรอบหลักของการ์ด */}
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180 bg-white rounded-xl shadow-lg border-2 border-slate-100 flex flex-col justify-center items-center p-6 text-center">
        
        {/* ด้านหน้าของการ์ด (จำลองเป็นคำศัพท์) */}
        <div className="absolute inset-0 backface-hidden flex flex-col justify-center items-center">
          <p className="text-gray-400 text-sm font-medium mb-4">Japanese N5</p>
          <h2 className="text-5xl font-bold text-slate-800 mb-2">食べる</h2>
          <p className="text-xl text-slate-500">たべる</p>
        </div>
        
        {/* 
          (เตรียมไว้สำหรับ Day 3)
          ด้านหลังของการ์ดจะซ่อนไว้ก่อน และจะแสดงเมื่อเราใส่ State สำหรับการคลิกพลิกการ์ด 
        */}
      </div>
    </div>
  );
}