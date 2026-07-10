import GallerySlider from "../components/GallerySlider";
import HomepageHero from "../components/HomepageHero";
import HomepageIntro from "../components/HomepageIntro";

const Home = () => {
  return (
    <>
      <HomepageHero />
      <HomepageIntro />
      <GallerySlider />
      {/* 
      <GallerySlider />
      <About />
      <CTA />
      */}
    </>
  );
};

export default Home;
