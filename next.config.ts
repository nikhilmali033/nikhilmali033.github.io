/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/nikhilmali033.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nikhilmali033.github.io/' : '',
}

module.exports = nextConfig