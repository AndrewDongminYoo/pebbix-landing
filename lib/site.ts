export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://pebbix.donminzzi.kr");

// Filled in once the store records exist (issues #45 and #47). Until then the
// footer links out to nothing rather than to a 404 on the stores.
export const appStoreUrl: string | null = null;
export const playStoreUrl: string | null = null;
