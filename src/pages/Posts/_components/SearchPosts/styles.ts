import styled from 'styled-components'

export const SearchPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Subtitle = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme['base-subtitle']};
`

export const Info = styled.span`
  color: ${({ theme }) => theme['base-span']};
`

export const FormSearch = styled.form``
export const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-label']};
  color: ${({ theme }) => theme['base-label']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
