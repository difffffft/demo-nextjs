import Link from "next/link";
import photos from "./data";


// 图片列表
// 更多的是抄袭https://dribbble.com/的设计，点击图片之后，路由变化，但是界面不会发生太大变化，只是会弹出模态弹窗而已
export default function Photo() {
  return (
    <ul>
      {photos.map((item) => {
        return (
          <li key={item.id}>
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
