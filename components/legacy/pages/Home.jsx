import Hero from "../../home/Hero";
import SeoTrustSection from "../../home/SeoTrustSection";
import WhyChooseUs from "../../home/WhyChooseUs";
import WorkflowTimeline from "../../home/WorkflowTimeline";
import ServicePackages from "../../home/ServicePackages";
import Testimonials from "../../home/Testimonials";
import FAQSection from "../../home/FAQSection";

export default function HomePage(props) {
  return (
    <>
      <Hero goToCheck={props.goToCheck} />
      <SeoTrustSection />
      <WhyChooseUs />
      <WorkflowTimeline />
      <ServicePackages />
      <Testimonials />
      <FAQSection />
    </>
  );
}
