"use client";

import { useRouter } from "next/navigation";
import data, { ImageInfo } from "@/app/photo/data";

export default function Page({ params }: { params: { id: string } }) {
  const photo = data.find((item:ImageInfo) => String(item.id) == params.id);
  return (
    <div>
      <img src={photo?.url} alt="" />
      {photo?.title}
    </div>
  );
}
