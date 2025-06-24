const Gallery = () => {
  const tattooImages = [
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611195974226-ef16628cd2d6?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-20 px-4 bg-tattoo-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-oswald text-4xl font-bold text-center mb-12 text-tattoo-gold animate-fade-in">
          ГАЛЕРЕЯ РАБОТ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tattooImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-tattoo-gray animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Работа тату мастера ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-oswald text-white text-lg font-semibold">
                    УВЕЛИЧИТЬ
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 font-roboto">
            Больше работ в Instagram:
            <a
              href="#"
              className="text-tattoo-red hover:text-tattoo-gold transition-colors ml-2"
            >
              @alexey_tattoo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
