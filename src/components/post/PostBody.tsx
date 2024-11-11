import styled from 'styled-components'
import useRenderRichText from '../../hooks/useRenderRichText'
import React from 'react'

type PostBodyProps = {
  content: Queries.ContentfulPostContent
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 100px;
`

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  font-size: 16px;
  line-height: 2;
  word-break: break-word;
`

export default function PostBody({ content }: PostBodyProps) {
  const richText = useRenderRichText(content)

  return (
    <Wrapper>
      <Content>
        <div id="content">{richText}</div>
      </Content>
    </Wrapper>
  )
}