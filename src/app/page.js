// import Image from "next/image";

import FAQ from "@/components/root/FAQ/FAQ";
import FeaturedPlace from "@/components/root/FeaturedPlace/FeaturedPlace";
import Gallery from "@/components/root/Gallery/Gallery";
import HeroSection from "@/components/root/HeroSection/HeroSection";
import Testimonial from "@/components/root/Testimonial/Testimonial";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <Gallery />
      <FeaturedPlace />
      <Testimonial />
      <FAQ />
    </div>
  );
}
