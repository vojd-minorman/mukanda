import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { documents } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function DocumentPage({ params }: { params: { id: string } }) {
  const document = documents.find(doc => doc.id === parseInt(params.id))

  if (!document) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" passHref>
        <Button variant="outline" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à la liste
        </Button>
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={document.imageUrl || "/placeholder.svg"}
            alt={document.title}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full h-[300px]"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{document.title}</h1>
          <div className="space-y-2 mb-4">
            <p><strong>Type:</strong> {document.type}</p>
            <p><strong>Catégorie:</strong> {document.category}</p>
            {document.author && <p><strong>Auteur:</strong> {document.author}</p>}
            {document.director && <p><strong>Réalisateur:</strong> {document.director}</p>}
            {document.creator && <p><strong>Créateur:</strong> {document.creator}</p>}
            <p><strong>Pays:</strong> {document.country}</p>
            <p><strong>Genre:</strong> {document.genre.join(', ')}</p>
            {document.date && <p><strong>Date:</strong> {document.date}</p>}
            {document.isbn && <p><strong>ISBN:</strong> {document.isbn}</p>}
            {document.issn && <p><strong>ISSN:</strong> {document.issn}</p>}
          </div>
          <div className="mb-4">
            {document.genre.map(g => (
              <Badge key={g} className="mr-2 mb-2">{g}</Badge>
            ))}
          </div>
          <p className="text-lg mb-4">{document.description}</p>
        </div>
      </div>
    </div>
  )
}

