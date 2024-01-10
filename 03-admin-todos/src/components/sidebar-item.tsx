"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  icon: JSX.Element;
  href: string;
}

export const SidebarItem = ({ href, icon, title }: Props) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`${
          pathname === href ? " text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
        }  transition-all relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white `}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};
