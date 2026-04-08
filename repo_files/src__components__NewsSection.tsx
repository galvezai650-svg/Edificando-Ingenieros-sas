'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const fallbackNews = [
  {
    id: '1',
    title: 'Inauguración del Nuevo Proyecto Residencial Los Andes',
    slug: 'inauguracion-proyecto-los-andes',
    excerpt: 'Con gran éxito se llevó a cabo la inauguración de nuestro más reciente proyecto residencial en Medellín, marcando un hito en la construcción sostenible.',
    content: '',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    category: 'Proyectos',
    priority: 3,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Certificación LEED Gold para Torre Corporativa Omega',
    slug: 'certificacion-leed-gold-torre-omega',
    excerpt: 'Nuestro proyecto insignia ha obtenido la certificación LEED Gold, consolidándonos como líderes en construcción sostenible en Colombia.',
    content: '',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    category: 'Sostenibilidad',
    priority: 2,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Alianza Estratégica con el Municipio de Cali',
    slug: 'alianza-municipio-cali',
    excerpt: 'Firmamos una alianza para el desarrollo de infraestructura vial que beneficiará a más de 500,000 ciudadanos en la zona norte de la ciudad.',
    content: '',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    category: 'Alianzas',
    priority: 1,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

interface NewsItem {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  priority: number
  active: boolean
  createdAt: string
  updatedAt: string
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>(fallbackNews)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news')
        if (res.ok) {
          const data = await res.json()
          if (data.length > 0) {
            setNews(data)
          }
        }
      } catch {
        // Use fallback data
      }
    }
    fetchNews()
  }, [])

  const visibleNews = news.slice(0, 3)

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('es-CO', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    } catch {
      return ''
    }
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-dark rounded-full text-xs font-semibold mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            ÚLTIMAS NOTICIAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Mantente <span className="text-brand">Informado</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Las últimas novedades de nuestros proyectos, logros y contribuciones al sector de la construcción en Colombia.
          </p>
        </motion.div>

        {/* News Cards - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {visibleNews.map((item, i) => (
            <motion.article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover-lift"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-brand text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(item.createdAt)}</span>
                </div>
                <h3 className="font-bold text-[#0a1628] text-lg mb-3 group-hover:text-brand-dark transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <button className="flex items-center gap-2 text-brand-dark font-semibold text-sm group/btn hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.article
            key={visibleNews[currentIndex]?.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {visibleNews[currentIndex] && (
              <>
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${visibleNews[currentIndex].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-brand text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {visibleNews[currentIndex].category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(visibleNews[currentIndex].createdAt)}</span>
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-lg mb-3 line-clamp-2">
                    {visibleNews[currentIndex].title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {visibleNews[currentIndex].excerpt}
                  </p>
                </div>
              </>
            )}
          </motion.article>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrentIndex(prev => (prev > 0 ? prev - 1 : visibleNews.length - 1))}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-brand-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {visibleNews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex ? 'bg-brand w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentIndex(prev => (prev < visibleNews.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-brand-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
