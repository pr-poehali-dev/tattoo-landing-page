import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-dark">
      <Hero />
      <About />
      <Gallery />
      <Services />
      <BookingForm />
      <Contacts />
    </div>
  );
};

export default Index;
