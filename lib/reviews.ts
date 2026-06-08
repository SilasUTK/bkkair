export type ApprovedReview = {
  id: string;
  initials: string;
  country: string;
  serviceUsed: string;
  reviewText: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source?: "LINE" | "Email" | "WhatsApp" | "เว็บไซต์";
  photoUrl?: string;
  approvedForPublishing: true;
};

export type PendingReviewRecord = {
  id: string;
  status: "pending";
  submittedAt: string;
  nicknameOrInitials: string;
  displayInitials: string;
  destinationCountry: string;
  serviceUsed: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  source: "เว็บไซต์";
  photo: null | {
    originalName: string;
    storedFileName: string;
    storagePath: string;
    publicPath: string;
    contentType: string;
    size: number;
  };
  consent: {
    realExperienceAndPublishAuthorized: true;
    noVisaApprovalGuaranteeUnderstood: true;
  };
  moderation: {
    approvedForPublishing: false;
    reviewedAt: null;
    reviewedBy: null;
    adminNotes: "";
  };
};

export const approvedReviews: ApprovedReview[] = [];

export function getApprovedReviewJsonLd(reviews: ApprovedReview[]) {
  if (reviews.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.initials,
        },
        datePublished: review.date,
        reviewBody: review.reviewText,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: {
          "@type": "Service",
          name: `BKK AIR ${review.serviceUsed}`,
        },
      },
    })),
  };
}
