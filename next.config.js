/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  env: {
    // Add any logic you want here, returning `true` to enable password protect.
    PASSWORD_PROTECT: process.env.ENVIRONMENT === 'Production' || process.env.ENVIRONMENT === 'Development',
  }
}
