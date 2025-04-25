function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Mawutech Solutions</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-xl">Empowering African businesses, churches, and startups with modern digital solutions.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">Let’s Work Together</a>
          <a href="#portfolio" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">View Portfolio</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Mawutech Solutions is a purpose-driven web agency founded by Mawuse Amedor, focused on delivering modern, responsive websites for African churches, businesses, and entrepreneurs. Our work is rooted in faith, excellence, and innovation.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {["Website Design & Development", "Church & Ministry Web Packages", "Small Business Sites", "Website Maintenance & Hosting Setup", "SEO & Email Setup", "WhatsApp Integration"].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {["Grace Chapel Ministries", "GreenHarvest Produce", "SediCare Naturals"].map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{project}</h3>
              <p className="text-sm text-gray-600">Demo website for {project}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
        <p className="mb-6 text-lg">Got a project in mind? We’d love to hear from you.</p>
        <a href="https://wa.me/233XXXXXXXXX" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition">
          Message Us on WhatsApp
        </a>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mawutech Solutions. All rights reserved.
      </footer>
    </div>
  );
}

export default Home