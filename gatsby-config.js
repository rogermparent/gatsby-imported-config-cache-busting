module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Imported Config Cache Busting",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: require("./mdx-options.js"),
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: "./posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./posts/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
  ],
};
