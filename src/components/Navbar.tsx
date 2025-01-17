'use client'

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <h1 className="text-2xl font-bold">Mukanda</h1>
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
      </Button>
    </nav>
  )
}

