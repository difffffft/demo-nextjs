
/**
 * 试着访问 
 * http://localhost:3000/docs/1
 * http://localhost:3000/docs/1/2
 * http://localhost:3000/docs/1/2/3
 * @param param0 
 * @returns 
 */

export default function DocsPage({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  return (
    <>
      <h1>Docs</h1>
      <br />
      {params.slug.map((slug, index) => {
        return <h1 key={slug}>{slug}</h1>;
      })}
    </>
  );
}
