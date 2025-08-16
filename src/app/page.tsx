import CartSlider from "@/components/CartSlider/CartSlider";
import Experiences from "@/components/Experiences/Experiences";
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/layout/Footer";
import Materials from "@/components/Materials/Materials";
import Reviews from "@/components/Reviews/Reviews";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <WhyUs />
        <CartSlider />
        <Experiences />
        <Materials />
        <Reviews />
        <Footer />
    </div>
  );
}
