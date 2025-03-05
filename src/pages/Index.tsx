
import { Hero } from "@/components/home/Hero";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Index;
