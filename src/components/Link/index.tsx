import React from 'react'
import { LinkContainer, LinkText } from './styles'
import LinkIcon from '../../assets/blue-link.svg'

interface ILink {
  children: React.ReactNode
  url: string
}

const Link: React.FC<ILink> = ({ children, url }) => {
  function redirect() {
    window.location.replace(url)
  }

  return (
    <LinkContainer>
      <LinkText onClick={redirect}>{children}</LinkText>
      <img src={LinkIcon} alt="" width="14rem" />
    </LinkContainer>
  )
}

export default Link
