import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { Team } from "@/components/ui/team";
import { Testimonials } from "@/components/ui/testimonials";
import { Contact } from "@/components/ui/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}
