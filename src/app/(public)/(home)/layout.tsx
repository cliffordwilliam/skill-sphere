import Header from "@/app/_features/public/ui/header";
import "@/styles/global.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // root layout - flex col
    <div className="h-dvh flex flex-col">
      {/* root header */}
      <Header />
      {/* root page - flex grow */}
      {children}
    </div>
  );
}
