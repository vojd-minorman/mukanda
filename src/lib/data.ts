export type Document = {
  id: number;
  title: string;
  type: string;
  category: string;
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
  { id: 'politics', name: 'Politique' },
  { id: 'environment', name: 'Environnement' },
  { id: 'technology', name: 'Technologie' },
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
    category: "book",
    author: "Jean Dupont",
    country: "Cameroun",
    genre: ["Histoire", "Culture"],
    isbn: "978-1234567890",
    date: "2022-01-15"
  },
  {
    id: 2,
    title: "Festival des Arts de Libreville",
    type: "Événement",
    category: "event",
    date: "2023-07-10",
    country: "Gabon",
    genre: ["Art", "Culture"]
  },
  {
    id: 3,
    title: "Revue Économique du Congo",
    type: "Périodique",
    category: "periodical",
    country: "Congo",
    genre: ["Économie"],
    issn: "1234-5678",
    date: "2023-03-01"
  },
  {
    id: 4,
    title: "Les Traditions Orales du Tchad",
    type: "Livre",
    category: "book",
    author: "Marie Kouassi",
    country: "Tchad",
    genre: ["Tradition", "Culture"],
    isbn: "978-0987654321",
    date: "2021-11-30"
  },
  {
    id: 5,
    title: "Cinéma Centrafricain: Rétrospective",
    type: "Film",
    category: "film",
    director: "Paul Biya",
    country: "République centrafricaine",
    genre: ["Culture", "Art"],
    date: "2022-09-05"
  },
  {
    id: 6,
    title: "L'Art Contemporain en Guinée Équatoriale",
    type: "Vidéo",
    category: "video",
    creator: "Elena Ondo",
    country: "Guinée équatoriale",
    genre: ["Art", "Culture"],
    date: "2023-02-20"
  },
  {
    id: 7,
    title: "La Flore Médicinale du Bassin du Congo",
    type: "Livre",
    category: "book",
    author: "Dr. Léopold Senghor",
    country: "Congo",
    genre: ["Science", "Tradition"],
    isbn: "978-1122334455",
    date: "2022-06-12"
  },
  {
    id: 8,
    title: "Poèmes de la Savane",
    type: "Livre",
    category: "book",
    author: "Aminata Sow Fall",
    country: "Tchad",
    genre: ["Littérature"],
    isbn: "978-5566778899",
    date: "2021-08-18"
  },
  {
    id: 9,
    title: "L'Impact du Changement Climatique en Afrique Centrale",
    type: "Livre",
    category: "book",
    author: "Pierre Nkurunziza",
    country: "Burundi",
    genre: ["Environnement", "Science"],
    isbn: "978-2233445566",
    date: "2023-04-22"
  },
  {
    id: 10,
    title: "Festival du Film Documentaire de Yaoundé",
    type: "Événement",
    category: "event",
    country: "Cameroun",
    genre: ["Culture", "Art"],
    date: "2023-11-15"
  },
  {
    id: 11,
    title: "Technologies Émergentes en Afrique",
    type: "Périodique",
    category: "periodical",
    country: "Gabon",
    genre: ["Technologie", "Économie"],
    issn: "2345-6789",
    date: "2023-01-01"
  },
  {
    id: 12,
    title: "La Politique Économique du Tchad",
    type: "Livre",
    category: "book",
    author: "Hassan Nour",
    country: "Tchad",
    genre: ["Politique", "Économie"],
    isbn: "978-3344556677",
    date: "2022-07-30"
  },
  {
    id: 13,
    title: "Les Danses Traditionnelles de la RCA",
    type: "Vidéo",
    category: "video",
    creator: "Faustin-Archange Touadéra",
    country: "République centrafricaine",
    genre: ["Culture", "Tradition"],
    date: "2021-12-05"
  },
  {
    id: 14,
    title: "L'Architecture Coloniale en Guinée Équatoriale",
    type: "Livre",
    category: "book",
    author: "Maria Nsue Angue",
    country: "Guinée équatoriale",
    genre: ["Histoire", "Art"],
    isbn: "978-4455667788",
    date: "2022-03-10"
  },
  {
    id: 15,
    title: "Symposium sur la Biodiversité du Bassin du Congo",
    type: "Événement",
    category: "event",
    country: "Congo",
    genre: ["Science", "Environnement"],
    date: "2023-09-20"
  },
  {
    id: 16,
    title: "L'Évolution de la Musique Gabonaise",
    type: "Film",
    category: "film",
    director: "André Raponda Walker",
    country: "Gabon",
    genre: ["Culture", "Art"],
    date: "2022-11-11"
  },
  {
    id: 17,
    title: "Revue des Politiques Agricoles en Afrique Centrale",
    type: "Périodique",
    category: "periodical",
    country: "Cameroun",
    genre: ["Économie", "Politique"],
    issn: "3456-7890",
    date: "2023-06-30"
  },
  {
    id: 18,
    title: "Les Contes du Fleuve Oubangui",
    type: "Livre",
    category: "book",
    author: "Étienne Goyémidé",
    country: "République centrafricaine",
    genre: ["Littérature", "Tradition"],
    isbn: "978-5566778899",
    date: "2021-10-15"
  },
  {
    id: 19,
    title: "L'Art Rupestre du Tchad",
    type: "Vidéo",
    category: "video",
    creator: "Mahamat Saleh Haroun",
    country: "Tchad",
    genre: ["Histoire", "Art"],
    date: "2022-05-25"
  },
  {
    id: 20,
    title: "Innovation Technologique dans le Secteur Pétrolier",
    type: "Livre",
    category: "book",
    author: "Théodore Obiang Nguema",
    country: "Guinée équatoriale",
    genre: ["Technologie", "Économie"],
    isbn: "978-6677889900",
    date: "2023-08-05"
  }
];

export const authors = Array.from(new Set(documents.map(doc => doc.author).filter(Boolean)));

