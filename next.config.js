/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  trailingSlash: false,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'praxis-seefeld.ch',
        pathname: '/wp-content/**',
      },
    ],
  },
  async redirects() {
    return [
      // Host redirection: www to non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hausarztpraxis-duebendorf.ch' }],
        destination: 'https://hausarztpraxis-duebendorf.ch/:path*',
        permanent: true,
      },
      // Base page redirects & trailing slashes
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/:path*', destination: '/', permanent: true },
      { source: '/impressum/', destination: '/impressum', permanent: true },
      { source: '/datenschutz/', destination: '/datenschutz', permanent: true },
      { source: '/cookies/', destination: '/cookies', permanent: true },

      // Team & Doctors redirects
      { source: '/praxis-team', destination: '/#team', permanent: true },
      { source: '/praxis-team/:path*', destination: '/#team', permanent: true },
      { source: '/team', destination: '/#team', permanent: true },
      { source: '/team/', destination: '/#team', permanent: true },
      { source: '/team/dr-abuawad', destination: '/team/awad-abuawad', permanent: true },
      { source: '/team/dr-abuawad/:path*', destination: '/team/awad-abuawad', permanent: true },
      { source: '/team/dr-rodriguez', destination: '/team/saskia-rodriguez', permanent: true },
      { source: '/team/dr-rodriguez/:path*', destination: '/team/saskia-rodriguez', permanent: true },
      { source: '/team/dr-fedi-farah', destination: '/#team', permanent: true },
      { source: '/team/dr-fedi-farah/:path*', destination: '/#team', permanent: true },
      { source: '/team/dr-mariem', destination: '/#team', permanent: true },
      { source: '/team/dr-mariem/:path*', destination: '/#team', permanent: true },
      { source: '/doctor/dr-awad-abuawad', destination: '/team/awad-abuawad', permanent: true },
      { source: '/doctor/dr-awad-abuawad/:path*', destination: '/team/awad-abuawad', permanent: true },
      { source: '/doctor/dr-saskia-rodriguez', destination: '/team/saskia-rodriguez', permanent: true },
      { source: '/doctor/dr-saskia-rodriguez/:path*', destination: '/team/saskia-rodriguez', permanent: true },
      { source: '/doctor/dr-koller', destination: '/hausarzt-duebendorf', permanent: true },
      { source: '/doctor/dr-koller/:path*', destination: '/hausarzt-duebendorf', permanent: true },
      { source: '/doctor/dr-michael-koller', destination: '/hausarzt-duebendorf', permanent: true },
      { source: '/doctor/dr-michael-koller/:path*', destination: '/hausarzt-duebendorf', permanent: true },
      { source: '/doctor', destination: '/#team', permanent: true },
      { source: '/doctor/:path*', destination: '/#team', permanent: true },

      // Services & Specialization redirects
      { source: '/leistungen', destination: '/#services', permanent: true },
      { source: '/leistungen/', destination: '/#services', permanent: true },
      { source: '/service/urologie', destination: '/leistungen/urologie', permanent: true },
      { source: '/service/urologie/:path*', destination: '/leistungen/urologie', permanent: true },
      { source: '/service/behandlung-von-erschoepfung-muedigkeit-v-a-bei-eisenmangel-eiseninfusion', destination: '/leistungen/naturmedizin', permanent: true },
      { source: '/service/behandlung-von-erschoepfung-muedigkeit-v-a-bei-eisenmangel-eiseninfusion/:path*', destination: '/leistungen/naturmedizin', permanent: true },
      { source: '/service/eiseninfusion', destination: '/leistungen/naturmedizin', permanent: true },
      { source: '/service/eiseninfusion/:path*', destination: '/leistungen/naturmedizin', permanent: true },
      { source: '/service/naturmedizin', destination: '/leistungen/naturmedizin', permanent: true },
      { source: '/service/naturmedizin/:path*', destination: '/leistungen/naturmedizin', permanent: true },
      { source: '/service/notfallpraxis-walk-in', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/service/notfallpraxis-walk-in/:path*', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/service/notfall', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/service/notfall/:path*', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/service/walk-in', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/service/walk-in/:path*', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/service/fahreignung', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/service/fahreignung/:path*', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/service/check-up', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/service/check-up/:path*', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/1-column-services', destination: '/#services', permanent: true },
      { source: '/1-column-services/:path*', destination: '/#services', permanent: true },
      { source: '/service/:path*', destination: '/#services', permanent: true },
      { source: '/leistungen-alt/:path*', destination: '/#services', permanent: true },
      { source: '/leistungen-unserer-praxis', destination: '/#services', permanent: true },
      { source: '/leistungen-unserer-praxis/:path*', destination: '/#services', permanent: true },
      { source: '/unsere-leistungen', destination: '/#services', permanent: true },
      { source: '/unsere-leistungen/:path*', destination: '/#services', permanent: true },
      { source: '/hauseigene-apotheke', destination: '/#services', permanent: true },
      { source: '/hauseigene-apotheke/:path*', destination: '/#services', permanent: true },

      // Geo & Short URL redirects
      { source: '/duebendorf', destination: '/hausarzt-duebendorf', permanent: true },
      { source: '/duebendorf/:path*', destination: '/hausarzt-duebendorf', permanent: true },
      { source: '/stettbach', destination: '/hausarzt-stettbach', permanent: true },
      { source: '/stettbach/:path*', destination: '/hausarzt-stettbach', permanent: true },
      { source: '/notfall', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/notfall/:path*', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/walk-in', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/walk-in/:path*', destination: '/leistungen/notfallpraxis-walk-in', permanent: true },
      { source: '/fahreignung', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/fahreignung/:path*', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/fahreignung-duebendorf', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/fahreignung-duebendorf/:path*', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/check-up', destination: '/check-up-fahreignung-duebendorf', permanent: true },
      { source: '/check-up/:path*', destination: '/check-up-fahreignung-duebendorf', permanent: true },

      // Contact, About & Gallery redirects
      { source: '/kontakt', destination: '/#contact', permanent: true },
      { source: '/kontakt/:path*', destination: '/#contact', permanent: true },
      { source: '/make-an-appointment', destination: '/#contact', permanent: true },
      { source: '/make-an-appointment/:path*', destination: '/#contact', permanent: true },
      { source: '/termin', destination: '/#contact', permanent: true },
      { source: '/termin/:path*', destination: '/#contact', permanent: true },
      { source: '/termin-buchen', destination: '/#contact', permanent: true },
      { source: '/termin-buchen/:path*', destination: '/#contact', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/about/:path*', destination: '/#about', permanent: true },
      { source: '/about-us', destination: '/#about', permanent: true },
      { source: '/about-us/:path*', destination: '/#about', permanent: true },
      { source: '/ueber-uns', destination: '/#about', permanent: true },
      { source: '/ueber-uns/:path*', destination: '/#about', permanent: true },
      { source: '/galerie', destination: '/#about', permanent: true },
      { source: '/galerie/:path*', destination: '/#about', permanent: true },
      { source: '/gallery-item/:path*', destination: '/#about', permanent: true },
      { source: '/Galerienartikel-Typ/:path*', destination: '/#about', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://maps.google.com https://maps.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src https://maps.google.com https://www.google.com https://maps.googleapis.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
