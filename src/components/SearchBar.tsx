'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { SearchBarProps } from '@/lib/types'

export default function SearchBar({ className, searchTerm, setSearchTerm }: SearchBarProps) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // La recherche se fait en temps réel, mais on pourrait ajouter d'autres actions ici si nécessaire
  }

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <Input
        type="text"
        placeholder="Rechercher par titre, ISBN ou ISSN..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pr-20 md:pr-32"
      />
      <Button type="submit" className="absolute right-0 top-0 bottom-0 rounded-l-none">
        <Search className="h-4 w-4 md:mr-2" />
        <span className="hidden md:inline">Rechercher</span>
      </Button>
    </form>
  )
}

