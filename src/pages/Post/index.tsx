import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostContainer, PostHeader, PostContent } from './styles'
import { ArrowLeft, Calendar, ChatCircle, GithubLogo } from 'phosphor-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

interface PostData {
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const { issueNumber } = useParams()
  const [post, setPost] = useState<PostData | null>(null)

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(`/repos/thauanyAA/github-blog/issues/${issueNumber}`)
      setPost(response.data)
    }

    fetchPost()
  }, [issueNumber])

  if (!post) return null

  const formattedDate = format(new Date(post.created_at), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  })

  return (
    <PostContainer>
      <PostHeader>
        <nav>
          <Link to="/">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <a href={post.html_url} target="_blank" rel="noreferrer">
            Ver no GitHub <GithubLogo size={16} />
          </a>
        </nav>

        <h1>{post.title}</h1>

        <footer>
          <span><GithubLogo size={18} /> {post.user.login}</span>
          <span><Calendar size={18} /> {formattedDate}</span>
          <span><ChatCircle size={18} /> {post.comments} comentários</span>
        </footer>
      </PostHeader>

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}