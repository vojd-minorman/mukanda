import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SortOptionsProps } from '@/lib/types'

export default function SortOptions({ sortBy, onSortChange }: SortOptionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <span className="text-sm font-medium whitespace-nowrap">Afficher par :</span>
      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="title_asc">Titre (A-Z)</SelectItem>
          <SelectItem value="title_desc">Titre (Z-A)</SelectItem>
          <SelectItem value="date_asc">Date d'ajout (Ancien-Récent)</SelectItem>
          <SelectItem value="date_desc">Date d'ajout (Récent-Ancien)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

