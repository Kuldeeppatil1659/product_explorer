import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          StoreApp
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/favorites" className="hover:text-blue-600 transition">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
