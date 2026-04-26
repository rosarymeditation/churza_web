export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/privacy',
        '/terms',
        '/support',
        '/cookies',
        '/eula',
        '/cookies-policy',
        '/delete-account',
        '/onboarding/', // Blocks the entire onboarding folder
      ],
    },
    sitemap: 'https://churza.org/sitemap.xml',
  };
}