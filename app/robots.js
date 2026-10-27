export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/'],
    },
    sitemap: 'https://hausarztpraxis-duebendorf.ch/sitemap.xml',
  }
}
