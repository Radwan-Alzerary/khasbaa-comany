"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-10 bg-white bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            خصباء الخير
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-primary transition-colors">
              المشاريع
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              عن الشركة
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
              اتصل بنا
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-primary transition-colors">
              المشاريع
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              عن الشركة
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
              اتصل بنا
            </Link>
            <Button asChild>
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

