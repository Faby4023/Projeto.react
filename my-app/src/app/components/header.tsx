import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-black py-5 flex justify-end">
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/">Página Home</Link>
          </li>
          <li>
            <Link href="/register">Página Resgister</Link>
          </li>
          <li>
            <Link href="/sign-in">Página SignIn</Link>
          </li>
        </ul>
      </nav>
      <span className="bg-red-400 md:hidden">Menu</span>
    </header>
  );
}
