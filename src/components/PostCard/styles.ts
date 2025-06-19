import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.basePost};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  transition: border 0.2s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.label};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    h4 {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.title};
      flex: 1;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.span};
      white-space: nowrap;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    line-height: 160%;
  }
`