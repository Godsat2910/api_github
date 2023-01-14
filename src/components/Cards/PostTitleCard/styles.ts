import styled from 'styled-components'

export const PostTitleCardContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  justify-content: flex-start;

  margin: auto;
  margin-top: -3rem;
  padding: 2rem;

  width: 100%;
`

export const PostTitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BackLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-weight: bold;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme['base-title']};
`

export const DescriptionText = styled.p``

export const FooterCard = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1.5rem;
    color: ${({ theme }) => theme['base-label']};
  }
`
