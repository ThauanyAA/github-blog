// src/pages/Home/styles.ts
import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

export const PostList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

export const NoResults = styled.div`
  margin-top: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.label};

  p {
    font-size: 1.25rem;
    font-weight: bold;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }

  svg {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.label};
  }

`
