import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="container mx-auto py-4 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/images/page/IOTERAOutline.png" 
            alt="IOT-ERA Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto mix-blend-multiply" 
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          HOME
        </Link>
        <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          PRODUCTS
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          ABOUT
        </Link>
        <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          CONTACT
        </Link>
      </nav>
    </header>
  )
}

