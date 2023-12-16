"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import styles from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

function ActieLink({ path, text }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${styles.link} ${pathname === path && styles["active-link"]}`}
    >
      {text}
    </Link>
  );
}

export default ActieLink;
