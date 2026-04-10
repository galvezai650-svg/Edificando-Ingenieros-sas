'use client'

import { useParams, notFound } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { projects } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  MapPin,
  Calendar,
  User,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  ImageIcon,
  Building2,
  Briefcase,
  Camera,
  ZoomIn,
  X,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

const placeholderGallery = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
]

export default function ProjectDetailPage() {
  const params = useParams()
  const project = projects.find((p) => p.id === params.id)

  // Gallery carousel state
  const [galleryIdx, setGalleryIdx] = useState(0)
  const [galleryDir, setGalleryDir] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const gallery = project?.gallery && project.gallery.length > 0 ? project.gallery : placeholderGallery

  function galleryGoTo(idx: number) {
    const len = gallery.length
    if (len === 0) return
    const next = ((idx % len) + len) % len
    setGalleryDir(next > galleryIdx ? 1 : -1)
    setGalleryIdx(next)
  }

  if (!project) {
    notFound()
  }

  const relatedProjects = projects
    .filter((p) => p.categorySlug === project.categorySlug && p.id !== project.id)
    .slice(0, 3)

  const infoCards = [
    { icon: User, label: 'Cliente', value: project.client },
    { icon: Calendar, label: 'Año', value: project.year },
    { icon: project.type === 'Obra Pública' ? Building2 : Briefcase, label: 'Tipo', value: project.type },
    { icon: MapPin, label: 'Ubicación', value: project.location },
  ]

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <section className="bg-[#0a1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-sm"
          >
            <Link href="/" className="text-white/50 hover:text-brand-light transition-colors duration-300">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <Link href="/proyectos" className="text-white/50 hover:text-brand-light transition-colors duration-300">
              Proyectos
            </Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="text-brand-light font-medium truncate max-w-xs">{project.title}</span>
          </motion.nav>
        </div>
      </section>

      {/* Project Header */}
      <section className="relative">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-b-3xl bg-gray-900">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              quality={100}
              priority
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-brand/90 backdrop-blur-sm text-white border-0 px-3 py-1 text-xs font-semibold">
                    {project.category}
                  </Badge>
                  <Badge className="bg-white/10 backdrop-blur-sm text-white border-0 px-3 py-1 text-xs font-semibold">
                    {project.type}
                  </Badge>
                </div>
                <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4 text-brand-light" />
                  <span className="text-sm md:text-base">{project.location}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-1 transition-all duration-300"
              >
                <card.icon className="w-6 h-6 text-brand mx-auto mb-3" />
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">{card.label}</p>
                <p className="text-base md:text-lg font-bold text-[#0a1628]">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <Separator className="bg-gray-200" />
      </div>

      {/* Description */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
              Sobre el Proyecto
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-8 text-center">
              Aspectos Destacados
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.highlights.map((highlight, i) => (
                <motion.div
                  key={highlight}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="bg-white border border-brand-100 text-brand-700 px-5 py-3 rounded-2xl text-sm font-semibold shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300">
                    {highlight}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-8 text-center">
              Servicios Utilizados
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.services.map((service, i) => (
                <motion.div
                  key={service}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Carousel */}
      {gallery.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50/50">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <Camera className="w-5 h-5 text-brand" />
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628]">
                  Galería del Proyecto
                </h2>
              </div>

              {/* Main carousel */}
              <div className="relative">
                <div className="relative w-full aspect-[16/10] md:aspect-[21/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-gray-900">
                  <AnimatePresence initial={false} custom={galleryDir} mode="wait">
                    <motion.div
                      key={galleryIdx}
                      custom={galleryDir}
                      variants={{
                        enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 1.03 }),
                        center: { x: 0, opacity: 1, scale: 1 },
                        exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.97 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0 cursor-zoom-in"
                      onClick={() => setLightbox(true)}
                    >
                      <Image
                        src={gallery[galleryIdx]}
                        alt={`${project.title} - Imagen ${galleryIdx + 1}`}
                        fill
                        quality={100}
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 1024px"
                        priority={galleryIdx === 0}
                      />
                      {/* Zoom hint */}
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Nav arrows */}
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={() => galleryGoTo(galleryIdx - 1)}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 hover:bg-brand/80 hover:text-white hover:border-brand-light/30 transition-all duration-300 flex items-center justify-center z-10"
                      >
                        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      <button
                        onClick={() => galleryGoTo(galleryIdx + 1)}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 hover:bg-brand/80 hover:text-white hover:border-brand-light/30 transition-all duration-300 flex items-center justify-center z-10"
                      >
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </>
                  )}

                  {/* Counter badge */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/10 z-10">
                    {galleryIdx + 1} / {gallery.length}
                  </div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => galleryGoTo(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === galleryIdx
                          ? 'w-8 h-2.5 bg-brand shadow-lg shadow-brand/30'
                          : 'w-2.5 h-2.5 bg-gray-300 hover:bg-brand-lighter'
                      }`}
                    />
                  ))}
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => galleryGoTo(i)}
                      className={`relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                        i === galleryIdx
                          ? 'ring-2 ring-brand ring-offset-2 w-24 h-16 md:w-28 md:h-18 opacity-100'
                          : 'w-20 h-14 md:w-24 md:h-16 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Miniatura ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                      {i === galleryIdx && (
                        <div className="absolute inset-0 bg-brand/20" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
              {galleryIdx + 1} / {gallery.length}
            </div>

            {/* Lightbox image */}
            <div
              className="relative w-[95vw] h-[85vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={galleryDir} mode="wait">
                <motion.div
                  key={galleryIdx}
                  custom={galleryDir}
                  variants={{
                    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={gallery[galleryIdx]}
                    alt={`${project.title} - Imagen ${galleryIdx + 1}`}
                    fill
                    quality={100}
                    className="object-contain"
                    sizes="95vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Lightbox nav */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); galleryGoTo(galleryIdx - 1) }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-brand/60 text-white flex items-center justify-center transition-all duration-300 z-10"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); galleryGoTo(galleryIdx + 1) }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-brand/60 text-white flex items-center justify-center transition-all duration-300 z-10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand rounded-full blur-[200px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Le interesa un proyecto similar?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Póngase en contacto con nosotros y le brindaremos asesoría para la materialización de su próximo proyecto con los más altos estándares de calidad.
            </p>
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand-700 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-all duration-300 hover:scale-105"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628]">
                  Proyectos Relacionados
                </h2>
                <Link
                  href="/proyectos"
                  className="hidden md:flex items-center gap-2 text-brand-dark hover:text-brand-700 font-medium transition-colors duration-300"
                >
                  Ver todos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related, i) => (
                <motion.div
                  key={related.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link href={`/proyectos/${related.id}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-brand/90 backdrop-blur-sm text-white border-0 text-xs px-2.5 py-0.5">
                            {related.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-[#0a1628] text-base mb-2 group-hover:text-brand-dark transition-colors duration-300">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <MapPin className="w-3 h-3 text-brand" />
                          {related.location}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="md:hidden text-center mt-8">
              <Link href="/proyectos">
                <Button variant="outline" className="rounded-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ver todos los proyectos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  )
}
