"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  // 激活导航
  const pathName = usePathname();
  const isActive = (link: any) => pathName === link;

  return (
    <header className="padding-y-4 p-4 bg-gray-100">
      <nav>
        <ul className="flex space-x-4">
          <Link
            href={"/"}
            className={
              "hover:text-blue-500 " + (isActive("/") ? "text-blue-500" : "")
            }
          >
            <li>Home</li>
          </Link>
          <Link
            href={"/about"}
            className={
              "hover:text-blue-500 " +
              (isActive("/about") ? "text-blue-500" : "")
            }
          >
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
