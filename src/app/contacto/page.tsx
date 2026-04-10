'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { toast } from 'sonner'

const ease = [0.16, 1, 0.3, 1] as const
const duration = 0.7

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Dirección',
    lines: ['Cra 9 #14-20'],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Teléfono',
    lines: ['310 887 0044'],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    lines: ['contacto@edificandoingenierossas.com'],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Horario',
    lines: ['Lunes a viernes: 8:00 - 18:00', 'Sábados: 9:00 - 13:00'],
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function validate() {
    const newErrors: Record<string, string> = {}
    if (!formData.nombre.trim()) newErrors.nombre = 'Es necesario indicar su nombre'
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Dirección de correo electrónico no válida'
    }
    if (!formData.asunto) newErrors.asunto = 'Seleccione un asunto'
    if (!formData.mensaje.trim()) newErrors.mensaje = 'Es necesario incluir un mensaje'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        toast.success('Mensaje enviado con éxito', {
          description: 'Nos pondremos en contacto con usted a la mayor brevedad posible.',
        })
        setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
        setErrors({})
      } else {
        toast.error('Error en el envío', {
          description: 'Le rogamos lo intente nuevamente más tarde.',
        })
      }
    } catch {
      toast.error('Sin conexión a la red', {
        description: 'Le sugerimos verificar su conexión a internet.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleChange(field: string, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

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
              <span className="text-white/70">Contacto</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-6">
              Contáct<span className="text-brand-light">enos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Nos complace poner nuestra firma a su entera disposición. Cuéntenos acerca de su proyecto y le brindaremos respuesta a la mayor brevedad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ease, duration }}
              className="lg:col-span-2"
            >
              <Card className="bg-white border-0 shadow-lg rounded-3xl p-8 md:p-10">
                <CardContent className="p-0">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-2">
                    Remita su consulta
                  </h2>
                  <p className="text-gray-500 mb-8">Diligencie el formulario adjunto y le responderemos en un plazo no superior a veinticuatro horas.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre" className="text-[#0a1628] font-medium">
                          Nombre <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="nombre"
                          placeholder="Su nombre completo"
                          value={formData.nombre}
                          onChange={e => handleChange('nombre', e.target.value)}
                          className={`rounded-xl h-12 ${errors.nombre ? 'border-red-400 focus-visible:ring-red-400' : 'focus-visible:ring-brand'}`}
                        />
                        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#0a1628] font-medium">
                          Correo Electrónico <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="su@email.com"
                          value={formData.email}
                          onChange={e => handleChange('email', e.target.value)}
                          className={`rounded-xl h-12 ${errors.email ? 'border-red-400 focus-visible:ring-red-400' : 'focus-visible:ring-brand'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="telefono" className="text-[#0a1628] font-medium">
                          Teléfono
                        </Label>
                        <Input
                          id="telefono"
                          placeholder="+57 300 000 0000"
                          value={formData.telefono}
                          onChange={e => handleChange('telefono', e.target.value)}
                          className="rounded-xl h-12 focus-visible:ring-brand"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[#0a1628] font-medium">
                          Asunto <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.asunto}
                          onValueChange={v => handleChange('asunto', v)}
                        >
                          <SelectTrigger className={`w-full rounded-xl h-12 ${errors.asunto ? 'border-red-400' : ''}`}>
                            <SelectValue placeholder="Seleccione un asunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cotizacion">Solicitud de Cotización</SelectItem>
                            <SelectItem value="consulta">Consulta General</SelectItem>
                            <SelectItem value="soporte">Asistencia Técnica</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.asunto && <p className="text-red-500 text-sm">{errors.asunto}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje" className="text-[#0a1628] font-medium">
                        Mensaje <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntenos acerca de su proyecto o consulta..."
                        rows={5}
                        value={formData.mensaje}
                        onChange={e => handleChange('mensaje', e.target.value)}
                        className={`rounded-xl resize-none ${errors.mensaje ? 'border-red-400 focus-visible:ring-red-400' : 'focus-visible:ring-brand'}`}
                      />
                      {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand hover:bg-brand-dark text-white rounded-full px-8 h-12 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Consulta
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ease, duration }}
              className="space-y-6"
            >
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease, duration, delay: i * 0.1 }}
                >
                  <Card className="bg-white border-0 shadow-lg rounded-3xl p-6 hover:shadow-xl transition-shadow duration-500">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-dark shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0a1628] mb-1">{info.title}</h3>
                          {info.lines.map((line, li) => (
                            <p key={li} className="text-gray-600 text-sm">{line}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration, delay: 0.4 }}
              >
                <a
                  href="https://wa.me/573108870044"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="bg-[#25D366] border-0 rounded-3xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                          <MessageCircle className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">WhatsApp</h3>
                          <p className="text-white/80 text-sm">Comuníquese con nosotros</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ease, duration }}
            className="text-center mb-12"
          >
            <Badge className="bg-brand-100 text-brand-700 hover:bg-brand-100 mb-4">
              Ubicación
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Nuestras Oficinas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Le invitamos a visitar nuestras oficinas en Cra 9 #14-20. Nuestro equipo se encuentra siempre a su disposición para atenderle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ease, duration }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15905.683!2d-75.6167!3d5.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4681c3c0e1c5e7%3A0x8e4681c3c0e1c5e7!2sChinchin%C3%A1%2C%20Caldas!5e0!3m2!1ses!2sco!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
