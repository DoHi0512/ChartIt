import { Header } from "./components/common/header";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
