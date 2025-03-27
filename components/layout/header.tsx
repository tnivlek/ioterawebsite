"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-[#FFFFFF]/80 backdrop-blur-md z-50 border-b border-[#FFFFFF]/50">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-center space-x-12">
          <Link href="/">
            <Image 
              src="/images/page/IoteraLogoChoped.png" 
              alt="IOT-ERA Logo" 
              width={145} 
              height={40} 
              className="h-[40px] w-auto" 
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-[15px] transition-colors duration-200 ${
                  pathname === item.path 
                    ? "text-black" 
                    : "text-[#666666] hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
} 