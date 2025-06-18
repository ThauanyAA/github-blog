import { HomeContainer, PostList } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <PostList>
        <article>
          <h2>Post Title 1</h2>
          <p>Post excerpt 1...</p>
        </article>
        <article>
          <h2>Post Title 2</h2>
          <p>Post excerpt 2...</p>
        </article>
        <article>
          <h2>Post Title 3</h2>
          <p>Post excerpt 3...</p>
        </article>
      </PostList>
    </HomeContainer>
  );
}