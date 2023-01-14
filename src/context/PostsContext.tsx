import React, { useState } from 'react'
import { createContext } from 'use-context-selector'

export interface IPostCard {
  title: string
  body: string
  postingTime?: string
  id: number
  created_at: string
  number: number
}

interface IPostsContext {
  postsCards: IPostCard[]
  updatePostsCards: (postsCards: IPostCard[]) => void
}

interface IPostsContextProvider {
  children: React.ReactNode
}

const PostsContext = createContext({} as IPostsContext)

const PostsContextProvider: React.FC<IPostsContextProvider> = ({
  children,
}) => {
  const [postsCards, setPostsCards] = useState<IPostCard[]>([])
  const updatePostsCards = (cards: IPostCard[]) => {
    setPostsCards(() => cards)
  }
  return (
    <PostsContext.Provider value={{ postsCards, updatePostsCards }}>
      {children}
    </PostsContext.Provider>
  )
}

export { PostsContext, PostsContextProvider }
