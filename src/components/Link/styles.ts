import styled from 'styled-components'

export const LinkContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 0.6rem;

  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.blue};

  height: 30px;
`

export const LinkText = styled.a`
  text-decoration: none;

  color: ${({ theme }) => theme.blue};
  font-weight: bold;
`
