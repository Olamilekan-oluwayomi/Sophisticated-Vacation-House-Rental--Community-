
import GalleryHero from "../components/gallery/GalleryHero";
import ExteriorViews from "../components/gallery/ExteriorViews";
import InteriorViews from "../components/gallery/InteriorViews";
import Neighborhood from "../components/gallery/Neighborhood";
import FeaturedNeighborhood from "../components/gallery/StandAloneFeatured";


function Gallery() {
  return (
    <>
      <GalleryHero />
      <ExteriorViews />
      <InteriorViews />
      <Neighborhood />
      <FeaturedNeighborhood />
    </>
  );
}

export default Gallery;
