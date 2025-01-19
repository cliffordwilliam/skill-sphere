import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <>
      {/* navbar color */}
      <header className="shadow-md">
        {/* layout */}
        <div className="container mx-auto flex p-4 items-center">
          {/* logo */}
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>
    </>
  );
}
