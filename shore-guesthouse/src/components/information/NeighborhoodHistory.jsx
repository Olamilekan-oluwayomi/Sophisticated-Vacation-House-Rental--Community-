import historyImage from "../../assets/gallery/information/image-block.avif";
import streetImage from "../../assets/gallery/information/street.avif";

function NeighborhoodHistory() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left */}
          <div>
            <h2 className="max-w-xs font-serif text-3xl leading-tight text-stone-900 md:text-5xl">
              History of the Neighbourhood
            </h2>
          </div>

          {/* Right */}
          <div>
            {/* Beige Card */}
            <div className="inline-block ">
              <img
                src={historyImage}
                alt="Historic street in Oia"
                className="h-48 w-48 object-cover md:h-80 md:w-80"
              />
            </div>

            <p className="mt-3 font-serif text-xs text-stone-500">
              Original neighbourhood
            </p>

            <p className="mt-8 max-w-md font-serif text-base leading-8 text-stone-700 md:text-lg">
              Oia is a living, breathing village. Wander the streets and you'll
              find hidden courtyards and locals chatting over coffee. Skip the
              fancy restaurants and enjoy today's catch at a family-run taverna.
              Catch the sunset for a moment of peace. And, if you can, strike up
              a conversation with a local—they'll tell you stories of Oia that
              no guidebook can.
            </p>
          </div>
        </div>

        {/* Large Image */}
        <div className="mt-20">
          <img
            src={streetImage}
            alt="Colorful street in Oia"
            loading="lazy"
            className="h-[300px] w-full object-cover md:h-[450px] lg:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default NeighborhoodHistory;