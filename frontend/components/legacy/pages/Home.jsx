import Hero from "../components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import WhyBKKAir from "../components/home/WhyBKKAir";
import Workflow from "../components/home/Workflow";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";

export default function HomePage(props) {
  return (
    <>
      <Hero goToCheck={props.goToCheck} />
      <TrustBadges />
      <WhyBKKAir />
      <Workflow />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
