
import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        {children}
      </div>
    </>
  );
}
