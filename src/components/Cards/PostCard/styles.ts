import styled from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 2.5rem;
  width: 440px;
  height: 300px;
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 8px;
  cursor: pointer;
`

export const HeaderCardPost = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  margin-bottom: 2rem;
`
export const TitlePost = styled.h3`
  width: 70%;
  color: ${({ theme }) => theme['base-title']};
`

export const InfoPost = styled.span`
  color: ${({ theme }) => theme['base-span']};
`

export const ContentCardPost = styled.p`
  color: ${({ theme }) => theme['base-text']};
`
