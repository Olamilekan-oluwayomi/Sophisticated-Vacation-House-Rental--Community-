import featuredImage from "../../assets/gallery/neigborhood-07.avif";

function FeaturedNeighborhood() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <img
          src={featuredImage}
          alt="Scenic view overlooking Santorini"
          loading="lazy"
          className="h-[300px] w-full object-cover md:h-[500px] lg:h-[650px]"
        />
      </div>
    </section>
  );
}

export default FeaturedNeighborhood;