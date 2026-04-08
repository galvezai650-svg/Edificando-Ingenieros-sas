'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Instagram,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'

const quickLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

const serviceLinks = [
  { label: 'Diseño de Ingeniería', href: '/servicios' },
  { label: 'Obras Civiles', href: '/servicios' },
  { label: 'Infraestructura Urbana', href: '/servicios' },
  { label: 'Vivienda Campestre', href: '/servicios' },
  { label: 'Pavimentación', href: '/servicios' },
  { label: 'Acueductos', href: '/servicios' },
]

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/edificandoingenieros?igsh=MXhpYWw5dHRmNmNmdw==', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0a1628] text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* CTA Bar */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              ¿Listo para construir tu proyecto?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Contáctanos hoy y hagamos realidad tu visión
            </p>
          </div>
          <Link
            href="/contacto"
            className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Solicitar Cotización
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="mb-6">
              <div className="relative inline-block rounded-xl overflow-hidden border border-emerald-500/30 p-1.5 bg-white/5">
                <Image
                  src="https://image2url.com/r2/default/images/1775538911351-67dd05af-32d8-464a-beda-760be55cc259.png"
                  alt="Edificando Ingenieros S.A.S."
                  width={160}
                  height={64}
                  className="h-auto w-40 brightness-110"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empresa líder en ingeniería y construcción en Colombia con más de 10 años de
              experiencia. Transformamos ideas en obras maestras de la ingeniería moderna.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 flex items-center justify-center text-white/60 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-emerald-500 rounded-full" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-emerald-500 rounded-full" />
              Servicios
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-emerald-500 rounded-full" />
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <a
                  href="https://maps.google.com/?q=Chinchina+Caldas+Colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-emerald-400 text-sm transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                  <span>Cra 9 #14-20</span>
                </a>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <a
                  href="tel:+573108870044"
                  className="flex items-center gap-3 text-white/60 hover:text-emerald-400 text-sm transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>310 887 0044</span>
                </a>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <a
                  href="mailto:contacto@edificandoingenierossas.com"
                  className="flex items-center gap-3 text-white/60 hover:text-emerald-400 text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>contacto@edificandoingenierossas.com</span>
                </a>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Edificando Ingenieros. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs">
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Política de Privacidad</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573108870044"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
    </motion.a>
  )
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-600/30 transition-all duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
