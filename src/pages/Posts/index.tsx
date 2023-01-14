import React, { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import BioCard from '../../components/Cards/BioCard'
import { PostsContext } from '../../context/PostsContext'
import { api } from '../../services/api'
import { endpoints } from '../../services/endpoints'
import { PostsContainer, Space } from './styles'
import Feed from './_components/Feed'
import SearchPosts from './_components/SearchPosts'

const Posts: React.FC = () => {
  const { postsCards, updatePostsCards } = useContextSelector(
    PostsContext,
    (context) => context,
  )

  useEffect(() => {
    const getPosts = async () => {
      const resultPost = await api.get(endpoints.getPosts())
      updatePostsCards(resultPost.data)
    }

    getPosts()
  }, [])

  return (
    <PostsContainer>
      <BioCard />
      <Space heigth="5rem" />
      <SearchPosts
        numberPublications={
          postsCards && postsCards.length > 0 ? postsCards.length : 0
        }
      />
      {postsCards && <Feed />}
    </PostsContainer>
  )
}

export default Posts
