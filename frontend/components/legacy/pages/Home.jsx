import Hero from "../../home/Hero";
import WhyChooseUs from "../../home/WhyChooseUs";
import WorkflowTimeline from "../../home/WorkflowTimeline";
import ServicePackages from "../../home/ServicePackages";
import SupportedCountriesSection from "../../home/SupportedCountriesSection";
import SeoTrustSection from "../../home/SeoTrustSection";
import Testimonials from "../../home/Testimonials";
import FAQSection from "../../home/FAQSection";
import FinalCtaSection from "../../home/FinalCtaSection";

export default function HomePage(props) {
  return (
    <>
      {/* SECTION 1: HERO SECTION */}
      <Hero goToCheck={props.goToCheck} />

      {/* SECTION 2: WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SECTION 3: HOW IT WORKS */}
      <WorkflowTimeline />

      {/* SECTION 4: SERVICE PACKAGES */}
      <ServicePackages />

      {/* SECTION 5: SUPPORTED COUNTRIES */}
      <SupportedCountriesSection />

      {/* SECTION 6: TRUST & SECURITY */}
      <SeoTrustSection />

      {/* SECTION 7: TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 8: FAQ */}
      <FAQSection />

      {/* SECTION 9: FINAL CTA */}
      <FinalCtaSection />
    </>
  );
}