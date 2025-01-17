import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { NavbarProps } from '@/lib/types'

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <h1 className="text-2xl font-bold">Mukanda</h1>
      <Button variant="outline" size="icon" onClick={toggleDarkMode}>
        {isDarkMode ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
      </Button>
    </nav>
  )
}

    