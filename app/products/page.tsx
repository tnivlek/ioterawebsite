import Link from "next/link"
import Image from "next/image"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export default function ProductsPage() {
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

      <main className="flex-1 pt-16">
        {/* Products Introduction */}
        <section className="py-20 px-4 bg-[#F5F5F7]">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-black">
              Our Products
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed">
              Discover our range of professional solutions designed to enhance your business operations and improve efficiency.
            </p>
          </div>
        </section>

        {/* Mobile Computer Section */}
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-12">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-black">
                  Mobile Computer
                </h1>
                <p className="text-xl md:text-2xl text-black mb-16 max-w-3xl mx-auto">
                  Enterprise-grade mobile computer with advanced scanning capabilities
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/images/product/DT66_MobileComputer.png"
                      alt="Mobile Computer"
                      width={800}
                      height={1067}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 text-left">
                  <p className="text-lg text-black mb-8 leading-relaxed">
                    Our enterprise-grade mobile computers combine durability with advanced functionality. 
                    Perfect for warehouse management, logistics, and retail operations.
                  </p>
                  <Link 
                    href="/products/mobile-computer"
                  >
                    <ShimmerButton className="shadow-2xl">
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Learn More
                      </span>
                    </ShimmerButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Barcode Scanner Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative w-full h-[400px] transform transition-all duration-500 hover:scale-105">
                  <Image
                    src="/images/product/BarcodeScanner.png"
                    alt="Barcode Scanner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-black">Barcode Scanner</h2>
                <p className="text-lg text-black mb-8 leading-relaxed">
                  Experience professional, simple, and efficient scanning with our advanced technology. Our barcode scanners provide fast and accurate data capture for streamlined operations.
                </p>
                <Link 
                  href="/products/barcode-scanner"
                >
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Learn More
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RFID Solutions Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative w-full h-[400px] transform transition-all duration-500 hover:scale-105">
                  <Image
                    src="/images/product/RFID_Solutions.png"
                    alt="RFID Solutions"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-black">RFID Solutions</h2>
                <p className="text-lg text-black mb-8 leading-relaxed">
                  Enhance operations with professional, simple RFID technology for real-time tracking. Our RFID solutions provide seamless asset tracking and inventory management capabilities.
                </p>
                <Link 
                  href="/products/rfid-solutions"
                >
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Learn More
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* EMM Solutions Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative w-full h-[400px] transform transition-all duration-500 hover:scale-105">
                  <Image
                    src="/images/product/EMM_Solutions.png"
                    alt="EMM Solutions"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-black">EMM Solutions</h2>
                <p className="text-lg text-black mb-8 leading-relaxed">
                  Simplify device management with our Enterprise Mobility Management solutions. Our EMM platform provides comprehensive control and security for your mobile device fleet.
                </p>
                <Link 
                  href="/products/emm-solutions"
                >
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Learn More
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

