import React from 'react'
import Link from '../../Link'
import {
  BackLink,
  FooterCard,
  PostTitleCardContainer,
  PostTitleHeader,
  DescriptionText,
  Info,
  Title,
} from './styles'
import { Link as LinkRouter } from 'react-router-dom'
import BackIcon from '../../../assets/back.svg'
import CalendarIcon from '../../../assets/calendar.svg'
import CommentsIcon from '../../../assets/comments.svg'
import GithubIcon from '../../../assets/github.svg'

interface IPostTitleCard {
  title: string
  timePosting: string
  comments: string
  htmlUrl: string
}

const PostTitleCard: React.FC<IPostTitleCard> = ({
  title,
  timePosting,
  comments,
  htmlUrl,
}) => {
  const { VITE_REACT_APP_USERNAME } = import.meta.env
  return (
    <PostTitleCardContainer>
      <PostTitleHeader>
        <BackLink>
          <img src={BackIcon} alt="" width="14rem" />
          <LinkRouter to="/">VOLTAR</LinkRouter>
        </BackLink>
        <Link url={htmlUrl}>VER NO GITHUB</Link>
      </PostTitleHeader>
      <Title>{title}</Title>
      <FooterCard>
        <Info>
          <img src={GithubIcon} alt="" />
          <DescriptionText>{VITE_REACT_APP_USERNAME}</DescriptionText>
        </Info>
        <Info>
          <img src={CalendarIcon} alt="" />
          <DescriptionText>{timePosting}</DescriptionText>
        </Info>
        <Info>
          <img src={CommentsIcon} alt="" />
          <DescriptionText>{comments}</DescriptionText>
        </Info>
      </FooterCard>
    </PostTitleCardContainer>
  )
}

export default PostTitleCard
