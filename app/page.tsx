import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero Section with Apple-like styling */}
      <section className="relative h-screen flex items-center justify-center bg-[#FFFFFF]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
            Innovative Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
            Transform your business operations with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Products Section with Apple-like styling */}
      <section className="py-24 px-4 bg-[#FFFFFF]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 tracking-tight text-gray-900">
            Which product is right for you?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Mobile Computer",
                image: "/images/product/DT66_MobileComputer.png",
                description: "Empower your workforce with professional, simple, and reliable mobile computers.",
                link: "/products/mobile-computer"
              },
              {
                title: "Barcode Scanner",
                image: "/images/product/BarcodeScanner.png",
                description: "Experience professional, simple, and efficient scanning with our advanced technology.",
                link: "/products/barcode-scanner"
              },
              {
                title: "RFID Solutions",
                image: "/images/product/RFID_Solutions.png",
                description: "Enhance operations with professional, simple RFID technology for real-time tracking.",
                link: "/products/rfid-solutions"
              },
              {
                title: "EMM Solutions",
                image: "/images/product/EMM_Solutions.png",
                description: "Simplify device management with our Enterprise Mobility Management solutions.",
                link: "/products/emm-solutions"
              }
            ].map((product, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group 
                         transform transition-all duration-300 ease-in-out hover:translate-y-[-8px]"
              >
                <div className="h-48 w-48 relative mb-8 transition-transform duration-500 ease-in-out
                              group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight text-black">{product.title}</h3>
                <p className="text-black mb-8 font-light leading-relaxed">
                  {product.description}
                </p>
                <Link 
                  href={product.link}
                  className="inline-flex items-center justify-center text-sm font-medium text-blue-600 
                           hover:text-blue-800 transition-colors group-hover:underline"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 px-4 bg-[#F5F5F7]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 tracking-tight text-gray-900">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Warehouse Management",
                description: "Optimize inventory control, streamline picking processes, and enhance warehouse efficiency with our comprehensive solutions."
              },
              {
                title: "Logistics Tracking",
                description: "Real-time visibility and tracking solutions for your supply chain, ensuring seamless delivery operations."
              },
              {
                title: "Retail Payment",
                description: "Secure and efficient payment solutions for retail environments, enhancing customer experience."
              },
              {
                title: "Healthcare",
                description: "Improve patient care and safety with reliable tracking and data management solutions for healthcare facilities."
              }
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 tracking-tight text-gray-900">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

