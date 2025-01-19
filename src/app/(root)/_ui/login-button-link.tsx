import Link from "next/link";

export default function LoginButtonLink() {
  return (
    <>
      {/* link */}
      <Link href="/login" className="btn-primary">
        <span>Login</span>
      </Link>
    </>
  );
}
