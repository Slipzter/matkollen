/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
    {
      source: '/',
      destination: '/landingpage'
    }
  ]
  }
}

module.exports = nextConfig
