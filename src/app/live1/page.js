// app/page.js
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Cricket Matches</h1>
      <div className="space-y-4">
        <Link href="/live-matches">
          <a className="block w-full text-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition">
            Live Matches
          </a>
        </Link>
        <Link href="/upcoming-matches">
          <a className="block w-full text-center bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
            Upcoming Matches
          </a>
        </Link>
      </div>
    </div>
  );
}
