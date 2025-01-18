import Link from "next/link";

export default function LoginLink() {
  return (
    <>
      {/* link */}
      <Link
        href="/login"
        className="inline-block px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        <span>Login</span>
      </Link>
    </>
  );
}
