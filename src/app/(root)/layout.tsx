import Header from "./ui/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh flex flex-col">
      {/* root header */}
      <Header />
      {/* root page */}
      {children}
    </div>
  );
}
