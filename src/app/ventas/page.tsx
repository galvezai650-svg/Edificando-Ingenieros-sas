'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { HardHat, Home, ArrowLeft } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

export default function VentasPage() {
  return (
    <MainLayout>
      <section className="relative bg-[#0a1628] min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/8 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -40, 30, 0],
              y: [0, 30, -40, 0],
              scale: [1, 0.9, 1.15, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 20, -30, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand/3 rounded-full blur-3xl"
          />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Floating HardHat icon */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { duration: 0.7, ease },
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-brand to-brand-dark rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-brand/30">
                <HardHat className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
              {/* Glow effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-brand/20 rounded-3xl blur-2xl"
              />
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease, duration: 0.7, delay: 0.2 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-light via-brand-lighter to-brand bg-clip-text text-transparent"
          >
            PÁGINA EN CONSTRUCCIÓN
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease, duration: 0.7, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            En breve podrá consultar propiedades disponibles en venta. Estamos preparando una propuesta de valor excepcional para usted.
          </motion.p>

          {/* Progress bar with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease, duration: 0.7, delay: 0.5 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="flex justify-between text-sm text-white/40 mb-2">
              <span>Progreso</span>
              <span>65%</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '65%' }}
                transition={{ duration: 2, ease, delay: 0.8 }}
                className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Features coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease, duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['Casas', 'Apartamentos', 'Lotes', 'Oficinas'].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease, duration: 0.5, delay: 0.9 + i * 0.1 }}
                className="px-5 py-2 rounded-full border border-brand/20 text-brand-light/70 text-sm bg-brand/5"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease, duration: 0.7, delay: 1 }}
          >
            <Button asChild className="bg-white/10 hover:bg-white/20 text-white rounded-full px-8 h-12 border border-white/20 backdrop-blur-sm">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Regresar al Inicio
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
