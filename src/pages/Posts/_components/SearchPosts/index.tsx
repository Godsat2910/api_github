import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../../../services/api'
import { endpoints } from '../../../../services/endpoints'
import {
  FormSearch,
  Info,
  InfoContainer,
  SearchInput,
  SearchPostsContainer,
  Subtitle,
} from './styles'
import { toast } from 'react-toastify'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../context/PostsContext'

interface ISearchPosts {
  numberPublications: number
}

const SearchPosts: React.FC<ISearchPosts> = ({ numberPublications }) => {
  const { register } = useForm()
  const updatePostsCards = useContextSelector(
    PostsContext,
    (context) => context.updatePostsCards,
  )

  const handleSearchPost = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      const { data: resultPosts } = await api.get(
        endpoints.getPostsByQuery(e.currentTarget.value),
      )
      updatePostsCards(resultPosts.items)
    } catch (error) {
      updatePostsCards([])
      toast.error('Nenhum post foi encontrado')
    }
  }

  const publicationsLabel = `${numberPublications} publica${
    numberPublications > 1 ? 'ções' : 'ção'
  }`

  return (
    <SearchPostsContainer>
      <InfoContainer>
        <Subtitle>Publicações</Subtitle>
        <Info>{publicationsLabel}</Info>
      </InfoContainer>
      <FormSearch>
        <SearchInput
          placeholder="Buscar conteúdo"
          type="text"
          {...register('post')}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              e.preventDefault()
              handleSearchPost(e)
            }
          }}
        />
      </FormSearch>
    </SearchPostsContainer>
  )
}

export default SearchPosts
