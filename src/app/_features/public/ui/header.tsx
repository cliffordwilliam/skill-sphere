import Link from "next/link";
import LoginButtonLink from "./login-button-link";
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
          {/* button */}
          <span className="ml-auto">
            <LoginButtonLink />
          </span>
        </div>
      </header>
    </>
  );
}
