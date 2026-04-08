'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactCards = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: 'Cra 9 #14-20',
    color: 'from-brand to-brand-dark',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+57 310 887 0044',
    color: 'from-blue-500 to-blue-600',
    link: 'tel:+573108870044',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contacto@edificandoingenierossas.com',
    color: 'from-purple-500 to-purple-600',
    link: 'mailto:contacto@edificandoingenierossas.com',
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Lun - Vie: 8:00 AM - 6:00 PM',
    color: 'from-orange-500 to-orange-600',
  },
]

export function LocationMap() {
  return (
    <section className="py-20 bg-white">
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
            <MapPin className="w-3.5 h-3.5" />
            UBICACIÓN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Encuéntranos <span className="text-brand">Aquí</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Visita nuestras oficinas en Cra 9 #14-20. Estamos disponibles para atenderte de lunes a viernes.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {card.link ? (
                <a
                  href={card.link}
                  className="block p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#0a1628] text-sm mb-1">{card.title}</h4>
                  <p className="text-gray-500 text-sm">{card.content}</p>
                </a>
              ) : (
                <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#0a1628] text-sm mb-1">{card.title}</h4>
                  <p className="text-gray-500 text-sm">{card.content}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63693.77102768262!2d-75.68!3d5.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4785e3e539e0dd%3A0x85bb2c1dca5a0b6e!2sChinchin%C3%A1%2C%20Caldas!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Edificando Ingenieros - Ubicación"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
