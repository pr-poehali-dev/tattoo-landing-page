import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", comment: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-20 px-4 bg-tattoo-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-oswald text-4xl font-bold text-center mb-12 text-tattoo-gold animate-fade-in">
          ЗАПИСАТЬСЯ НА СЕАНС
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-oswald text-lg mb-2"
                >
                  ИМЯ *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-tattoo-gray border-tattoo-gray-light text-white focus:border-tattoo-red"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-oswald text-lg mb-2"
                >
                  ТЕЛЕФОН *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-tattoo-gray border-tattoo-gray-light text-white focus:border-tattoo-red"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-white font-oswald text-lg mb-2"
                >
                  ОПИСАНИЕ ЖЕЛАЕМОГО ТАТУ
                </label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="bg-tattoo-gray border-tattoo-gray-light text-white focus:border-tattoo-red min-h-32"
                  placeholder="Опишите вашу идею, размер, место расположения..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-red hover:bg-tattoo-red-dark text-white font-oswald text-lg py-6 rounded-none transform transition-all duration-300 hover:scale-105"
              >
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h3 className="font-oswald text-2xl font-bold mb-4 text-tattoo-red">
                КАК ПРОХОДИТ ЗАПИСЬ
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-tattoo-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    1
                  </span>
                  <p>Заполните форму с описанием вашей идеи</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-tattoo-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    2
                  </span>
                  <p>Мы свяжемся с вами для уточнения деталей</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-tattoo-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    3
                  </span>
                  <p>Создаем индивидуальный эскиз</p>
                </div>
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-tattoo-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    4
                  </span>
                  <p>Назначаем удобное время для сеанса</p>
                </div>
              </div>
            </div>

            <div className="bg-tattoo-gray p-6 rounded-lg">
              <h4 className="font-oswald text-xl font-bold mb-3 text-tattoo-gold">
                ВАЖНАЯ ИНФОРМАЦИЯ
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Консультация и эскиз оплачиваются отдельно</li>
                <li>• Минимальная стоимость работы — 5,000 ₽</li>
                <li>• Предоплата 50% при записи</li>
                <li>• Возможна рассрочка для крупных работ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
