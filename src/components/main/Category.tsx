import React from 'react'
import styled from 'styled-components'

type CategoryProps = {
  categories: Record<string, number>
  selectedCategory: string
  handleSelect: (category: string) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-top: 80px;
`

const Item = styled.div<{ $selected: boolean }>`
  font-size: 15px;
  font-weight: ${({ $selected }) => ($selected ? 700 : 400)};
  color: ${({ $selected }) => ($selected ? '#000000' : '#6B7280')};
  background-color: ${({ $selected }) => ($selected ? '#F3F4F6' : 'transparent')};
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ $selected }) => ($selected ? '#F3F4F6' : '#F9FAFB')};
    color: ${({ $selected }) => ($selected ? '#000000' : '#374151')};
  }

  span {
    color: #9CA3AF;
    margin-left: 4px;
    font-weight: 400;
  }
`

export default function Category({
  categories,
  selectedCategory,
  handleSelect,
}: CategoryProps) {
  return (
    <Wrapper>
      {Object.entries(categories).map(([category, count]) => (
        <Item
          onClick={() => handleSelect(category)}
          $selected={category === selectedCategory}
          key={category}
        >
          {category}<span>({count})</span>
        </Item>
      ))}
    </Wrapper>
  )
}