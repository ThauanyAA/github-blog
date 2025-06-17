import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  body {
    background: ${({ theme }) => theme.colors.baseBackground};
    color: ${({ theme }) => theme.colors.text};
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
`;