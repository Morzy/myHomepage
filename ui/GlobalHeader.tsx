import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react"

export function GlobalHeader() {

  return (
    <>
       <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            SamuelQZQ
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/favorites" className="text-gray-600 hover:text-gray-900">
              ★ Favorites
            </Link>
            <Link href="/influencer" className="text-gray-600 hover:text-gray-900">
              Influencer
            </Link>
            <Link href="/code" className="text-gray-600 hover:text-gray-900">
              Code
            </Link>
            <Link href="/game" className="text-gray-600 hover:text-gray-900">
              Game
            </Link>
            <Link href="/music" className="text-gray-600 hover:text-gray-900">
              Music
            </Link>
            <Link href="/books" className="text-gray-600 hover:text-gray-900">
              Books
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </header>

    </>
  );
}

