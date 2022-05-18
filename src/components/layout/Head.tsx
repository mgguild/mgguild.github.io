import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description}) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);

  return (
      <Helmet
        htmlAttributes={{ lang: `en` }}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      >
         <title>{title}</title>
      <meta
        name='description'
        content={description || data.site.siteMetadata.description}
      />
      </Helmet>
  )
}


SEO.prototype = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default SEO;