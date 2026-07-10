import heroImage from "../../assets/Homepage-hero.jpg";

function HomepageHero() {
  return (
    <section className="relative h-[70vh] min-h-137.5 overflow-hidden md:h-[85vh]">
      <img
        src={heroImage}
        alt="Shore Guesthouse overlooking the Aegean Sea"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Text */}
      <div className="relative flex h-full items-center justify-center px-6">
        <h1 className="max-w-5xl text-center font-serif text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
          Where Comfort and Charm Meet the Aegean
        </h1>
      </div>
    </section>
  );
}

export default HomepageHero;
