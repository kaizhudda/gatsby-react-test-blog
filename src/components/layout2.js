import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ListLink = props => {
  return (
    <li style={{
      display: 'inline-block',
      marginRight: '1rem',
    }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

const Layout2 = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <Img style={{maxHeight: '40vh'}} fluid={data.file.childImageSharp.fluid} />
        <div style={{
          margin: '0 auto',
          maxWidth: 650,
          padding: '0 1rem',
        }}>
          <header style={{
            marginBottom: '1.5rem'
          }}>
            <h3 style={{display: 'inline'}}> {data.site.siteMetadata.title}</h3>
            <ListLink style={{
              listStyle: 'none',
              float: 'right',
            }} to='/'>
              Home
            </ListLink>
            <ListLink style={{
              listStyle: 'none',
              float: 'right',
            }} to='/info/about'>
              About
            </ListLink>
            <ListLink style={{
              listStyle: 'none',
              float: 'right',
            }} to='/'>
              Home
            </ListLink>
          </header>
          {children}
        </div>
      </div>
    )}
    />
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath:{
      regex:"/blog-header/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Layout2;

Layout2.propTypes = {
  children: PropTypes.node.isRequired
}
