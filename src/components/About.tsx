const About = () => {
  return (
    <section className="py-20 px-4 bg-tattoo-gray">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                alt="Алексей Воронов - тату мастер"
                className="w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-fade-in">
            <h2 className="font-oswald text-4xl font-bold mb-6 text-tattoo-gold">
              О МАСТЕРЕ
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-oswald text-2xl font-semibold mb-2 text-tattoo-red">
                  АЛЕКСЕЙ ВОРОНОВ
                </h3>
                <p className="text-gray-300 text-lg">Стаж: 8 лет</p>
              </div>

              <div>
                <h4 className="font-oswald text-xl font-semibold mb-2 text-white">
                  СПЕЦИАЛИЗАЦИЯ
                </h4>
                <p className="text-gray-300">
                  Реализм, графика, черно-белые тату, портреты, биомеханика
                </p>
              </div>

              <div>
                <h4 className="font-oswald text-xl font-semibold mb-2 text-white">
                  ПОДХОД К РАБОТЕ
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Каждая татуировка — это уникальная история. Я работаю с
                  индивидуальными эскизами, уделяя внимание каждой детали.
                  Использую только профессиональное оборудование и качественные
                  пигменты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
