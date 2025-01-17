import { ScrollArea } from '@/components/ui/scroll-area'
import { Checkbox } from '@/components/ui/checkbox'
import { categories, genres, countries, authors } from '@/lib/data'
import { SidebarProps } from '@/lib/types'

export default function Sidebar({ 
  className,
  selectedCategories,
  selectedGenres,
  selectedCountries,
  selectedAuthors,
  onCategoryChange,
  onGenreChange,
  onCountryChange,
  onAuthorChange
}: SidebarProps) {
  return (
    <aside className={className}>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4 space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Catégories</h2>
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`category-${category.id}`}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => onCategoryChange(category.id)}
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Genres</h2>
            {genres.map((genre) => (
              <div key={genre.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`genre-${genre.id}`}
                  checked={selectedGenres.includes(genre.id)}
                  onCheckedChange={() => onGenreChange(genre.id)}
                />
                <label
                  htmlFor={`genre-${genre.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {genre.name}
                </label>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Pays</h2>
            {countries.map((country) => (
              <div key={country.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`country-${country.id}`}
                  checked={selectedCountries.includes(country.id)}
                  onCheckedChange={() => onCountryChange(country.id)}
                />
                <label
                  htmlFor={`country-${country.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {country.name}
                </label>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Auteurs</h2>
            {authors.filter((author): author is string => typeof author === 'string').map((author) => (
              <div key={author} className="flex items-center space-x-2">
                <Checkbox 
                  id={`author-${author}`}
                  checked={selectedAuthors.includes(author)}
                  onCheckedChange={() => onAuthorChange(author)}
                />
                <label
                  htmlFor={`author-${author}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {author}
                </label>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}

