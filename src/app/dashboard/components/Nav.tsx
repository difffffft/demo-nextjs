"use client";

import { useRouter } from "next/navigation";

const routerList = [
  {
    name: "Home",
    path: "/dashboard/home",
  },
  {
    name: "About",
    path: "/dashboard/about",
  },
];

export default function DashboardNav() {
  const router = useRouter();

  return (
    <>
      <nav className="w-80 h-full bg-black text-white">
        <ul>
          {routerList.map((item, index) => {
            return (
              <li key={index} onClick={() => router.push(item.path)}>
                <button className="w-full border-black border-2 p-2 hover:bg-white hover:text-black">
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
