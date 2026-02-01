/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aopay.in",
  generateRobotsTxt: true,
  sitemapSize: 1000000,
  generateIndexSitemap: false,
  outDir: "./public",
  trailingSlash: false, 
  changefreq: "daily",
  priority: 0.7,
  autoLastmod: true,

  transform: async (config, path) => {
    return {
      loc: path.replace(/\/$/, ""), // extra safety
      changefreq: "daily",
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://aopay.in/sitemap.xml"],
  },
};
