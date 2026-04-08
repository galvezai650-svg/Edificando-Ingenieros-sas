'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Building2,
  Route,
  Home,
  Compass,
  Droplets,
  Shield,
  DollarSign,
  Clock,
  Headphones,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Star,
  Warehouse,
  Waves,
  Zap,
  Camera,
  Paintbrush,
  PenTool,
} from 'lucide-react'
import { services, serviceCategories } from '@/lib/data'
import type { Service } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const
const duration = 0.7

const serviceIcons: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Route: <Route className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Warehouse: <Warehouse className="w-6 h-6" />,
  Waves: <Waves className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Paintbrush: <Paintbrush className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
}

const categoryLabels: Record<string, { letter: string; title: string; description: string }> = {
  construccion: {
    letter: 'A',
    title: 'Servicios de Construcción',
    description: 'Construimos, remodelamos y ejecutamos proyectos de obra civil con los más altos estándares de calidad.',
  },
  disenos: {
    letter: 'B',
    title: 'Diseños y Estudios',
    description: 'Desarrollamos estudios técnicos y diseños especializados que fundamentan cada proyecto.',
  },
  adicionales: {
    letter: 'C',
    title: 'Servicios Adicionales',
    description: 'Ofrecemos servicios complementarios que completan y potencian tu proyecto.',
  },
}

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Calidad Garantizada',
    description: 'Cada proyecto se ejecuta bajo estrictos protocolos de calidad certificados bajo normas vigentes.',
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Precios Competitivos',
    description: 'Optimizamos recursos y procesos para ofrecerte la mejor relación calidad-precio del mercado.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Entrega a Tiempo',
    description: 'Nuestra planificación meticulosa y control de avances garantizan el cumplimiento de cronogramas.',
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: 'Soporte Post-venta',
    description: 'Acompañamiento continuo después de la entrega con garantía técnica y asesoría permanente.',
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ease, duration, delay: index * 0.08 }}
    >
      <Card className="bg-white border-0 shadow-lg rounded-3xl overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div className="relative aspect-video overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/30 to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge className="bg-brand text-white border-0 hover:bg-brand">
              {service.projects}+ proyectos
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white shadow-lg">
              {serviceIcons[service.icon] || <FileText className="w-6 h-6" />}
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#0a1628] mb-3 group-hover:text-brand-dark transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature) => (
              <Badge key={feature} variant="secondary" className="bg-brand-50 text-brand-700 hover:bg-brand-50 text-xs rounded-full font-normal">
                {feature}
              </Badge>
            ))}
            {service.features.length > 4 && (
              <Badge variant="secondary" className="bg-brand/10 text-brand-dark hover:bg-brand/10 text-xs rounded-full font-normal">
                +{service.features.length - 4} más
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ServiciosPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease, duration }}
          >
            <div className="flex items-center gap-2 text-brand-light text-sm mb-6">
              <Link href="/" className="hover:text-brand-lighter transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/70">Servicios</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-brand-light">Servicios</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Soluciones integrales de construcción, diseño e ingeniería civil con los más altos estándares de calidad y profesionalismo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg shadow-brand/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todos los Servicios
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg shadow-brand/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          {activeCategory === 'all' ? (
            // Show all categories
            Object.entries(categoryLabels).map(([catId, catInfo]) => {
              const categoryServices = services.filter((s) => s.category === catId)
              if (categoryServices.length === 0) return null
              return (
                <div key={catId} className="mb-16 last:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ ease, duration }}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-bold text-sm">
                        {catInfo.letter}
                      </span>
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628]">
                        {catInfo.title}
                      </h2>
                    </div>
                    <p className="text-gray-500 ml-14">
                      {catInfo.description}
                    </p>
                  </motion.div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service, i) => (
                      <ServiceCard key={service.id} service={service} index={i} />
                    ))}
                  </div>
                </div>
              )
            })
          ) : (
            // Show filtered
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No se encontraron servicios en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ease, duration }}
            className="text-center mb-16"
          >
            <Badge className="bg-brand-100 text-brand-700 hover:bg-brand-100 mb-4">
              ¿Por qué elegirnos?
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Beneficios de trabajar con nosotros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nos diferenciamos por nuestro compromiso con la excelencia en cada aspecto del proceso constructivo.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ ease, duration, delay: i * 0.1 }}
              >
                <Card className="bg-white border-0 shadow-lg rounded-3xl p-6 h-full text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-brand-dark group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1628] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0a1628] to-[#0f2340] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ease, duration }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Necesitas un servicio <span className="text-brand-light">específico</span>?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Contáctanos y te asesoraremos sobre la mejor solución para tu proyecto. Sin compromiso.
            </p>
            <Button asChild size="lg" className="bg-brand hover:bg-brand-dark text-white rounded-full px-10 text-lg h-14">
              <Link href="/contacto">
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
