import { Metadata } from "next";
import { notFound } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Blog",
//   description: "Blog by 1",
// };

/**
 * 动态修改页面元数据，有助于SEO优化
 * @returns
 */
export const generateMetadata = async ({
  params,
}: {
  params: { blogId: string };
}) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Blog by ${params.blogId}`);
    }, 1000);
  });
  return {
    title,
    description: "Blog by 1",
  };
};

/**
 * 动态路由
 * @param param string
 * @returns
 */
export default function BlogPost({ params }: { params: { blogId: string } }) {
  /**
   * 试着访问blog/11
   * 就会触发当前目录下的not-found.tsx
   */
  if (parseInt(params.blogId) > 10) {
    notFound();
  }

  return (
    <div>
      <h1>Blog Post {params.blogId}</h1>
    </div>
  );
}
