import Link from "next/link";
import photos from "./data";


// 图片列表
export default function Photo() {
  return (
    <ul>
      {photos.map((item) => {
        return (
          <li>
            <Link href={"/photo/" + item.id}>
              <img
                src={item.url}
                className="w-80 aspect-video object-cover cursor-pointer"
                alt=""
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
