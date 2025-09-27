const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  assetPrefix: isProd ? '/ResumeWeb' : '', // <-- only for GitHub Pages
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter(
      rule => rule.test && rule.test.toString().includes('tsx|ts')
    );
    tsRules.forEach(rule => { rule.include = undefined; });
    return config;
  },
};

module.exports = nextConfig;
