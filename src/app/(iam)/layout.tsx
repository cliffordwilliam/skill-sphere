export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // aim page bg color - darker
    <div className="h-dvh bg-gray-100">
      {/* aim layout - 2 col */}
      <div className="h-full grid md:grid-cols-2 items-center justify-items-center gap-6 container mx-auto p-5">
        {/* login / register page */}
        {children}
      </div>
    </div>
  );
}
