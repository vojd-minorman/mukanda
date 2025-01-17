import { Document, Category, Genre, Country } from './data'

export interface DocumentGridProps {
  searchTerm: string;
  selectedCategories: string[];
  selectedGenres: string[];
  selectedCountries: string[];
  selectedAuthors: string[];
  sortBy: string;
}

export interface SidebarProps {
  className?: string;
  selectedCategories: string[];
  selectedGenres: string[];
  selectedCountries: string[];
  selectedAuthors: string[];
  onCategoryChange: (categoryId: string) => void;
  onGenreChange: (genreId: string) => void;
  onCountryChange: (countryId: string) => void;
  onAuthorChange: (author: string) => void;
}

export interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface SearchBarProps {
  className?: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface SortOptionsProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

