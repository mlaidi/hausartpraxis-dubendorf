export default function sitemap() {
  const baseUrl = 'https://hausarztpraxis-duebendorf.ch';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    '',
    '/hausarzt-duebendorf',
    '/hausarzt-stettbach',
    '/check-up-fahreignung-duebendorf',
    '/leistungen/notfallpraxis-walk-in',
    '/leistungen/urologie',
    '/leistungen/naturmedizin',
    '/team/awad-abuawad',
    '/team/saskia-rodriguez',
    '/impressum',
    '/datenschutz',
    '/cookies'
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
