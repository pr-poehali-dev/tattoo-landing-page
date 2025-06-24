import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=1000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl animate-fade-in">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold mb-6 text-shadow">
            АЛЕКСЕЙ ВОРОНОВ
          </h1>
          <p className="font-oswald text-xl md:text-2xl mb-4 text-tattoo-gold">
            ПРОФЕССИОНАЛЬНОЕ ТАТУ В МОСКВЕ
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Реализм • Графика • Черно-белые работы
          </p>
          <Button
            onClick={scrollToBooking}
            className="bg-gradient-red hover:bg-tattoo-red-dark text-white font-oswald text-lg px-8 py-6 rounded-none transform transition-all duration-300 hover:scale-105"
          >
            ЗАПИСАТЬСЯ НА СЕАНС
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
