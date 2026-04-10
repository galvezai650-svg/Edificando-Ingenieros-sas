'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center">
              <Cookie className="w-6 h-6 text-brand-dark" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h4 className="font-bold text-[#0a1628] text-sm mb-1">
                🍪 Aviso de Cookies
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Puede aceptar todas las cookies o rechazarlas. 
                Consulte nuestra{' '}
                <a href="#" className="text-brand-dark hover:text-brand-700 underline underline-offset-2">
                  Política de Privacidad
                </a>{' '}
                para mayor información.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={reject}
                className="flex-1 md:flex-none px-4 py-2.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="flex-1 md:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand-700 rounded-xl shadow-lg shadow-brand/20 hover:shadow-brand/40 transition-all duration-300"
              >
                Aceptar todas
              </button>
            </div>

            {/* Close */}
            <button
              onClick={reject}
              className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
