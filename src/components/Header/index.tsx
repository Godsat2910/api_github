import React from 'react'
import { CoverContent, HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/logo.svg'
import LeftCover from '../../assets/left-cover.svg'
import RigthCover from '../../assets/rigth-cover.svg'
import { useNavigate } from 'react-router-dom'



const Header: React.FC = () => {
  const navigate = useNavigate()

  function redirectToHome() {
    navigate('/')
  };

  return (
    <HeaderContainer>
      <CoverContent>
        <img src={LeftCover} alt="" />
        <HeaderContent>
          <img onClick={() => redirectToHome()} src={Logo} alt="" />
        </HeaderContent>
        <img src={RigthCover} alt="" />
      </CoverContent>
    </HeaderContainer>
  )
}

export default Header
