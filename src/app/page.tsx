import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Test from "@/components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
    <Header/>
    <Hero />
    <Test />
    <Footer />
    </main>
  );
}
