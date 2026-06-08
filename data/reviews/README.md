# BKK AIR Review Moderation Data

Submitted customer reviews are stored as `pending` by default by the `/api/reviews` route.

Admin publishing workflow:

1. Review records in `pending-reviews.json`.
2. Verify the review is based on a real customer experience and consent is present.
3. Remove sensitive information before publishing.
4. Add only approved public-safe review data to `lib/reviews.ts` under `approvedReviews`.

Do not publish passport numbers, email addresses, phone numbers, or personal travel details.
