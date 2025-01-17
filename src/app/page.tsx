'use client'

import { useState, useEffect, useRef } from 'react'
import SearchBar from '@/components/SearchBar'
import Sidebar from '@/components/Sidebar'
import DocumentGrid from '@/components/DocumentGrid'
import Navbar from '@/components/Navbar'
import SortOptions from '@/components/SortOptions'
import MobileFilterModal from '@/components/MobileFilterModal'
import { Button } from '@/components/ui/button'
import { Filter, Search } from 'lucide-react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('title_asc')
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [isHeaderFixed, setIsHeaderFixed] = useState(false)

  const searchBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const searchBarPosition = searchBarRef.current?.getBoundingClientRect().bottom ?? 0
      setIsHeaderFixed(searchBarPosition < 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleGenreChange = (genreId: string) => {
    setSelectedGenres(prev => 
      prev.includes(genreId) 
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    )
  }

  const handleCountryChange = (countryId: string) => {
    setSelectedCountries(prev => 
      prev.includes(countryId) 
        ? prev.filter(id => id !== countryId)
        : [...prev, countryId]
    )
  }

  const handleAuthorChange = (author: string) => {
    setSelectedAuthors(prev => 
      prev.includes(author) 
        ? prev.filter(a => a !== author)
        : [...prev, author]
    )
  }

  const scrollToSearch = () => {
    searchBarRef.current?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      const inputElement = searchBarRef.current?.querySelector('input')
      if (inputElement instanceof HTMLInputElement) {
        inputElement.focus()
      }
    }, 500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar 
          className="hidden md:block w-64 p-4 bg-background border-r"
          selectedCategories={selectedCategories}
          selectedGenres={selectedGenres}
          selectedCountries={selectedCountries}
          selectedAuthors={selectedAuthors}
          onCategoryChange={handleCategoryChange}
          onGenreChange={handleGenreChange}
          onCountryChange={handleCountryChange}
          onAuthorChange={handleAuthorChange}
        />
        <main className="flex-1 p-4">
          <div className="flex flex-col gap-4 mb-4" ref={searchBarRef}>
            <SearchBar className="w-full" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <div className="w-full sm:w-auto flex gap-2">
                <Button 
                  className="flex-1 sm:flex-initial md:hidden"
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                </Button>
              </div>
              <div className="w-full sm:w-auto flex justify-end">
                <SortOptions sortBy={sortBy} onSortChange={setSortBy} />
              </div>
            </div>
          </div>
          <DocumentGrid 
            searchTerm={searchTerm}
            selectedCategories={selectedCategories}
            selectedGenres={selectedGenres}
            selectedCountries={selectedCountries}
            selectedAuthors={selectedAuthors}
            sortBy={sortBy}
          />
        </main>
      </div>
      <MobileFilterModal
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        selectedCategories={selectedCategories}
        selectedGenres={selectedGenres}
        selectedCountries={selectedCountries}
        selectedAuthors={selectedAuthors}
        onCategoryChange={handleCategoryChange}
        onGenreChange={handleGenreChange}
        onCountryChange={handleCountryChange}
        onAuthorChange={handleAuthorChange}
      />
      {isHeaderFixed && (
        <div className="fixed bottom-4 right-4 flex gap-2 md:hidden">
          <Button onClick={scrollToSearch} size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button onClick={() => setIsMobileFilterOpen(true)} size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

