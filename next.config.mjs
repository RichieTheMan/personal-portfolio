/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },
};
