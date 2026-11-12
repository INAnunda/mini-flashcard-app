import Flashcard from "@/components/Flashcard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header section */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">My Study Deck</h1>
            <p className="text-slate-500 mt-1">20 Cards to review today</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            + Add New Card
          </button>
        </header>

        {/* Grid แสดงการ์ด (จำลองการแสดงผล 3 ใบ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Flashcard />
          <Flashcard />
          <Flashcard />
        </div>
      </div>
    </main>
  );
}