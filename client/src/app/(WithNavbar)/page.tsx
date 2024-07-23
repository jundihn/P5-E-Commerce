import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      <Banner />
      <Footer />
    </main>
  );
}
