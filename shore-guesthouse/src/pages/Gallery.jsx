import Header from "../components/Header";
import Footer from "../components/Footer";

import GalleryHero from "../components/gallery/GalleryHero";
import ExteriorViews from "../components/gallery/ExteriorViews";
import InteriorViews from "../components/gallery/InteriorViews";
import Neighborhood from "../components/gallery/Neighborhood";
import GalleryCTA from "../components/gallery/GalleryCTA";

function Gallery() {
  return (
    <>
      <Header />

      <main>
        <GalleryHero />
        <ExteriorViews />
        <InteriorViews />
        <Neighborhood />
        <GalleryCTA />
      </main>

      <Footer />
    </>
  );
}

export default Gallery;
