export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // aim page color
    <div className="bg-gray-100">
      {/* aim layout */}
      <div className="grid md:grid-cols-2 items-center justify-items-center gap-6 max-w-screen-2xl mx-auto min-h-dvh p-5">
        {/* login / register page */}
        {children}
      </div>
    </div>
  );
}
