"use client";

import { usePathname } from "next/navigation";
import classes from './navlink.module.css'

export default function Navlink({ href, children }) {
  const path = usePathname();
  return (
    <div
      className={
        path.startsWith(href)
          ? `${classes.active} heading-6 paragraph-font`
          : "heading-6 paragraph-font"
      }
    >
      {children}
    </div>
  );
}
