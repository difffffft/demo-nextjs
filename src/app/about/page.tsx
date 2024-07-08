export default async function AboutPage() {

  // 用于触发loading使用的
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 1000);
  })

  return (
    <>
      <h1>About</h1>
    </>
  );
}
