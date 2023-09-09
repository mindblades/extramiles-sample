/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/percentage-calc',
                destination: 'http://localhost:5000/percentage-calc',
            },
        ]
    },
}
