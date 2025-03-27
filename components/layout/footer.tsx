import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
          <span className="text-gray-300">—</span>
          <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
            Terms & Conditions
          </Link>
        </div>
        <div className="flex items-center">
          <Image 
            src="/images/page/IoteraLogoChoped.png" 
            alt="IOT-ERA Logo" 
            width={100} 
            height={30} 
            className="h-6 w-auto" 
          />
          <p className="text-sm text-gray-600 ml-4">
            Copyright © 2025 Iotera Technologies Limited - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
} 