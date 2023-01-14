import styled from 'styled-components'

export const PostsContainer = styled.div`
  flex: 1;
  max-width: 900px;
  margin: auto;
  padding-bottom: 5rem;
`

interface ISpace {
  heigth?: string
}

export const Space = styled.div<ISpace>`
  height: ${({ heigth }) => heigth || `2rem`};
`
