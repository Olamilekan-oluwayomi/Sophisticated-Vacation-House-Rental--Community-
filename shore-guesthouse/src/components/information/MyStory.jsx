import familyImage from "../../assets/gallery/information/family.avif";

function MyStory() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Left */}
          <div>
            <h2 className="font-serif text-3xl text-stone-900 md:text-5xl">
              My Story
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="max-w-md font-serif text-base leading-8 text-stone-700 md:text-lg">
              Shore Guesthouse is a dream come true, a labor of love inspired by
              the childhood summers I spent here with my grandparents. Their
              stories of Oia, the warmth of the island life, and the magic of
              this place have always stayed with me.
              <br />
              <br />
              Restoring this home has been a way to honor their memory and share
              the spirit of Oia with others.
            </p>

            <img
              src={familyImage}
              alt="Family portrait"
              loading="lazy"
              className="mt-10 w-full max-w-sm object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-stone-300" />
      </div>
    </section>
  );
}

export default MyStory;