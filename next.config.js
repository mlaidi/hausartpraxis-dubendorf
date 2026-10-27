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
      // Old content pages
      { source: '/team/:path*', destination: '/#team', permanent: true },
      { source: '/kontakt', destination: '/#contact', permanent: true },
      { source: '/kontakt/:path*', destination: '/#contact', permanent: true },
      { source: '/news/:path*', destination: '/', permanent: true },
      { source: '/home/:path*', destination: '/', permanent: true },
      { source: '/category/:path*', destination: '/', permanent: true },
      { source: '/1-column-services', destination: '/#services', permanent: true },
      { source: '/grippesaison-gesundheitstipps-fur-den-winter/:path*', destination: '/', permanent: true },
      { source: '/freie-stellen/:path*', destination: '/', permanent: true },
      { source: '/galerie/:path*', destination: '/', permanent: true },
      { source: '/faqs', destination: '/', permanent: true },
      { source: '/810/:path*', destination: '/', permanent: true },
      { source: '/hauseigene-apotheke/:path*', destination: '/#services', permanent: true },
      { source: '/gallery-item/:path*', destination: '/', permanent: true },
      { source: '/search/:path*', destination: '/', permanent: true },
      { source: '/Galerienartikel-Typ/:path*', destination: '/', permanent: true },
      { source: '/service/:path*', destination: '/#services', permanent: true },
      // Author pages
      { source: '/author/:path*', destination: '/', permanent: true },
      // Old post slugs
      { source: '/1153-2', destination: '/', permanent: true },
      // Feed URLs
      { source: '/comments/feed/:path*', destination: '/', permanent: true },
      { source: '/feed/:path*', destination: '/', permanent: true },
      // WordPress core files and directories
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-signup.php', destination: '/', permanent: true },
      { source: '/wp-register.php', destination: '/', permanent: true },
      { source: '/wp-cron.php', destination: '/', permanent: true },
      { source: '/wp-comments-post.php', destination: '/', permanent: true },
      { source: '/wp-trackback.php', destination: '/', permanent: true },
      { source: '/wp-links-opml.php', destination: '/', permanent: true },
      { source: '/wp-blog-header.php', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
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
