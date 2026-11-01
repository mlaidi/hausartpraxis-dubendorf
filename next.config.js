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
      { source: '/team', destination: '/#team', permanent: true },
      { source: '/team/', destination: '/#team', permanent: true },
      { source: '/team/dr-abuawad', destination: '/team/awad-abuawad', permanent: true },
      { source: '/team/dr-abuawad/', destination: '/team/awad-abuawad', permanent: true },
      { source: '/team/dr-rodriguez', destination: '/team/saskia-rodriguez', permanent: true },
      { source: '/team/dr-rodriguez/', destination: '/team/saskia-rodriguez', permanent: true },
      { source: '/team/dr-fedi-farah', destination: '/#team', permanent: true },
      { source: '/team/dr-fedi-farah/', destination: '/#team', permanent: true },
      { source: '/team/dr-mariem', destination: '/#team', permanent: true },
      { source: '/team/dr-mariem/', destination: '/#team', permanent: true },
      { source: '/doctor/:path*', destination: '/#team', permanent: true },

      // Services & Contact redirects
      { source: '/1-column-services', destination: '/#services', permanent: true },
      { source: '/1-column-services/:path*', destination: '/#services', permanent: true },
      { source: '/service/:path*', destination: '/#services', permanent: true },
      { source: '/hauseigene-apotheke', destination: '/#services', permanent: true },
      { source: '/hauseigene-apotheke/:path*', destination: '/#services', permanent: true },
      { source: '/kontakt', destination: '/#contact', permanent: true },
      { source: '/kontakt/:path*', destination: '/#contact', permanent: true },
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
