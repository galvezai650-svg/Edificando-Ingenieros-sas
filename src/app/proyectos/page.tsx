'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import { projects, projectCategories, portfolioSummary } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, ChevronRight, ArrowRight, User, Briefcase, Building2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-80px' })

  const filteredProjects =
    activeCategory === 'todos'
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory)

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-[128px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-dark rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/" className="hover:text-brand-light transition-colors duration-300">
                Inicio
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-light font-medium">Proyectos</span>
            </nav>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Portafolio de{' '}
              <span className="bg-gradient-to-r from-brand-light to-brand-lighter bg-clip-text text-transparent">
                Proyectos
              </span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {portfolioSummary.totalProjects}+ proyectos ejecutados entre {portfolioSummary.period}, demostrando trayectoria y experiencia continua
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg shadow-brand/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.emoji && <span className="mr-1.5">{cat.emoji}</span>}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm">
              Mostrando <strong className="text-[#0a1628]">{filteredProjects.length}</strong> proyecto{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeUp}
              >
                <Link href={`/proyectos/${project.id}`} className="group block">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-brand/90 backdrop-blur-sm text-white border-0 px-3 py-1 text-xs font-semibold">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 text-xs text-white/90">
                          {project.type === 'Obra Pública' ? (
                            <Building2 className="w-3 h-3" />
                          ) : (
                            <Briefcase className="w-3 h-3" />
                          )}
                          {project.type}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative -mt-16 z-10 px-6 pb-6">
                      <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-brand-lighter transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Info row */}
                      <div className="flex items-center gap-4 text-white/60 text-xs flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-light" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-brand-light" />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-brand-light" />
                          {project.client}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">No se encontraron proyectos en esta categoría.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
              Cobertura Geográfica
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Nuestros proyectos han beneficiado a múltiples municipios en el Eje Cafetero
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioSummary.departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-brand-light font-bold text-lg mb-4">{dept.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {dept.municipalities.map((mun) => (
                    <span
                      key={mun}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-white/80 text-sm rounded-full"
                    >
                      <MapPin className="w-3 h-3 text-brand" />
                      {mun}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sectors */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="bg-brand/10 rounded-2xl p-6 border border-brand/20 text-center"
            >
              <Building2 className="w-8 h-8 text-brand-light mx-auto mb-3" />
              <h3 className="text-white font-bold mb-1">{portfolioSummary.sectors.publico.label}</h3>
              <p className="text-white/50 text-sm">{portfolioSummary.sectors.publico.description}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="bg-brand/10 rounded-2xl p-6 border border-brand/20 text-center"
            >
              <Briefcase className="w-8 h-8 text-brand-light mx-auto mb-3" />
              <h3 className="text-white font-bold mb-1">{portfolioSummary.sectors.privado.label}</h3>
              <p className="text-white/50 text-sm">{portfolioSummary.sectors.privado.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              ¿Desea emprender un nuevo proyecto?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Permítanos asesorarle sobre la materialización de su próximo proyecto. Nuestro equipo se encuentra a su entera disposición.
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
    </MainLayout>
  )
}
