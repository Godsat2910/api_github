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
  html_url: string
  body: string
  comments: number
  created_at: string
}

const Post: React.FC = () => {
  const { numberPost } = useParams() 
  const [post, setPost] = useState<IPost>()

  useEffect(() => {
    const getPost = async () => {
      const resultNumberPost = await api.get(endpoints.getPost(`${numberPost}`))

      
      const {data} = resultNumberPost;
      console.log(data, 'data');
      setPost(data)      
    }
    getPost()
  }, [numberPost])

  const timePosting = post?.created_at ? getTimePosting(post?.created_at) : ''
  const numberComments = `${post?.comments} comentá${
    post?.comments && post.comments > 1 ? 'rios' : 'rio'
  }` //'0 comentários' // number of comments here

  console.log('url ->', post)
  return (
    <PostContainer>
      {!post && <></>}
      {post && post.body && (
        <>
          <PostTitleCard
            comments={numberComments}
            htmlUrl={post.html_url}
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
