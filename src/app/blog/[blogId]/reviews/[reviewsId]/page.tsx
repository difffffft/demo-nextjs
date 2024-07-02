/**
 * 动态路由
 * @param param string
 * @returns
 */
export default function BlogReivews({
  params,
}: {
  params: { blogId: string; reviewsId: string };
}) {
  return (
    <div>
      <h1>
        Blog Post {params.blogId}
        <br />
        Review In Blog Post {params.reviewsId}
      </h1>
    </div>
  );
}
