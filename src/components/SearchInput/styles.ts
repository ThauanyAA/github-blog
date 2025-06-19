import styled from 'styled-components'

export const SearchContainer = styled.form`
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    h3 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.subtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.span};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors.baseInput};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.text};

    &::placeholder {
      color: ${({ theme }) => theme.colors.label};
    }
  }
`
