import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

interface PostCardProps {
  post: {
    number: number
    title: string
    body: string
    created_at: string
  }
}

export function PostCard({ post }: PostCardProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(new Date(post.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Link to={`/posts/${post.number}`}>
      <PostCardContainer>
        <header>
          <h4>{post.title}</h4>
          <span>{publishedDateRelativeToNow}</span>
        </header>
        <p>{post.body.slice(0, 180)}...</p>
      </PostCardContainer>
    </Link>
  )
}
