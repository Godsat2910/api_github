import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: rgba(21, 98, 175, 0.14);
  padding: 2.5rem 0 7.5rem;

  height: 300px;
`

export const CoverContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin: auto;
    margin-top: 2rem;
    cursor: pointer;
  }
`
