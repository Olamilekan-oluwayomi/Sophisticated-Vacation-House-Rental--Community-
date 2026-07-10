import heroImage from "../../assets/gallery/information/hero.jpg";

function InformationHero() {
  return (
    <section>
      {/* Page Title */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <h1 className="font-serif text-5xl text-stone-900 md:text-6xl lg:text-7xl">
          Information
        </h1>
      </div>

      {/* Hero Image */}
      <div className="relative h-[420px] overflow-hidden md:h-[520px] lg:h-[600px]">
        <img
          src={heroImage}
          alt="Street view of Oia village"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
            This house, and this village,
            <br className="hidden md:block" />
            have been a part of our lives
            <br className="hidden md:block" />
            for generations.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default InformationHero;