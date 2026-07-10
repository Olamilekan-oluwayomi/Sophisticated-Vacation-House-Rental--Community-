import GallerySlider from "../components/homepage/GallerySlider";
import HomepageHero from "../components/homepage/HomepageHero";
import HomepageIntro from "../components/homepage/HomepageIntro";
import HomepageAbout from "../components/homepage/HomepageAbout";
import HomepageCTA from "../components/homepage/HomepageCTA";
import galleryImages from "../data/galleryInfinte";

const Home = () => {
  return (
    <>
      <HomepageHero />
      <HomepageIntro />
      <GallerySlider images={galleryImages} showCaptions={true}/>
      <HomepageAbout />
      <HomepageCTA />
    </>
  );
};

export default Home;
