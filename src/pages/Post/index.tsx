import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostTitleCard from '../../components/Cards/PostTitleCard'
import { api } from '../../services/api'
import { endpoints } from '../../services/endpoints'
import { PostContainer } from './styles'
import { getTimePosting } from '../../utils/getTimePosting'
import Article from './_components/Article'
interface IPost {
  number: number
  title: string
  htmlUrl: string
  body: string
  comments: number
  createdAt: string
}

const Post: React.FC = () => {
  const { numberPost } = useParams()
  const [post, setPost] = useState<IPost>()

  useEffect(() => {
    const getPost = async () => {
      // get posts here
    }
    getPost()
  }, [numberPost])

  const timePosting = post?.createdAt ? getTimePosting(post?.createdAt) : ''
  const numberComments = '0 comentários' // number of comments here

  return (
    <PostContainer>
      {!post && <></>}
      {post && post.body && (
        <>
          <PostTitleCard
            comments={numberComments}
            htmlUrl={post.htmlUrl}
            timePosting={timePosting}
            title={post.title}
          />
          <Article article={post.body} />
        </>
      )}
    </PostContainer>
  )
}

export default Post
