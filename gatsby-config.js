module.exports = {
  siteMetadata: {
    title: 'TutsBlog',
    desc: "ZhileiZ's implementation of LevelUpTuts ProGatsby Series"
  },
  pathPrefix: "gatsbylut",
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ],
}
