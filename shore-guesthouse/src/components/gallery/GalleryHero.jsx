import heroImage from "../../assets/gallery/hero.jpg";

function GalleryHero() {
  return (
    <section>
      {/* Page Title */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14 lg:px-20 lg:py-16">
        <h1 className="font-serif text-5xl text-stone-900 md:text-6xl lg:text-7xl">
          Gallery
        </h1>
      </div>

      {/* Hero Image */}
      <div className="relative h-[350px] overflow-hidden md:h-[500px] lg:h-[600px]">
        <img
          src={heroImage}
          alt="Entrance to Shore Guesthouse"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-xl text-center md:max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">
              Experience Shore Guesthouse.
              <br />
              Explore our gallery and start planning.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryHero;
