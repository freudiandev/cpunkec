<<<<<<< HEAD
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT ?? "3000"}`);

export const siteConfig = {
  name: "Ciberpunk Ecuador",
  siteUrl,
  logoPath: "/1.png",
=======
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `http://localhost:${process.env.PORT ?? "3000"}${basePath}`;

export const siteConfig = {
  name: "Ciberpunk Ecuador",
  basePath,
  siteUrl,
  logoPath: `${basePath}/1.png`,
>>>>>>> 99b4afe23ffb4fa7881bb38151917ead020e34fa
} as const;
