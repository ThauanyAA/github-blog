// src/components/ProfileCard/index.tsx
import { useEffect, useState } from 'react'
import { ProfileContainer, Avatar, Info, Header, Footer } from './styles'
import { api } from '../../lib/axios'
import { GithubLogo, Buildings, Users } from 'phosphor-react'

interface GithubProfile {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export function ProfileCard() {
  const [profile, setProfile] = useState<GithubProfile | null>(null)

  async function fetchGithubProfile() {
    const response = await api.get('/users/thauanyAA')
    setProfile(response.data)
  }

  useEffect(() => {
    fetchGithubProfile()
  }, [])

  if (!profile) return null

  return (
    <ProfileContainer>
      <Avatar src={profile.avatar_url} alt={profile.name} />
      <Info>
        <Header>
          <h2>{profile.name}</h2>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            GITHUB <GithubLogo size={18} />
          </a>
        </Header>
        <p>{profile.bio}</p>
        <Footer>
          <span>
            <GithubLogo weight="fill" size={18} /> {profile.login}
          </span>
          {profile.company && (
            <span>
              <Buildings size={18} /> {profile.company}
            </span>
          )}
          <span>
            <Users size={18} /> {profile.followers} seguidores
          </span>
        </Footer>
      </Info>
    </ProfileContainer>
  )
}