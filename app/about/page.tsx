'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=elegant%20London%20fashion%20district%20street%20view%20with%20modern%20boutiques%2C%20sophisticated%20urban%20fashion%20environment%2C%20British%20fashion%20culture%2C%20luxury%20shopping%20area%2C%20contemporary%20London%20architecture%20with%20fashion%20stores%2C%20professional%20photography%2C%20clean%20aesthetic&width=1920&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Bucquin
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A London-based fashion brand crafting timeless elegance for the modern world
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in the heart of London, Bucquin represents the perfect fusion of British sophistication and contemporary design. Our journey began with a simple vision: to create fashion that transcends trends and speaks to the timeless elegance within every individual.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                From our London atelier, we carefully curate collections that embody quality, craftsmanship, and style. Each piece is designed with meticulous attention to detail, using only the finest materials sourced from around the world.
              </p>
              <p className="text-gray-600 text-lg">
                Today, Bucquin stands as a testament to British fashion excellence, serving discerning customers who appreciate quality, authenticity, and timeless style.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=elegant%20London%20fashion%20designer%20studio%20with%20premium%20fabrics%2C%20sophisticated%20tailoring%20workspace%2C%20British%20fashion%20atelier%20interior%2C%20luxury%20fashion%20design%20environment%2C%20professional%20fashion%20photography%2C%20clean%20minimalist%20aesthetic%20with%20premium%20materials&width=600&height=800&seq=studio&orientation=portrait"
                alt="Bucquin Design Studio"
                className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by our core principles that define who we are as a brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every stitch, every fabric choice, and every design decision to ensure our customers receive nothing but the best.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We believe in responsible fashion, using sustainable materials and ethical production practices to protect our planet for future generations.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to our London roots and British heritage, creating authentic pieces that reflect our unique perspective on modern fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who bring Bucquin's vision to life through their expertise and passion for fashion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20female%20fashion%20designer%20in%20modern%20London%20studio%2C%20British%20fashion%20creative%20director%2C%20sophisticated%20professional%20headshot%2C%20luxury%20fashion%20industry%20leader%2C%20contemporary%20business%20portrait%20photography&width=400&height=400&seq=designer1&orientation=squarish"
                  alt="Emma Richardson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Emma Richardson</h3>
              <p className="text-gray-500 mb-4">Creative Director</p>
              <p className="text-gray-600 text-sm">
                With over 15 years in London's fashion scene, Emma leads our creative vision with an eye for timeless elegance and modern sophistication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20distinguished%20male%20fashion%20designer%20in%20London%20atelier%2C%20British%20fashion%20industry%20executive%2C%20sophisticated%20professional%20headshot%2C%20luxury%20fashion%20brand%20leader%2C%20contemporary%20business%20portrait%20photography&width=400&height=400&seq=designer2&orientation=squarish"
                  alt="James Mitchell"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">James Mitchell</h3>
              <p className="text-gray-500 mb-4">Head of Design</p>
              <p className="text-gray-600 text-sm">
                James brings technical expertise and innovative thinking to every collection, ensuring each piece meets our exacting standards of quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20female%20fashion%20operations%20manager%20in%20London%20office%2C%20British%20fashion%20industry%20professional%2C%20sophisticated%20professional%20headshot%2C%20luxury%20fashion%20brand%20executive%2C%20contemporary%20business%20portrait%20photography&width=400&height=400&seq=designer3&orientation=squarish"
                  alt="Sarah Thompson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Sarah Thompson</h3>
              <p className="text-gray-500 mb-4">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Sarah ensures our commitment to sustainability and ethical practices while maintaining the highest standards of production quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* London Heritage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=iconic%20London%20fashion%20district%20with%20historic%20buildings%20and%20modern%20boutiques%2C%20British%20fashion%20heritage%2C%20elegant%20London%20street%20with%20luxury%20fashion%20stores%2C%20sophisticated%20urban%20fashion%20environment%2C%20professional%20cityscape%20photography&width=600&height=800&seq=london&orientation=portrait"
                alt="London Fashion District"
                className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">London Heritage</h2>
              <p className="text-gray-600 text-lg mb-6">
                Located in the vibrant heart of London, our brand draws inspiration from the city's rich fashion heritage and contemporary cultural scene. From the historic tailoring traditions of Savile Row to the cutting-edge creativity of East London, we embrace the full spectrum of British fashion excellence.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our London location allows us to stay connected to the pulse of global fashion while maintaining our distinct British identity. We work with local artisans and suppliers whenever possible, supporting the local fashion ecosystem that has made London a global style capital.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Founded</h4>
                  <p className="text-gray-600">2018</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Location</h4>
                  <p className="text-gray-600">London, UK</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Collections</h4>
                  <p className="text-gray-600">4 per year</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Team</h4>
                  <p className="text-gray-600">25+ professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Bucquin
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our latest collection and become part of the Bucquin story. Visit our London showroom or explore our complete range online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer">
              Shop Collection
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer">
              Visit Showroom
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}