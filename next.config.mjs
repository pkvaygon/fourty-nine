/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.contentapi.ea.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
