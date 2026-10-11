// Optional trackers. They load ONLY after cookie consent and ONLY if an ID is filled in.
// Empty = inactive (the showcase runs without GA4 / Meta Pixel; the funnel is measured cookie-free via /api/event).
// If you add IDs, also allow their domains in the Content-Security-Policy in vercel.json.
export const TRACKERS = {
  ga4: '',        // e.g. 'G-XXXXXXXXXX'
  metaPixel: '',  // e.g. '123456789012345'
};
