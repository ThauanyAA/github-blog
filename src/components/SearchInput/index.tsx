import { useState, type FormEvent } from 'react'
import { SearchContainer } from './styles'

interface SearchInputProps {
  onSearch: (query: string) => void
  postsLength: number
}

export function SearchInput({ onSearch, postsLength }: SearchInputProps) {
  const [query, setQuery] = useState('')

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <SearchContainer onSubmit={handleSearch}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </SearchContainer>
  )
}
