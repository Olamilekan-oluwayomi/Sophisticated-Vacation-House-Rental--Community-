import { useState } from "react";
import interiorViews from "../../data/interior";

function InteriorViews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = interiorViews[activeIndex];

  function previousImage() {
    setActiveIndex((prev) =>
      prev === 0 ? interiorViews.length - 1 : prev - 1
    );
  }

  function nextImage() {
    setActiveIndex((prev) =>
      prev === interiorViews.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <section className="bg-[#2E3043] px-6 py-20 text-white md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-serif text-sm text-stone-300">
            Interior Views
          </p>

          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            Uncover the guesthouse's charm
            <br />
            and character.
          </h2>
        </div>

        {/* Thumbnails */}
        <div className="mb-10 flex justify-center gap-4">
          {interiorViews.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden border transition ${
                activeIndex === index
                  ? "border-white"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="h-14 w-14 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Gallery */}
        <div className="flex items-center justify-between gap-6">
          {/* Previous */}
          <button
            onClick={previousImage}
            className="hidden rounded-full border border-white/40 px-6 py-3 text-sm transition hover:border-white hover:bg-white hover:text-stone-900 md:block"
          >
            Previous
          </button>

          {/* Active Image */}
          <div className="flex-1">
            <img
              src={activeImage.image}
              alt={activeImage.caption}
              className="mx-auto w-full max-w-3xl object-cover"
            />

            <p className="mt-4 text-center font-serif text-sm text-stone-300">
              {activeImage.caption}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="hidden rounded-full border border-white/40 px-6 py-3 text-sm transition hover:border-white hover:bg-white hover:text-stone-900 md:block"
          >
            Next
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="mt-8 flex justify-center gap-4 md:hidden">
          <button
            onClick={previousImage}
            className="rounded-full border border-white/40 px-5 py-2 text-sm"
          >
            Previous
          </button>

          <button
            onClick={nextImage}
            className="rounded-full border border-white/40 px-5 py-2 text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default InteriorViews;