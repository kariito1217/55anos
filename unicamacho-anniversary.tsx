"use client"

import { useState, useEffect } from "react"


const chunkArray = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

export default function UnicamachoAnniversary() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])


const ReelsTimeLine = [
    {
      id: 1,
      image: "/1.jpg",
      url: "https://www.instagram.com/p/DLVt7lLyT1J/",
      title: "1932",
      type: "reel",
    },
    {
      id: 2,
      image: "/2.jpg",
      url: "https://www.instagram.com/p/DLYSFB4yO-j/",
      title: "1945",
      type: "video",
    },
    {
      id: 3,
      image: "/3.jpg",
      url: "https://www.instagram.com/p/DLa1BI_Senm/",
      title: "1970",
      type: "reel",
    },
    {
      id: 4,
      image: "/4.jpg",
      url: "https://www.instagram.com/p/DL2ZDhBOGsb/",
      title: "Los años 70",
      type: "video",
    },
    {
      id: 5,
      image: "/5.jpg",
      url: "https://www.instagram.com/p/DL7rkf_OFpl/",
      title: "1972",
      type: "reel",
    },
  ]

   const timeline = [
    {
      year: "2004",
      event: "Primera Promoción Universitaria",
      description:
        "Se gradúa la primera promoción, a nivel universitario, en administración, mediante convenio con la Universidad Francisco de Paula Santander.",
    },
    {
      year: "2006",
      event: "Creación de la Facultad de Ingenierías",
      description:
        "Se fusionan las Facultades de Electrónica y Sistemas. Se crea la Facultad de Ingenierías, soportada en un decano y directores para los programas de sistemas, electrónica, mecatrónica e instrumentación.",
    },
    {
      year: "2007",
      event: "Cambio de Carácter Académico",
      description:
        "El Ministerio de Educación mediante resolución 963, otorga el cambio de carácter académico a Institución Universitaria Antonio José Camacho.",
    },
    {
      year: "2008",
      event: "Adquisición Sede Sur",
      description:
        "Se adquiere el lote que luego se llamará 'sede sur' y donde se tiene proyectada la construcción del 'campus universitario'.",
    },
    {
      year: "2009",
      event: "Nuevos Programas Técnicos",
      description:
        "Aprueban los programas técnico profesional en fabricación de papel y tecnología en producción industrial.",
    },
  ]


  const instagramPosts = [
    {
      id: 1,
      image: "/instagram-1.png",
      url: "https://www.instagram.com/p/DG6Y_VSpE-G/",
      title: "Mensaje de nuestros estudiantes",
      type: "reel",
    },
    {
      id: 2,
      image: "/instagram-2.png",
      url: "https://www.instagram.com/p/DHGtUjoAh4m/",
      title: "Historia del Instituto Tecnológico",
      type: "video",
    },
    {
      id: 3,
      image: "/instagram-3.png",
      url: "https://www.instagram.com/p/DIUzDrwpH6J/",
      title: "Sueños de nuestros becarios",
      type: "reel",
    },
    {
      id: 4,
      image: "/instagram-4.png",
      url: "https://www.instagram.com/p/DI4HXFHpiNV/",
      title: "Visión de nuestros profesores",
      type: "entrevista",
    },
    {
      id: 5,
      image: "/instagram-5.png",
      url: "https://www.instagram.com/p/DJkdGhPJuqX/",
      title: "Celebración estudiantil",
      type: "video",
    },
    {
      id: 6,
      image: "/instagram-6.png",
      url: "https://www.instagram.com/p/DKzhtqkAZqe/",
      title: "Gracias Unicamacho",
      type: "reel",
    },
    {
      id: 7,
      image: "/instagram-7.png",
      url: "https://www.instagram.com/p/DKIwwkFpCGL/",
      title: "Avances Facultad de Ingeniería",
      type: "foto",
    },
  ]


  const openInstagramPost = (url: string) => {
    window.open(url, "_blank")
  }

  const openModal = (postId: number) => {
    setSelectedPost(postId)
  }

  const closeModal = () => {
    setSelectedPost(null)
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#002C51]">
          <img
            src="/bannerPrincipal.jpg"
            alt="Banner 55 años UNICAMACHO"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002C51]/10 to-transparent"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/60 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-2xl transform rotate-12 animate-pulse animate-bounce"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400/20 rounded-xl transform -rotate-12 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-blue-400/20 rounded-2xl transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-20 w-10 h-10 bg-white/5 rounded-xl animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-yellow-400/20 rounded-full animate-pulse"></div>
        </div>

        {/* Content Overlay */}
        <div
          className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/90 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Animated Border Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002C51] mb-4">Nuestros Logros</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En Unicamacho cada logro cuenta, cada persona deja huella y cada historia marca la diferencia en este
              camino de construcción y formación aaaaaa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logro 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3B84CE] rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002C51] mb-3">
                      💻📚 Desarrollo del modelo de Smart Campus
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tecnologías que mejoran la experiencia educativa, como aulas virtuales, plataformas digitales y
                      laboratorios modernos.
                    </p>
                  </div>
                </div>
                <div className="mt-6 h-1 bg-gradient-to-r from-[#002C51] to-[#3B84CE] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Logro 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B4B85] rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002C51] mb-3">👩🏻‍🎓🏫 Reconocimiento del MEN</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Somos una institución que promueve la equidad educativa y el acceso a la educación superior en
                      poblaciones vulnerables.
                    </p>
                  </div>
                </div>
                <div className="mt-6 h-1 bg-gradient-to-r from-[#002C51] to-[#3B84CE] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Logro 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3B84CE] rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002C51] mb-3">
                      👩🏻‍🔬🔬 Fortalecimiento de la investigación
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Grupos de investigación categorizados por Minciencias, fomentando la generación de conocimiento
                      desde la región.
                    </p>
                  </div>
                </div>
                <div className="mt-6 h-1 bg-gradient-to-r from-[#002C51] to-[#3B84CE] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Logro 4 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B4B85] rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002C51] mb-3">🏢🏙️ Modernización de sus sedes</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Renovación en espacios físicos, garantizando entornos seguros y modernos para la formación
                      académica.
                    </p>
                  </div>
                </div>
                <div className="mt-6 h-1 bg-gradient-to-r from-[#002C51] to-[#3B84CE] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


  {/* Timeline Section */}
  <section className="py-20 bg-[#002C51] relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl"></div>
          ))}
        </div>
      </div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Datos Importantes de Nuestra Historia</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Momentos clave que han marcado el crecimiento y desarrollo de nuestra institución a lo largo de los años
        </p>
      </div>


       {/* Reels Grid inside Timeline AQUI */}

  {/* Timeline Reels Section */}
