import GallerySlider from "../components/GallerySlider";
import HomepageHero from "../components/HomepageHero";
import HomepageIntro from "../components/HomepageIntro";
import HomepageAbout from "../components/HomepageAbout";
import HomepageCTA from "../components/HomepageCTA";

const Home = () => {
  return (
    <>
      <HomepageHero />
      <HomepageIntro />
      <GallerySlider />
      <HomepageAbout />
      <HomepageCTA />
    </>
  );
};

export default Home;
