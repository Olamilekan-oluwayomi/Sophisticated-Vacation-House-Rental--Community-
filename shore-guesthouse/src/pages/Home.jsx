import GallerySlider from "../components/GallerySlider";
import HomepageHero from "../components/HomepageHero";
import HomepageIntro from "../components/HomepageIntro";
import HomepageAbout from "../components/HomepageAbout";

const Home = () => {
  return (
    <>
      <HomepageHero />
      <HomepageIntro />
      <GallerySlider />
      <HomepageAbout />
      {/* 
      
      <About />
      <CTA />
      */}
    </>
  );
};

export default Home;
