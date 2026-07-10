import GallerySlider from "../components/homepage/GallerySlider";
import HomepageHero from "../components/homepage/HomepageHero";
import HomepageIntro from "../components/homepage/HomepageIntro";
import HomepageAbout from "../components/homepage/HomepageAbout";
import HomepageCTA from "../components/homepage/HomepageCTA";

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
