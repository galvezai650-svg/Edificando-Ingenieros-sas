'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  Target,
  Eye,
  Star,
  Award,
  Users,
  Building2,
  HardHat,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
  ChevronRight,
  Quote,
  MapPin,
} from 'lucide-react'
import { testimonials, stats, publicSector, companyInfo } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const
const duration = 0.7

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const statIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Award: <Award className="w-7 h-7" />,
  HardHat: <HardHat className="w-7 h-7" />,
}

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Excelencia',
    description: 'Nos comprometemos con los más altos estándares de calidad en cada proyecto, superando las expectativas de nuestros clientes.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Compromiso',
    description: 'Cada proyecto es una responsabilidad que asumimos con dedicación total, cumpliendo plazos y presupuestos acordados.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovación',
    description: 'Incorporamos las últimas tecnologías y metodologías constructivas para ofrecer soluciones vanguardistas y eficientes.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Confianza',
    description: 'Construimos relaciones sólidas basadas en la transparencia, honestidad y resultados comprobables a lo largo de 10+ años.',
  },
]

export default function NosotrosPage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
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
              <span className="text-white/70">Nosotros</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-6">
              Sobre <span className="text-brand-light">Nosotros</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              {companyInfo.name} es una empresa dedicada a la construcción y diseño de obras civiles con amplia experiencia en el sector público y privado. Operamos en el Eje Cafetero Colombiano, específicamente en el departamento de Caldas y zonas aledañas como Boyacá, Risaralda y Valle del Cauca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ease, duration }}
            >
              <Card className="bg-gradient-to-br from-[#0f2340] to-[#16305c] border-brand/20 rounded-3xl p-8 h-full hover:border-brand/40 transition-colors duration-500">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-brand-light" />
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
                    Nuestra Misión
                  </h2>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Transformar ideas en realidad a través de soluciones de ingeniería innovadoras y sostenibles, entregando proyectos que superen las expectativas de nuestros clientes y generen un impacto positivo en las comunidades donde operamos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ease, duration }}
            >
              <Card className="bg-gradient-to-br from-[#0f2340] to-[#16305c] border-brand/20 rounded-3xl p-8 h-full hover:border-brand/40 transition-colors duration-500">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-brand-light" />
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
                    Nuestra Visión
                  </h2>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Ser la empresa de ingeniería y construcción líder en Colombia, reconocida internacionalmente por nuestra excelencia operativa, innovación tecnológica y compromiso con el desarrollo sostenible del sector constructor.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ease, duration }}
              className="relative flex items-center justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white shadow-2xl border border-brand-100">
                <div className="relative animate-logo-glow">
                  <div className="rounded-2xl overflow-hidden border-2 p-4 bg-white shadow-lg">
                    <Image
                      src="https://image2url.com/r2/default/images/1775538911351-67dd05af-32d8-464a-beda-760be55cc259.png"
                      alt="Edificando Ingenieros S.A.S."
                      width={320}
                      height={128}
                      className="h-auto w-64 md:w-80 lg:w-96 brightness-110"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand text-white rounded-2xl p-6 shadow-xl">
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">Años de experiencia</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ease, duration }}
            >
              <Badge className="bg-brand-100 text-brand-700 hover:bg-brand-100 mb-4">
                Nuestra Historia
              </Badge>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Construyendo el futuro desde <span className="text-brand">2013</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {companyInfo.name} nació en {companyInfo.founded} con la visión de transformar el sector de la construcción en Colombia. Fundada en Chinchiná, Caldas, en el corazón del Eje Cafetero, nuestra empresa comenzó como un estudio de diseño estructural y hoy es una firma integral de ingeniería y construcción.
                </p>
                <p>
                  A lo largo de más de una década, hemos ejecutado obras públicas de gran envergadura, ganándonos la confianza de alcaldías, gobernaciones y empresas de todo el país. Nuestro equipo de más de 35 profesionales especializados opera en el Eje Cafetero Colombiano y zonas aledañas.
                </p>
                <p>
                  Nuestro enfoque en la innovación, la sostenibilidad y la satisfacción del cliente nos ha permitido completar más de 250 proyectos exitosos, desde viviendas campestres hasta grandes infraestructuras urbanas, ganándonos la confianza de más de 180 clientes.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-[#0a1628] hover:bg-[#0f2340] rounded-full px-8">
                  <Link href="/contacto">
                    Conoce más sobre nosotros
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Public Sector */}
      <section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ease, duration }}
            className="text-center mb-16"
          >
            <Badge className="bg-brand/20 text-brand-light border-brand/30 hover:bg-brand/20 mb-4">
              Experiencia Comprobada
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Sector <span className="text-brand-light">Público</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Más de <strong className="text-brand-light">22 proyectos</strong> ejecutados en obras públicas, respaldados por la confianza de instituciones de todo el país.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Alcaldías */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ease, duration, delay: 0.1 }}
            >
              <Card className="bg-[#0f2340]/80 border-brand/10 rounded-3xl p-6 h-full backdrop-blur-sm hover:border-brand/30 transition-colors duration-500">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-brand/20 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-brand-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">Alcaldías</h3>
                  <div className="flex flex-wrap gap-2">
                    {publicSector.clients.alcaldias.map((alcaldia) => (
                      <span key={alcaldia} className="px-2.5 py-1 bg-white/5 text-white/70 text-xs rounded-lg border border-white/10">
                        {alcaldia}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Empresas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ease, duration, delay: 0.2 }}
            >
              <Card className="bg-[#0f2340]/80 border-brand/10 rounded-3xl p-6 h-full backdrop-blur-sm hover:border-brand/30 transition-colors duration-500">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-brand/20 rounded-2xl flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-brand-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">Empresas</h3>
                  <div className="flex flex-wrap gap-2">
                    {publicSector.clients.empresas.map((empresa) => (
                      <span key={empresa} className="px-2.5 py-1 bg-white/5 text-white/70 text-xs rounded-lg border border-white/10">
                        {empresa}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Gobernaciones */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ease, duration, delay: 0.3 }}
            >
              <Card className="bg-[#0f2340]/80 border-brand/10 rounded-3xl p-6 h-full backdrop-blur-sm hover:border-brand/30 transition-colors duration-500">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-brand/20 rounded-2xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-brand-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">Gobernaciones</h3>
                  <div className="flex flex-wrap gap-2">
                    {publicSector.clients.gobernaciones.map((gov) => (
                      <span key={gov} className="px-2.5 py-1 bg-white/5 text-white/70 text-xs rounded-lg border border-white/10">
                        Gobernación de {gov}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease, duration }}
            className="text-center mb-12"
          >
            <p className="text-brand-light text-sm font-semibold uppercase tracking-widest mb-2">Periodo 2018 - 2023</p>
            <p className="text-white/50 text-base">Resultados de nuestra trayectoria en el sector público y privado</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-light">
                  {statIcons[stat.icon]}
                </div>
                <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ease, duration }}
            className="text-center mb-16"
          >
            <Badge className="bg-brand-100 text-brand-700 hover:bg-brand-100 mb-4">
              Nuestros Valores
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Lo que nos define
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nuestros valores fundamentales guían cada decisión y acción, asegurando la máxima calidad en todos nuestros proyectos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ ease, duration, delay: i * 0.1 }}
              >
                <Card className="bg-white border-0 shadow-lg rounded-3xl p-6 h-full hover:shadow-xl transition-shadow duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-5 text-brand-dark group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Testimonios
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación y nuestro mayor motivo de orgullo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ ease, duration, delay: i * 0.1 }}
              >
                <Card className="bg-gray-50 border-0 rounded-3xl p-8 h-full relative overflow-hidden group hover:shadow-lg transition-shadow duration-500">
                  <CardContent className="p-0 relative z-10">
                    <Quote className="w-10 h-10 text-brand-200 mb-4" />
                    <p className="text-gray-700 leading-relaxed mb-6 text-base">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Separator className="mb-4 bg-gray-200" />
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0a1628] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0a1628]">{t.name}</div>
                        <div className="text-sm text-gray-500">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
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
              ¿Listo para trabajar con <span className="text-brand-light">nosotros</span>?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-4">
              Cuéntanos sobre tu proyecto y juntos haremos realidad tus ideas. Estamos listos para comenzar.
            </p>
            <p className="text-brand-light/80 text-lg max-w-2xl mx-auto mb-10 italic">
              &ldquo;{companyInfo.message}&rdquo;
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
