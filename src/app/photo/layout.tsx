export default function PhotoLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}
