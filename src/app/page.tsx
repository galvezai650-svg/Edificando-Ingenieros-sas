'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import {
  projects, services, testimonials, stats, processSteps, companyInfo,
} from '@/lib/data'
import {
  Building2, Users, Award, HardHat, ChevronRight, ArrowRight, ArrowLeft,
  Star, Target, Shield, Zap, Lightbulb, PenTool, Hammer, Key,
  FileText, Route, Home, Compass, Droplets, Heart,
  CheckCircle, Clock, MapPin, Phone, Mail, MessageCircle,
  Quote, Sparkles, Send, Warehouse, Waves, Camera, Paintbrush,
} from 'lucide-react'

// ─── Smooth Easing ──────────────────────────────────────────
const smoothEase = [0.25, 1, 0.5, 1] as const
const smoothTransition = { duration: 0.4, ease: smoothEase }

// ─── Animated Counter ──────────────────────────────────────
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.floor(latest))

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.2, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView, count, target])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) ref.current.textContent = `${prefix}${latest}${suffix}`
    })
    return unsubscribe
  }, [rounded, suffix, prefix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

// ─── Icon Map ──────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  Building2, Users, Award, HardHat, FileText, Route, Home, Compass,
  Droplets, Lightbulb, PenTool, Hammer, Key, Target, Shield, Zap,
  Star, Warehouse, Waves, Camera, Paintbrush,
}

