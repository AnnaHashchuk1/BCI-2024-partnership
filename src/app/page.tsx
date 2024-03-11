import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Test from "@/components/Test";
import { Why } from "@/components/Why/Why";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Hero />
      <Why />
      <Test />
      <Footer />
    </main>
  );
}
