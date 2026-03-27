import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedTrucks from "./components/FeaturedTrucks";
import Brands from "./components/Brands";
import LocationMap from "./components/LocationMap";
import Gallery from "./components/Gallery";
import HomeVideos from "./components/HomeVideos";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedTrucks />
        <Brands />
        <HomeVideos />
        <LocationMap />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