// ─── Section Wrapper ──────────────────────────────────────
function Section({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  const ref = useRef(null)
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={smoothTransition}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 1. HERO SECTION ──────────────────────────────────────
// ═══════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
      {/* Fixed BG with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0f2340]/90 to-[#0a1628]/95" />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-brand-dark/8 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-brand-light/5 rounded-full blur-[80px] animate-blob" />

      {/* Animated particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-light/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: smoothEase }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand/10 border border-brand/20 rounded-full text-brand-light text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            {companyInfo.slogan}
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
          >
            <span className="font-[family-name:var(--font-playfair)]">
              {companyInfo.shortName}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: smoothEase }}
          >
            {companyInfo.description}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-brand-light/80 leading-relaxed max-w-2xl mb-12 italic"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35, ease: smoothEase }}
          >
            &ldquo;{companyInfo.message}&rdquo;
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: smoothEase }}
          >
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand-700 text-white px-8 py-4 rounded-full font-semibold text-sm shadow-2xl shadow-brand/30 hover:shadow-brand/50 transition-all duration-300 hover:scale-105"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-brand/50 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              Cotizar Ahora
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-brand"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 2. MARQUEE SECTION ───────────────────────────────────
// ═══════════════════════════════════════════════════════════
function MarqueeSection() {
  const items = [
    'Constructora Premium', 'Ingeniería Civil', 'Edificaciones', 'Infraestructura',
    'Vivienda', 'Pavimentación', 'Diseño Estructural', 'Acueductos',
  ]
  const doubled = [...items, ...items]
  return (
    <section className="relative py-5 bg-[#0f2340] border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-8 text-white/30 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand/60" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 3. ABOUT PREVIEW ────────────────────────────────────
// ═══════════════════════════════════════════════════════════
function AboutPreview() {
  const features = [
    { icon: Target, label: 'Precisión' },
    { icon: Shield, label: 'Garantía' },
    { icon: Zap, label: 'Eficiencia' },
    { icon: Lightbulb, label: 'Innovación' },
  ]

  return (
    <Section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://image2url.com/r2/default/images/1775612783028-b3f00d88-d4ad-47eb-9285-7e9937bacf1a.png"
                alt="Edificando Ingenieros - Construyendo Sueños, Forjando Futuros"
                width={800}
                height={600}
                className="aspect-[4/3] w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
            </div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand/20 rounded-3xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.08 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-dark rounded-full text-xs font-semibold mb-6">
              SOBRE NOSOTROS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-6 leading-tight">
              Construyendo Sueños,{' '}
              <span className="text-brand">Forjando Futuros</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-lg">
              En <strong className="text-[#0a1628]">Edificando Ingenieros</strong>, somos una empresa colombiana 
              con más de una década de experiencia en el sector de la construcción e ingeniería civil. 
              Hemos ejecutado más de 22 proyectos entre 2018 y 2023.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Con presencia en Manizales, Chinchiná, Villamaría, Palestina, Aranzazu y Pereira, 
              trabajamos tanto con el sector público (Alcaldías, Aquamaná E.S.P.) como con el sector privado,
              aplicando las mejores prácticas para garantizar resultados de excelencia.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-full text-sm font-medium text-[#0a1628] hover:bg-brand-50 hover:text-brand-dark transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05, ease: smoothEase }}
                >
                  <feature.icon className="w-4 h-4" />
                  {feature.label}
                </motion.div>
              ))}
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-brand-dark font-semibold group hover:gap-3 transition-all duration-300"
            >
              Conoce Más de Nosotros
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 5. SERVICES PREVIEW ──────────────────────────────────
// ═══════════════════════════════════════════════════════════
function ServicesPreview() {
  return (
    <Section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-brand-dark/5 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 text-brand-light border border-brand/20 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm">
            <HardHat className="w-3.5 h-3.5" />
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Soluciones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-lighter">Ingeniería</span> Integral
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Ofrecemos una amplia gama de servicios para proyectos de cualquier envergadura.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText
            return (
              <motion.div
                key={service.id}
                className="glass-card overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: smoothEase }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-11 h-11 bg-brand/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                    {service.projects} proyectos
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 bg-white/5 text-white/50 text-[10px] rounded-lg font-medium border border-white/5"
                      >
                        {f}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2.5 py-1 bg-brand/10 text-brand-light text-[10px] rounded-lg font-medium">
                        +{service.features.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 hover:bg-brand hover:border-brand text-brand-light hover:text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand/30"
          >
            Ver Todos los Servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 6. PROJECTS PREVIEW ──────────────────────────────────
// ═══════════════════════════════════════════════════════════
function ProjectsPreview() {
  return (
    <Section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-dark rounded-full text-xs font-semibold mb-6">
            <Building2 className="w-3.5 h-3.5" />
            PORTAFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            Proyectos que <span className="text-brand">Transforman</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Conoce algunos de los proyectos que reflejan nuestro compromiso con la excelencia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: smoothEase }}
            >
              <Link href={`/proyectos/${project.id}`} className="block">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-start justify-between">
                      <span className="px-3 py-1.5 bg-brand text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                        {project.year}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom details */}
                <div className="p-4 bg-white">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-medium text-[#0a1628]">{project.client}</span>
                    <span className="text-gray-300">|</span>
                    <span>{project.type}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#0f2340] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Ver Todos los Proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 7. PROCESS PREVIEW ───────────────────────────────────
// ═══════════════════════════════════════════════════════════
function ProcessPreview() {
  return (
    <Section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-dark rounded-full text-xs font-semibold mb-6">
            <PenTool className="w-3.5 h-3.5" />
            NUESTRO PROCESO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            Cómo <span className="text-brand">Trabajamos</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Un proceso claro y transparente para garantizar el éxito de tu proyecto.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-200 via-brand to-brand-200" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Lightbulb
              return (
                <motion.div
                  key={step.number}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08, ease: smoothEase }}
                >
                  {/* Step circle */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-xl border-2 border-brand-100 mb-6 relative z-10 hover:border-brand transition-all duration-500 group">
                    <div className="absolute -top-2.5 -right-2.5 w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-brand/30">
                      {step.number}
                    </div>
                    <Icon className="w-9 h-9 text-brand group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1628] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <Link
            href="/proceso"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand/30 hover:scale-105"
          >
            Ver Proceso Completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 8. TESTIMONIALS SECTION ──────────────────────────────
// ═══════════════════════════════════════════════════════════
function TestimonialsSection() {
  return (
    <Section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(16,185,129,1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 text-brand-light border border-brand/20 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm">
            <MessageCircle className="w-3.5 h-3.5" />
            TESTIMONIOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que Dicen Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-lighter">Clientes</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            La satisfacción de nuestros clientes es nuestra mayor motivación.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: smoothEase }}
            >
              <Quote className="w-8 h-8 text-brand/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-bold text-xs">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-white/40 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 9. CTA SECTION ──────────────────────────────────────
// ═══════════════════════════════════════════════════════════
function CTASection() {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 mx-auto border border-white/20"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Building2 className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para Construir tu Proyecto?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Conversemos sobre tu idea. Nuestro equipo de expertos está listo para transformar tu visión en realidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-brand-dark hover:bg-white/90 px-8 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Send className="w-4 h-4" />
              Solicitar Cotización
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              <Building2 className="w-4 h-4" />
              Ver Proyectos
            </Link>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
              <Phone className="w-4 h-4" />
              <span>310 887 0044</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
              <Mail className="w-4 h-4" />
              <span>contacto@edificandoingenierossas.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Cra 9 #14-20</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── 4. GALLERY CAROUSEL ──────────────────────────────────
// ═══════════════════════════════════════════════════════════
function GalleryCarousel() {
  const slides = [
    {
      image: '/images/gallery-1.jpg',
      title: 'Vista Panorámica del Proyecto',
      subtitle: 'Infraestructura residencial en el Eje Cafetero',
    },
    {
      image: '/images/gallery-2.jpg',
      title: 'Pavimentación en Proceso',
      subtitle: 'Mejoramiento vial con tecnología de punta',
    },
    {
      image: '/images/gallery-3.jpg',
      title: 'Construcción de Vías',
      subtitle: 'Obra de infraestructura para la comunidad',
    },
    {
      image: '/images/gallery-4.jpg',
      title: 'Nuestro Equipo',
      subtitle: 'Profesionales comprometidos con la excelencia',
    },
  ]

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isTransitioning = useRef(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning.current) return
    isTransitioning.current = true
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    setTimeout(() => { isTransitioning.current = false }, 350)
  }, [current])

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(goNext, 3500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [goNext])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <Section className="py-20 md:py-28 bg-[#060e1a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="absolute top-[20%] right-[5%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-brand-dark/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 text-brand-light border border-brand/20 rounded-full text-xs font-semibold mb-6 backdrop-blur-sm">
            <Camera className="w-3.5 h-3.5" />
            NUESTRO TRABAJO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Galería de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-lighter">Proyectos</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Imágenes reales de nuestras obras en ejecución, reflejando nuestro compromiso con la calidad.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Slide */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-brand/10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  fill
                  className="object-cover"
                  priority={current === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {slides[current].title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base">
                      {slides[current].subtitle}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 hover:bg-brand/80 hover:text-white hover:border-brand-light/30 transition-all duration-300 flex items-center justify-center z-20 group"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 hover:bg-brand/80 hover:text-white hover:border-brand-light/30 transition-all duration-300 flex items-center justify-center z-20 group"
              aria-label="Siguiente"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Dots and Thumbnail indicators */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`relative transition-all duration-300 ${
                  i === current ? 'w-10 h-2.5' : 'w-2.5 h-2.5'
                } rounded-full ${
                  i === current
                    ? 'bg-brand shadow-lg shadow-brand/40'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex justify-center gap-3 mt-5">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  i === current
                    ? 'ring-2 ring-brand ring-offset-2 ring-offset-[#060e1a] w-24 h-16 md:w-32 md:h-20'
                    : 'opacity-50 hover:opacity-80 w-20 h-14 md:w-28 md:h-18'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                {i === current && (
                  <div className="absolute inset-0 bg-brand/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

// ═══════════════════════════════════════════════════════════
// ─── HOME PAGE ────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════
export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <MarqueeSection />
      <AboutPreview />
      <GalleryCarousel />
      <ServicesPreview />
      <ProjectsPreview />
      <ProcessPreview />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  )
}
