import heroImage from "../../assets/gallery/booking/hero.jpg";

function BookingHero() {
  return (
    <section>
      {/* Page Title */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <h1 className="font-serif text-5xl text-stone-900 md:text-6xl lg:text-7xl">
          Book Your Stay
        </h1>
      </div>

      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden md:h-[520px] lg:h-[600px]">
        <img
          src={heroImage}
          alt="Luxury bedroom at Shore Guesthouse"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
              Escape to Santorini.
              <br />
              Reserve your unforgettable stay today.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingHero;