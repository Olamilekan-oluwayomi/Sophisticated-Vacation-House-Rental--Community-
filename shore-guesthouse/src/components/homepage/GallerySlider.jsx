import "./gallery-slider.css";

function GallerySlider({ images,
  showCaptions = true }) {
  const gallery = [...images, ...images];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-linear-to-r from-white to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 bg-linear-to-l from-white to-transparent" />

      <div className="marquee">
        <div className="marquee__track">
          {gallery.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className={`shrink-0 ${
                item.size === "large"
                  ? "w-[220px] md:w-[300px]"
                  : "w-[150px] md:w-[180px]"
              }`}
            >
              <div
                className={
                  item.size === "large"
                    ? "overflow-hidden bg-[#5A4135] p-8"
                    : "overflow-hidden"
                }
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${
                    item.size === "large"
                      ? "h-[250px] md:h-[340px]"
                      : "h-[180px] md:h-[240px]"
                  }`}
                />
              </div>

              {showCaptions && (
                  <p className="mt-4 font-serif text-sm text-stone-900">
                     {item.caption}
                  </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySlider;
