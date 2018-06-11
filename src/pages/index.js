import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import { Content } from '../components';

export default function Index({ data }) {
  const { description, content } = data;
  return <Content title={content.meta.title} html={description.html} />
}

Index.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      meta: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    description: PropTypes.shape({
      html: PropTypes.string
    })
  }).isRequired
};

export const pageQuery = graphql`
  query IndexPageQuery {
    content: contentYaml {
      meta {
        title
      }
    }

    description: markdownRemark(
      fileAbsolutePath: { regex: "/index.md/" }
    ) {
      html
    }
  }
`;
