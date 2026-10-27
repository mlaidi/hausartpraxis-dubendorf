export default function sitemap() {
  const baseUrl = 'https://hausarztpraxis-duebendorf.ch';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    '',
    '/impressum',
    '/datenschutz',
    '/cookies',
    '/leistungen/naturmedizin',
    '/leistungen/notfallpraxis-walk-in',
    '/leistungen/urologie',
    '/team/awad-abuawad',
    '/team/saskia-rodriguez'
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
