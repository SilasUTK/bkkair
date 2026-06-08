import type { Metadata } from "next";
import MarketingShell from "../../../components/marketing/MarketingShell";
import FAQPageLayout from "../../../components/FAQPageLayout";
import { faqTopicPages } from "../../../lib/faqs";

const topic = faqTopicPages["uk-visa-support-documents"];

export const metadata: Metadata = {
  title: topic.title,
  description: topic.description,
  alternates: { canonical: `/faq/${topic.slug}` },
  openGraph: { title: topic.title, description: topic.description },
};

export default function UkVisaSupportDocumentsPage() {
  return (
    <MarketingShell>
      <FAQPageLayout topic={topic} />
    </MarketingShell>
  );
}
