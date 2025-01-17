import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Checkbox } from '@/components/ui/checkbox'
import { categories, genres, countries, authors } from '@/lib/data'
import { SidebarProps } from '@/lib/types'

interface MobileFilterModalProps extends SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileFilterModal({
  isOpen,
  onClose,
  selectedCategories,
  selectedGenres,
  selectedCountries,
  selectedAuthors,
  onCategoryChange,
  onGenreChange,
  onCountryChange,
  onAuthorChange
}: MobileFilterModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filtres</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Catégories</h2>
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2 checkbox-container">
                  <Checkbox 
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => onCategoryChange(category.id)}
                  />
                  <label htmlFor={`category-${category.id}`}>{category.name}</label>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Genres</h2>
              {genres.map((genre) => (
                <div key={genre.id} className="flex items-center space-x-2 checkbox-container">
                  <Checkbox 
                    id={`genre-${genre.id}`}
                    checked={selectedGenres.includes(genre.id)}
                    onCheckedChange={() => onGenreChange(genre.id)}
                  />
                  <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Pays</h2>
              {countries.map((country) => (
                <div key={country.id} className="flex items-center space-x-2 checkbox-container">
                  <Checkbox 
                    id={`country-${country.id}`}
                    checked={selectedCountries.includes(country.id)}
                    onCheckedChange={() => onCountryChange(country.id)}
                  />
                  <label htmlFor={`country-${country.id}`}>{country.name}</label>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Auteurs</h2>
              {authors.filter((author): author is string => typeof author === 'string').map((author) => (
                <div key={author} className="flex items-center space-x-2 checkbox-container">
                  <Checkbox 
                    id={`author-${author}`}
                    checked={selectedAuthors.includes(author)}
                    onCheckedChange={() => onAuthorChange(author)}
                  />
                  <label htmlFor={`author-${author}`}>{author}</label>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button onClick={onClose}>Confirmer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

