// src/components/ProfileCard/styles.ts
import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.5rem;
  z-index: 2;
  position: relative;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  object-fit: cover;
`

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  a {
    text-transform: uppercase;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid transparent;
    transition: border 0.2s;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.subtitle};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
