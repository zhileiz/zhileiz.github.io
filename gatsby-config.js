module.exports = {
  siteMetadata: {
    title: 'TutsBlog',
    desc: "ZhileiZ's implementation of LevelUpTuts ProGatsby Series"
  },
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ],
}
