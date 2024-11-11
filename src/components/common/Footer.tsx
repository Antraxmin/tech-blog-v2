import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <div>Copyright © 2024 Antraxmin</div>
    </Wrapper>
  )
}