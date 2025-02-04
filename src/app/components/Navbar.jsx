import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <ul className="flex justify-between w-1/2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}