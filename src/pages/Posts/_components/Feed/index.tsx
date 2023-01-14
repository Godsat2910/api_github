import React from 'react'
import { useContextSelector } from 'use-context-selector'
import PostCard from '../../../../components/Cards/PostCard'
import { PostsContext } from '../../../../context/PostsContext'
import { FeedContainer } from './styles'

const Feed: React.FC = () => {
  const { postsCards } = useContextSelector(PostsContext, (context) => context)

  return (
    <FeedContainer>
      {postsCards &&
        postsCards.map((postCard) => (
          <PostCard key={postCard.id} postCard={postCard} />
        ))}
    </FeedContainer>
  )
}

export default Feed
