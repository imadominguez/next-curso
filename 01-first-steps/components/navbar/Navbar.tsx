import Link from "next/link";

import { HomeIcon } from "@primer/octicons-react";

import ActiveLink from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

function Navbar() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon />
        <span>Hola</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
}

export default Navbar;
