import styled from 'styled-components'

export const ArticleContainer = styled.article`
  width: 100%;
  margin-top: 4rem;

  p {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;

    color: ${({ theme }) => theme.blue};
  }
`
