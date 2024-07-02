import DashboardNav from "./components/Nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-full">
        <DashboardNav /> {/* <Navbar /> */}
        <div>{children}</div>
      </div>
    </>
  );
}
