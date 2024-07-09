"use client";

import { useRouter } from "next/navigation";
import data, { ImageInfo } from "@/app/photo/data";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <div
      className=" absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => router.back()}
    >
      {data.find((item:ImageInfo) => String(item.id) == params.id) && (
        <img src={data.find((item:ImageInfo) => String(item.id) == params.id)?.url} alt="" />
      )}
    </div>
  );
}
