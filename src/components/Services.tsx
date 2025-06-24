import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "ТАТУИРОВКА",
      description: "Индивидуальные эскизы, любая сложность",
      price: "от 5,000 ₽",
      features: ["Консультация", "Эскиз", "Работа", "Уход"],
    },
    {
      title: "КОРРЕКЦИЯ",
      description: "Исправление и доработка старых тату",
      price: "от 3,000 ₽",
      features: ["Оценка работы", "План коррекции", "Исполнение"],
    },
    {
      title: "КОНСУЛЬТАЦИЯ",
      description: "Обсуждение идеи и создание эскиза",
      price: "1,500 ₽",
      features: ["60 минут", "Эскиз", "Рекомендации"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-tattoo-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-oswald text-4xl font-bold text-center mb-12 text-tattoo-gold animate-fade-in">
          УСЛУГИ
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-tattoo-dark p-8 rounded-lg border border-tattoo-gray-light hover:border-tattoo-red transition-all duration-300 animate-fade-in transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="font-oswald text-2xl font-bold mb-4 text-tattoo-red">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6">{service.description}</p>

              <div className="mb-6">
                <p className="font-oswald text-3xl font-bold text-tattoo-gold mb-4">
                  {service.price}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-2 h-2 bg-tattoo-red rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full bg-transparent border-2 border-tattoo-red text-tattoo-red hover:bg-tattoo-red hover:text-white font-oswald transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                УЗНАТЬ ПОДРОБНЕЕ
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
