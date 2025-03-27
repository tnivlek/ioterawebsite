import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
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

      <main className="flex-1">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">About IOT-ERA</h1>
            
            <div className="space-y-12">
              <div className="prose prose-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">Our Story</h2>
                <p className="text-gray-600 text-justify leading-relaxed mb-6">
                  We are a professional retail and service integration company, established in 2018, focusing on retailing and distributing industrial handheld terminals and providing comprehensive technical support and after-sales services. We&apos;re committed to providing enterprise customers with efficient and stable industrial-grade equipment and solutions to help improve operational efficiency and data management capabilities.
                </p>
              </div>

              <div className="prose prose-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">Our Expertise</h2>
                <p className="text-gray-600 text-justify leading-relaxed mb-6">
                  With rich industry experience and professional knowledge, we represent multi-brand, multi-functional industrial handheld terminal devices and also provide customized solutions for different application scenarios, including warehouse management, logistics tracking, retail payment, medical and other fields. Our services cover product consulting, technical support, equipment maintenance and system integration to ensure that customers get the best user experience and operational benefits.
                </p>
              </div>

              <div className="prose prose-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">Our Commitment</h2>
                <p className="text-gray-600 text-justify leading-relaxed mb-6">
                  We focus on customer needs, uphold high quality and innovative spirit, and are committed to becoming a trustworthy partner in the industry, providing strong support for enterprises' digital transformation and automation operations.
                </p>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                We&apos;re dedicated to providing cutting-edge technology solutions that empower businesses to achieve greater efficiency and success in their operations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

