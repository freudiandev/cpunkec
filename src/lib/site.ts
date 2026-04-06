const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `http://localhost:${process.env.PORT ?? "3000"}${basePath}`;

export const siteConfig = {
  name: "Ciberpunk Ecuador",
  basePath,
  siteUrl,
  logoPath: `${basePath}/1.png`,
} as const;
