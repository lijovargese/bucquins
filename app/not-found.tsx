
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl md:text-9xl font-bold text-gray-100 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
