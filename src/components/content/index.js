import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Container = styled.div({
  fontFamily: 'sans-serif',
  maxWidth: '100%',
  width: '100%',
  'p a': {
    color: '#d8292f',
  },
  pre: {
    wordWrap: 'break-word',
  },
});

const Title = styled.h1({
  margin: 0,
  marginBottom: '1.5rem',
  paddingBottom: '0.5rem',
  borderBottom: '2px solid #DDD',
  textAlign: 'center'
});

export function Content({ children, html, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {children}
    </Container>
  );
}

Content.propTypes = {
  children: PropTypes.element,
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
