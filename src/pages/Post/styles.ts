import styled from 'styled-components'

export const PostContainer = styled.main`
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem;
  z-index: 2;
  position: relative;
`

export const PostHeader = styled.section`
  background: ${({ theme }) => theme.colors.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.5rem;

  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.primary};
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.span};

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const PostContent = styled.article`
  margin-top: 2rem;
  padding: 0 1rem 1rem 2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  p {
    margin-bottom: 1rem;
  }

  pre {
    background: ${({ theme }) => theme.colors.basePost};
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
  }

  code {
    font-family: 'Fira Code', monospace;
  }
`