'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bookmark, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Ventas', href: '/ventas', highlight: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Proceso', href: '/proceso' },
  { label: 'Contacto', href: '/contacto' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#060e1a] text-white/80 text-xs hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+573108870044" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors duration-300">
              <Phone className="w-3 h-3" />
              <span>310 887 0044</span>
            </a>
            <a href="mailto:contacto@edificandoingenierossas.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors duration-300">
              <Mail className="w-3 h-3" />
              <span>contacto@edificandoingenierossas.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>Cra 9 #14-20</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>Lunes a viernes: 8:00 - 18:00</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 bg-[#0a1628] border-b border-emerald-500/10${
          scrolled
            ? '/95 backdrop-blur-xl shadow-2xl shadow-black/20'
            : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group/logo">
              {/* Logo container with pulsing glow border */}
              <div className="relative rounded-xl overflow-hidden border-2 animate-logo-glow group-hover/logo:[animation:logo-glow-hover_1.5s_ease-in-out_infinite] transition-all duration-500">
                <div className="relative w-14 h-10 md:w-16 md:h-12 overflow-hidden">
                  <Image
                    src="https://image2url.com/r2/default/images/1775538911351-67dd05af-32d8-464a-beda-760be55cc259.png"
                    alt="Edificando Ingenieros S.A.S."
                    fill
                    className="object-contain object-center brightness-110 group-hover/logo:brightness-130 saturate-110 transition-all duration-500"
                    sizes="80px"
                    priority
                  />
                </div>
                {/* Fade vignette - intensifies on hover */}
                <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] bg-gradient-to-r from-[#0a1628] via-transparent to-[#0a1628] opacity-70 group-hover/logo:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Company name - logo image */}
              <div className="hidden sm:block relative">
                <Image
                  src="https://image2url.com/r2/default/images/1775666964100-68071797-c44f-45b7-9149-6971802944b5.png"
                  alt="Edificando Ingenieros S.A.S."
                  width={1225}
                  height={422}
                  className="h-8 md:h-10 w-auto object-contain opacity-90 group-hover/logo:opacity-100 transition-opacity duration-500"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center">
              <div className="bg-white/5 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-0.5 border border-white/10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 xl:px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 hover:bg-white/10"
                  >
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-emerald-600 rounded-full z-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 ${
                      link.highlight
                        ? isActive(link.href) ? 'text-white' : 'text-emerald-400'
                        : isActive(link.href) ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                    {link.highlight && !isActive(link.href) && (
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse z-10" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Link
                href="/favoritos"
                className="relative p-2 text-white/70 hover:text-emerald-400 transition-colors duration-300"
              >
                <Bookmark className="w-5 h-5" />
              </Link>

              <Link
                href="/contacto"
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105"
              >
                Cotizar
                <ChevronRight className="w-4 h-4" />
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-[#0a1628]/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 pb-4 mb-3 border-b border-white/10">
                  <div className="relative rounded-xl overflow-hidden border-2 animate-logo-glow">
                    <div className="relative w-12 h-9 overflow-hidden">
                      <Image
                        src="https://image2url.com/r2/default/images/1775538911351-67dd05af-32d8-464a-beda-760be55cc259.png"
                        alt="Edificando Ingenieros S.A.S."
                        fill
                        className="object-contain object-center brightness-110 saturate-110"
                        sizes="64px"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] bg-gradient-to-r from-[#0a1628] via-transparent to-[#0a1628] opacity-70" />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://image2url.com/r2/default/images/1775666964100-68071797-c44f-45b7-9149-6971802944b5.png"
                      alt="Edificando Ingenieros S.A.S."
                      width={1225}
                      height={422}
                      className="h-7 w-auto object-contain opacity-90"
                    />
                  </div>
                </div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? 'text-white bg-emerald-600'
                          : link.highlight
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        {link.highlight && !isActive(link.href) && (
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        )}
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-3 border-t border-white/10">
                  <Link
                    href="/contacto"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300"
                  >
                    Cotizar Ahora
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
