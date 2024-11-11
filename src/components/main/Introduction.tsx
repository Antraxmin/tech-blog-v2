import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const ProfileImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const SubText = styled.div`
  font-size: 30px;
  font-weight: 100;
`

const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;
`

export default function Introduction() {
  return (
    <div>
      <ProfileImage>
        <StaticImage src="../../images/profile.jpeg" alt="Profile Image" />
      </ProfileImage>

      <SubText>안녕하세요!</SubText>
      <MainText>가치를 창출하는 소프트웨어 엔지니어 임채민입니다</MainText>
    </div>
  )
}