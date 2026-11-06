export default function sitemap() {
  const baseUrl = 'https://hausarztpraxis-duebendorf.ch';
  const lastMod = '2026-11-06';

  const pages = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/hausarzt-duebendorf', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/leistungen/notfallpraxis-walk-in', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/hausarzt-stettbach', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/check-up-fahreignung-duebendorf', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/leistungen/urologie', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/leistungen/naturmedizin', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/team/awad-abuawad', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/team/saskia-rodriguez', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/impressum', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map((p) => ({
    url: `${baseUrl}${p.route}`,
    lastModified: lastMod,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
