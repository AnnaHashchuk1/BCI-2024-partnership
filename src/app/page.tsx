import About from "@/components/About/About";
import Collaboration from "@/components/Collaboration";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Why from "@/components/Why/Why";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Why />
      <Statistics />
      <Collaboration />
      <Contacts />
      <Footer />
    </main>
  );
}
