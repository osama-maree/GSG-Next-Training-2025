import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Sorry, we couldn’t find this page.</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go Home
      </Link>
    </div>
  );
}
