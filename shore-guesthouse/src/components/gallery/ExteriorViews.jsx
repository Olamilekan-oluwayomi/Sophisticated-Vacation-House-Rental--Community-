import exteriorViews from "../../data/exterior";

function ExteriorViews() {
  const featured = exteriorViews.find((item) => item.featured);
  const cards = exteriorViews.filter((item) => !item.featured);

  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-serif text-sm text-stone-500">
            Exterior Views
          </p>

          <h2 className="font-serif text-3xl leading-tight text-stone-900 md:text-5xl">
            Welcome to Shore Guesthouse.
          </h2>
        </div>

        {/* Top Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((item) => (
            <article key={item.id}>
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[340px]"
                />
              </div>

              <p className="mt-4 font-serif text-sm text-stone-700">
                {item.title}
              </p>
            </article>
          ))}
        </div>

        {/* Featured Image */}
        <article className="mt-12">
          <div className="overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[520px]"
            />
          </div>

          <p className="mt-4 font-serif text-sm text-stone-700">
            {featured.title}
          </p>
        </article>
      </div>
    </section>
  );
}

export default ExteriorViews;