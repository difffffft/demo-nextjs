
/**
 * 动态路由
 * @param param string
 * @returns 
 */
export default function BlogPost({ params }: { params: { blogId: string } }) {
  return (
    <div>
      <h1>Blog Post {params.blogId}</h1>
    </div>
  );
}
