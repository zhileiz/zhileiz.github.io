import React, { Component } from 'react'

export default class PostPage extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        <h1>Post</h1>
        <p>{data.markdownRemark.frontmatter.summary}</p>
        <div dangerouslySetInnerHTML = {{__html: data.markdownRemark.html}}></div>
      </div>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields:{
      slug: {
        eq: $slug
      }
    }){
      html
      frontmatter{
        summary
      }
    }
  }
`;
