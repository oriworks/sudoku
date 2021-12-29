/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  basePath: !debug ? process.env.NEXT_PUBLIC_BACKEND_URL : '',
  assetPrefix: !debug ? process.env.NEXT_PUBLIC_BACKEND_URL : '',
}
