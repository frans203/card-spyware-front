/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_LOCAL_STORAGE_KEY: process.env.LOCAL_STORAGE_KEY,
    },
};

export default nextConfig;
