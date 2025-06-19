import { useEffect, useState } from 'react'
import { SearchContainer } from './styles'

interface SearchInputProps {
  onSearch: (query: string) => void
  postsLength: number
}

export function SearchInput({ onSearch, postsLength }: SearchInputProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query)
    }, 500) // 500ms debounce

    return () => clearTimeout(timeoutId)
  }, [query, onSearch])

  return (
    <SearchContainer>
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
