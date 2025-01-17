export type Document = {
    id: number;
    title: string;
    type: string;
    author?: string;
    director?: string;
    creator?: string;
    country: string;
    genre: string[];
    date?: string;
    isbn?: string;
    issn?: string;
  };
  
  export type Category = {
    id: string;
    name: string;
  };
  
  export type Genre = {
    id: string;
    name: string;
  };
  
  export type Country = {
    id: string;
    name: string;
  };
  
  export const categories: Category[] = [
    { id: 'book', name: 'Livres' },
    { id: 'event', name: 'Événements' },
    { id: 'periodical', name: 'Périodiques' },
    { id: 'film', name: 'Films' },
    { id: 'video', name: 'Vidéos' },
  ];
  
  export const genres: Genre[] = [
    { id: 'history', name: 'Histoire' },
    { id: 'culture', name: 'Culture' },
    { id: 'economy', name: 'Économie' },
    { id: 'tradition', name: 'Tradition' },
    { id: 'art', name: 'Art' },
    { id: 'literature', name: 'Littérature' },
    { id: 'science', name: 'Science' },
  ];
  
  export const countries: Country[] = [
    { id: 'cameroon', name: 'Cameroun' },
    { id: 'gabon', name: 'Gabon' },
    { id: 'congo', name: 'Congo' },
    { id: 'chad', name: 'Tchad' },
    { id: 'car', name: 'République centrafricaine' },
    { id: 'equatorial-guinea', name: 'Guinée équatoriale' },
  ];
  
  export const documents: Document[] = [
    {
      id: 1,
      title: "L'Afrique Centrale: Histoire et Culture",
      type: "Livre",
      author: "Jean Dupont",
      country: "Cameroun",
      genre: ["Histoire", "Culture"],
      isbn: "978-1234567890"
    },
    {
      id: 2,
      title: "Festival des Arts de Libreville",
      type: "Événement",
      date: "2023",
      country: "Gabon",
      genre: ["Art", "Culture"]
    },
    {
      id: 3,
      title: "Revue Économique du Congo",
      type: "Périodique",
      country: "Congo",
      genre: ["Économie"],
      issn: "1234-5678"
    },
    {
      id: 4,
      title: "Les Traditions Orales du Tchad",
      type: "Livre",
      author: "Marie Kouassi",
      country: "Tchad",
      genre: ["Tradition", "Culture"],
      isbn: "978-0987654321"
    },
    {
      id: 5,
      title: "Cinéma Centrafricain: Rétrospective",
      type: "Film",
      director: "Paul Biya",
      country: "République centrafricaine",
      genre: ["Culture", "Art"]
    },
    {
      id: 6,
      title: "L'Art Contemporain en Guinée Équatoriale",
      type: "Vidéo",
      creator: "Elena Ondo",
      country: "Guinée équatoriale",
      genre: ["Art", "Culture"]
    },
    {
      id: 7,
      title: "La Flore Médicinale du Bassin du Congo",
      type: "Livre",
      author: "Dr. Léopold Senghor",
      country: "Congo",
      genre: ["Science", "Tradition"],
      isbn: "978-1122334455"
    },
    {
      id: 8,
      title: "Poèmes de la Savane",
      type: "Livre",
      author: "Aminata Sow Fall",
      country: "Tchad",
      genre: ["Littérature"],
      isbn: "978-5566778899"
    }
  ];
  
  export const authors = Array.from(new Set(documents.map(doc => doc.author).filter(Boolean)));
  
  