import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { documents, categories, genres, countries } from '@/lib/data'
import { DocumentGridProps } from '@/lib/types'
import { useState } from 'react'

export default function DocumentGrid({ 
  searchTerm, 
  selectedCategories, 
  selectedGenres, 
  selectedCountries,
  selectedAuthors,
  sortBy
}: DocumentGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (doc.isbn?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
      (doc.issn?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);

    const matchesCategory = 
      selectedCategories.length === 0 || 
      selectedCategories.includes(doc.category);

    const matchesGenre = 
      selectedGenres.length === 0 || 
      doc.genre.some(g => selectedGenres.includes(genres.find(genre => genre.name === g)?.id ?? ''));

    const matchesCountry = 
      selectedCountries.length === 0 || 
      selectedCountries.includes(countries.find(c => c.name === doc.country)?.id ?? '');

    const matchesAuthor =
      selectedAuthors.length === 0 ||
      (doc.author !== undefined && selectedAuthors.includes(doc.author));

    return matchesSearch && matchesCategory && matchesGenre && matchesCountry && matchesAuthor;
  });

  // Tri des documents
  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    switch (sortBy) {
      case 'title_asc':
        return a.title.localeCompare(b.title);
      case 'title_desc':
        return b.title.localeCompare(a.title);
      case 'date_asc':
        return new Date(a.date ?? '').getTime() - new Date(b.date ?? '').getTime();
      case 'date_desc':
        return new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime();
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedDocuments.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDocuments = sortedDocuments.slice(startIndex, endIndex)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentDocuments.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <CardTitle>{doc.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Type:</strong> {doc.type}</p>
              <p><strong>Genre:</strong> {doc.genre.join(', ')}</p>
              {doc.author && <p><strong>Auteur:</strong> {doc.author}</p>}
              {doc.date && <p><strong>Date:</strong> {doc.date}</p>}
              {doc.issn && <p><strong>ISSN:</strong> {doc.issn}</p>}
              {doc.isbn && <p><strong>ISBN:</strong> {doc.isbn}</p>}
              {doc.director && <p><strong>Réalisateur:</strong> {doc.director}</p>}
              {doc.creator && <p><strong>Créateur:</strong> {doc.creator}</p>}
            </CardContent>
            <CardFooter>
              <Badge>{doc.country}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p>Affichage de {startIndex + 1}-{Math.min(endIndex, sortedDocuments.length)} sur {sortedDocuments.length} documents</p>
        <div className="flex gap-2">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

