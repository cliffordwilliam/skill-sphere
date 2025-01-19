import "@/styles/global.css";
import { Geist } from "next/font/google";
import { ToastProvider } from "./_features/common/toasts/providers/toast-provider";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
