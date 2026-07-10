import GallerySlider from "../components/homepage/GallerySlider";
import HomepageHero from "../components/homepage/HomepageHero";
import HomepageIntro from "../components/homepage/HomepageIntro";
import HomepageAbout from "../components/homepage/HomepageAbout";
import galleryImages from "../data/galleryInfinte";

const Home = () => {
  return (
    <>
      <HomepageHero />
      <HomepageIntro />
      <GallerySlider images={galleryImages} showCaptions={true}/>
      <HomepageAbout />
    </>
  );
};

export default Home;
