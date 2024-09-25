import SideBar from "@/components/draw/sidebar";
export default function DrawLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <SideBar />
      {children}
    </div>
  );
}
