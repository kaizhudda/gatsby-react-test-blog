import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout2'

const Headline = styled.h1`
  display: inline-block;
  color: cornflowerblue;
`

export default ({ data }) => (
  <Layout>
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <title> MY Blog Posts Overview </title>
        <meta name="description" content="Free Web Tutorial"></meta>
        <meta name="keywords" content="React, Javascript"></meta>
        <meta name="author" content="Kaiz Hudda"></meta>
      </Helmet>
      <Headline>My Blog Posts (on Netlify)</Headline>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map((post) => (
          <div key={post.node.id}>
            <hr />
            <Link to={post.node.fields.slug} style={{ textDecoration: 'none' }}>
              <h3>{post.node.frontmatter.title}</h3>
              <p><i>{post.node.frontmatter.date}</i></p>
              <p>{post.node.excerpt}</p>
            </Link>
          </div>
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
