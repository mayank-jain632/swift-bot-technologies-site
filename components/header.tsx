"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Swift Bot Technologies Logo"
            width={40}
            height={40}
            className="rounded bg-primary"
          />
          <span className="text-xl font-bold text-gray-900">Swift Bot Technologies</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Get Started</Button>
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className="py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="mt-4">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

