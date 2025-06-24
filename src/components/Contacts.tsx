import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section className="py-20 px-4 bg-tattoo-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-oswald text-4xl font-bold text-center mb-12 text-tattoo-gold animate-fade-in">
          КОНТАКТЫ
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-oswald text-2xl font-bold mb-6 text-tattoo-red">
                СВЯЗАТЬСЯ СО МНОЙ
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-tattoo-gold mr-4"
                    size={24}
                  />
                  <div>
                    <p className="text-white font-semibold">Адрес студии:</p>
                    <p className="text-gray-300">ул. Арбат, 15, Москва</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-tattoo-gold mr-4"
                    size={24}
                  />
                  <div>
                    <p className="text-white font-semibold">Телефон:</p>
                    <a
                      href="tel:+79161234567"
                      className="text-gray-300 hover:text-tattoo-red transition-colors"
                    >
                      +7 (916) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    className="text-tattoo-gold mr-4"
                    size={24}
                  />
                  <div>
                    <p className="text-white font-semibold">Режим работы:</p>
                    <p className="text-gray-300">Пн-Сб: 12:00 - 21:00</p>
                    <p className="text-gray-300">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-oswald text-xl font-bold mb-4 text-white">
                СОЦИАЛЬНЫЕ СЕТИ
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-tattoo-dark p-3 rounded-full hover:bg-tattoo-red transition-colors duration-300"
                >
                  <Icon name="Instagram" className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-tattoo-dark p-3 rounded-full hover:bg-tattoo-red transition-colors duration-300"
                >
                  <Icon name="Send" className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-tattoo-dark p-3 rounded-full hover:bg-tattoo-red transition-colors duration-300"
                >
                  <Icon name="MessageCircle" className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <div className="bg-tattoo-dark rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4!2d37.609218!3d55.750426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2cd%3A0x4c2ca101e2c8c617!2z0YPQuy4g0JDRgNCx0LDRgiwgMTUsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMTkwMTk!5e0!3m2!1sru!2s!4v1234567890123!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
