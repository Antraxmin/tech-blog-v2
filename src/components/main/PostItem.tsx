import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

type PostItemProps = {
  title: string
  date: string
  category: string[]
  thumbnail: IGatsbyImageData
  description: string
  slug: string
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 320px;
  border-radius: 16px;
  border: 1px solid #E5E7EB;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`

const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  height: 180px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
  }
`

const Contents = styled.div`
  padding: 20px;
  background: white;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  max-height: 2.4em;
  font-size: 20px;
  font-weight: 700;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  color: #111827;
`

const Date = styled.div`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  color: #6B7280;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;

  div {
    font-size: 13px;
    color: #4B5563;
    background-color: #F3F4F6;
    padding: 4px 8px;
    border-radius: 12px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #E5E7EB;
    }
  }
`

const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  max-height: 4.5em;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  color: #4B5563;
`

export default function PostItem({
  title,
  date,
  category,
  thumbnail,
  description,
  slug,
}: PostItemProps) {
  return (
    <Wrapper to={slug as string}>
      <Thumbnail>
        <GatsbyImage
          image={thumbnail}
          alt={title as string}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Thumbnail>

      <Contents>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {category?.map(category => <div key={category}>#{category}</div>)}
        </Category>
        <Description>{description}</Description>
      </Contents>
    </Wrapper>
  )
}