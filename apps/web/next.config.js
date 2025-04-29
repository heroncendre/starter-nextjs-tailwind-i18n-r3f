/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@ui/core', 'three'],
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**'
            }
        ]
    }
}
  
module.exports = nextConfig
