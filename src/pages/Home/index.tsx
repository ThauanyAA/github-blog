import { useEffect, useState } from "react";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchInput } from "../../components/SearchInput";
import { HomeContainer, NoResults, PostList } from "./styles";
import { api } from "../../lib/axios";
import { SmileySad } from "phosphor-react";
import { PostCard } from "../../components/PostCard";

interface Post {
  id: number
  title: string
  body: string
  created_at: string
  number: number
}
export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:ThauanyAA/github-blog`,
      },
    })

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput
        onSearch={() => {}}
        postsLength={posts.length} 
      />
      {posts.length > 0 ? (
        <PostList>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostList>
      ) : (
        <NoResults>
          <SmileySad size={48} weight="light" />
          <p>Nenhuma publicação encontrada</p>
          <span>Tente refinar sua busca ou verifique se há issues no repositório.</span>
        </NoResults>
      )}
    </HomeContainer>
  );
}