<div className="mt-20 mb-20">
  {/* Móvil: Scroll horizontal */}
  <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-2">
    {ReelsTimeLine.map((post) => (
      <a
        key={post.id}
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group cursor-pointer relative w-[200px] flex-shrink-0 snap-center"
      >
        <div
          className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          style={{ aspectRatio: "9/16" }}
        >
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-semibold text-sm mb-1">{post.title}</h3>
              <span className="text-white/80 text-xs capitalize">{post.type}</span>
            </div>
          </div>

          {/* Play Button */}
          {(post.type === "reel" || post.type === "video" || post.type === "entrevista") && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
          )}
        </div>
      </a>
    ))}
  </div>

  {/* Escritorio: Grid en grupos */}
  <div className="hidden md:block">
    {chunkArray(ReelsTimeLine, 4).map((group, i) => (
      <div
        key={i}
        className={`grid gap-6 justify-items-center mb-6 ${
          group.length === 1
            ? "grid-cols-1"
            : group.length === 2
            ? "grid-cols-2"
            : group.length === 3
            ? "grid-cols-3"
            : "grid-cols-4"
        }`}
      >
        {group.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer relative max-w-[240px] w-full"
          >
            <div
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full"
              style={{ aspectRatio: "9/16" }}
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{post.title}</h3>
                  <span className="text-white/80 text-xs capitalize">{post.type}</span>
                </div>
              </div>

              {/* Play Button */}
              {(post.type === "reel" || post.type === "video" || post.type === "entrevista") && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    ))}
  </div>
</div>


{/* Aqui */}


      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3B84CE] to-[#1B4B85] rounded-full"></div>

        {/* Timeline items */}
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-[#3B84CE] text-2xl font-bold mb-2">{item.year}</div>
                <h3 className="text-white text-xl font-semibold mb-2">{item.event}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#3B84CE] rounded-full border-4 border-[#002C51] shadow-lg"></div>
          </div>
        ))}
      </div>

    </div>
  </section>


        {/* Instagram Mosaic Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#002C51] mb-4">Asi vivimos nuestros 55 años</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Los recuerdos más valiosos de nuestra trayectoria los hemos construido contigo, que haces parte de esta gran familia. Gracias por acompañarnos en cada evento, por ser protagonista de nuestras actividades y por escribir con nosotros esta historia llena de pasión, crecimiento y transformación
              </p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {instagramPosts.map((post, index) => (
                <div key={post.id} className="group cursor-pointer relative">
                  <div
                    className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    style={{
                      aspectRatio: "9/16", // Todos los posts ahora tienen proporción de reel
                    }}
                  >
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-sm mb-1">{post.title}</h3>
                        <span className="text-white/80 text-xs capitalize">{post.type}</span>
                      </div>
                    </div>

                    {/* Play button for videos/reels */}
                    {(post.type === "reel" || post.type === "video" || post.type === "entrevista") && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    )}

                    {/* Instagram icon */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </div>

                  {/* Click handlers */}
                  <div
                    className="absolute inset-0 z-10"
                    onClick={() => openInstagramPost(post.url)}
                    onDoubleClick={() => openModal(post.id)}
                  ></div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => window.open("https://www.instagram.com/uniajc_/", "_blank")}
                className="bg-[#002C51] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#1B4B85] transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Ver más en Instagram
              </button>
            </div>
          </div>
        </section>

      {/* Podcast Section */}
      <section className="py-20 bg-[#002C51] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="grid grid-cols-8 gap-4 h-full">
              {[...Array(32)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Podcast 55 años - Memorias de un sueño</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              En este podcast te sumergirás en un viaje de historias que relatan los orígenes de Unicamacho desde su
              fundación en 1970.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Capítulo 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#3B84CE] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Capítulo 1</h3>
                  <div className="w-12 h-1 bg-[#3B84CE] rounded-full"></div>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Comenzamos un viaje fascinante a través de la historia de la Institución Universitaria Antonio José
                Camacho o la UNIAJC como la conocemos. Su historia es una de esas gestas educativas que marcan un antes
                y un después en la vida de una región.
              </p>
              <button
                onClick={() => window.open("https://go.ivoox.com/rf/150471269", "_blank")}
                className="bg-white text-[#002C51] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#3B84CE] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Escuchar Capítulo 1</span>
              </button>
            </div>

            {/* Capítulo 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1B4B85] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Capítulo 2</h3>
                  <div className="w-12 h-1 bg-[#1B4B85] rounded-full"></div>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Si en el capítulo anterior hablamos de sus inicios visionarios, hoy nos adentramos en el corazón de la
                institución, su profundo compromiso social y ético.
              </p>
              <button
                onClick={() => window.open("https://go.ivoox.com/rf/151009128", "_blank")}
                className="bg-white text-[#002C51] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#1B4B85] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Escuchar Capítulo 2</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Logos */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
            {/* Logo Universidad */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#002C51] rounded-3xl mb-4">
                <div className="text-white font-bold text-2xl">UC</div>
              </div>
              <h3 className="text-2xl font-bold text-[#002C51] mb-2">UNICAMACHO</h3>
              <p className="text-gray-600">Institución Universitaria</p>
            </div>

            {/* Logo 55 años */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#3B84CE] to-[#1B4B85] rounded-3xl mb-4">
                <div className="text-white font-bold text-2xl">55</div>
              </div>
              <h3 className="text-2xl font-bold text-[#002C51] mb-2">55 AÑOS</h3>
              <p className="text-gray-600">1970 - 2025</p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">© 2025 UNICAMACHO - Institución Universitaria Antonio José Camacho</p>
          </div>
        </div>
      </footer>

      {/* Modal for enlarged posts */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={instagramPosts.find((post) => post.id === selectedPost)?.image || "/placeholder.svg"}
              alt="Instagram post"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
