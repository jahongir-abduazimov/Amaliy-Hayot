import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="bg-white rounded-xl shadow-sm border border-border p-12">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sahifa topilmadi
        </h2>
        <p className="text-gray-600 mb-8">
          Kechirasiz, qidirayotgan sahifangiz topilmadi. U o‘chirilgan yoki
          mavjud emas.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
