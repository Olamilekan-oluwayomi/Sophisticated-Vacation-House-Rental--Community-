import GallerySlider from "../homepage/GallerySlider";
import neighborhood from "../../data/neighborhood";

function Neighborhood() {
  return (
    <section className="py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 font-serif text-sm text-stone-500">
          The Neighborhood
        </p>

        <h2 className="font-serif text-3xl md:text-5xl">
          Explore Santorini and
          <br />
          its surroundings.
        </h2>
      </div>

      <GallerySlider
        images={neighborhood}
        showCaptions={false}
      />
    </section>
  );
}

export default Neighborhood;