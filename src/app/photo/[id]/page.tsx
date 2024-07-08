export default function PhotoPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1>Photo Page: {id}</h1>
    </div>
  );
}
