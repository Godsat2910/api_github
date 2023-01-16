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


export interface IResponseBio {
  data: IProfile
}

function BioCard(){

    const [bioCard, setBioCard] = useState<IProfile>() 

    useEffect(() => {
      const getBioCard = async () => {
        const resultBio = await api.get(endpoints.getUser()) as IResponseBio
        setBioCard(resultBio.data as unknown as IProfile)
      }
  
      getBioCard()
    }, [])
    return (
      <CardContainer>

        <ProfileContainer>
          <img src="https://avatars.githubusercontent.com/u/77209236?v" alt="profile author" />
        </ProfileContainer>
        <Content>
          <HeaderCard>
            <TitleCard>{bioCard?.name}</TitleCard> 
            <Link url="https://github.com/Godsat2910">GITHUB</Link>
          </HeaderCard>
          <DescriptionText>{bioCard?.bio}</DescriptionText>
          <FooterCard>
            <Info>
              <img src={GitHubIcon} alt="" />
              <DescriptionText>{bioCard?.login}</DescriptionText>
            </Info>
            <Info>
              <img
                src={BuildingIcon}
                style={{
                  width: 20,
                }}
                alt=""
              />
              <DescriptionText>{bioCard?.company}</DescriptionText>
            </Info>
            <Info>
              <img src={UserGroupIcon} alt="" />
              <DescriptionText>{bioCard?.followers}</DescriptionText>
            </Info>
          </FooterCard>
        </Content>
      </CardContainer>
    )
  }


export default BioCard
