/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "msquarefdc.sgp1.cdn.digitaloceanspaces.com",
            "msquarefdc.sgp1.digitaloceanspaces.com",
        ],
    },
};

module.exports = nextConfig;
