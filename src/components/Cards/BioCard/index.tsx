import React, { useEffect, useState } from 'react'
import {
  CardContainer,
  Content,
  DescriptionText,
  FooterCard,
  HeaderCard,
  Info,
  ProfileContainer,
  TitleCard,
} from './styles'
import GitHubIcon from '../../../assets/github.svg'
import BuildingIcon from '../../../assets/building.svg'
import UserGroupIcon from '../../../assets/user-group.svg'
import { api } from '../../../services/api'
import { endpoints } from '../../../services/endpoints'
import Link from '../../Link'

export interface IProfile {
  avatar_url: string
  name: string
  bio: string
  followers: number
  company: string
  login: string
  html_url: string
}

const BioCard = () => {

  // add state 

  useEffect(() => {
   // get data of users;
  }, [])

  return (
    <CardContainer>
      <ProfileContainer>
        <img src="https://avatars.githubusercontent.com/u/69405601?v=4" alt="profile author" />
      </ProfileContainer>
      <Content>
        <HeaderCard>
          <TitleCard>José Wictor</TitleCard>
          <Link url="https://github.com/wictor-parmenis">GITHUB</Link>
        </HeaderCard>
        <DescriptionText>Description profile</DescriptionText>
        <FooterCard>
          <Info>
            <img src={GitHubIcon} alt="" />
            <DescriptionText>login profile</DescriptionText>
          </Info>
          <Info>
            <img
              src={BuildingIcon}
              style={{
                width: 20,
              }}
              alt=""
            />
            <DescriptionText>company profile</DescriptionText>
          </Info>
          <Info>
            <img src={UserGroupIcon} alt="" />
            <DescriptionText>profile  seguidores</DescriptionText>
          </Info>
        </FooterCard>
      </Content>
    </CardContainer>
  )
}

export default BioCard
