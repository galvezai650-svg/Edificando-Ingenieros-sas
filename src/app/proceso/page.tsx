'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Lightbulb,
  PenTool,
  Hammer,
  Key,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Shield,
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  Zap,
  FileText,
} from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const
const duration = 0.7

const stepIcons: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-7 h-7" />,
  PenTool: <PenTool className="w-7 h-7" />,
  Hammer: <Hammer className="w-7 h-7" />,
  Key: <Key className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
}

const expandedSteps = [
  {
    number: 1,
    icon: 'Lightbulb',
    title: 'Conociendo su Idea',
    description: 'Escuchamos sus ideas y le asesoramos para dar forma al proyecto. Analizamos sus necesidades, presupuesto y plazos.',
    fullDescription:
      'En esta primera etapa, nuestro equipo se reúne con usted para escuchar sus ideas y comprender a profundidad sus necesidades. Le asesoramos para dar forma al proyecto, analizando la viabilidad técnica, evaluando las condiciones del terreno, definiendo presupuesto y plazos estimados. Es un espacio de diálogo abierto donde su visión se convierte en el punto de partida de un proyecto exitoso.',
  },
  {
    number: 2,
    icon: 'PenTool',
    title: 'Ante-proyecto',
    description: 'Realizamos diseños con la normativa vigente y elaboramos un presupuesto detallado y transparente.',
    fullDescription:
      'Con base en sus ideas, realizamos los primeros diseños y bocetos del proyecto. Todos los planos se desarrollan cumpliendo la normativa vigente (NSR-10, RAS, INVIAS). Paralelamente, elaboramos un presupuesto detallado y transparente que le permite tomar decisiones informadas sobre la inversión.',
  },
  {
    number: 3,
    icon: 'FileText',
    title: 'Culminación de Diseños',
    description: 'Exponemos el proyecto completo, permitimos modificaciones y ofrecemos asesoría permanente para su aprobación.',
    fullDescription:
      'Presentamos el proyecto completo con planos detallados, memorias de cálculo, renders 3D y especificaciones técnicas. Permitimos modificaciones y ajustes hasta que usted quede completamente satisfecho con el resultado. Nuestro equipo de ingenieros le ofrece asesoría permanente para resolver cualquier inquietud técnica.',
  },
  {
    number: 4,
    icon: 'Shield',
    title: 'Licencias y Permisos',
    description: 'Gestionamos ante las entidades pertinentes la obtención de todos los avales y permisos necesarios.',
    fullDescription:
      'Nos encargamos de todo el proceso de licenciamiento ante las entidades competentes: Curadurías Urbanas, Secretarías de Planeación, Corporaciones Autónomas Regionales y demás autoridades. Gestionamos licencias de construcción, aprobaciones ambientales, permisos de intervenciones en vías y todos los trámites necesarios.',
  },
  {
    number: 5,
    icon: 'Hammer',
    title: 'Construcción',
    description: 'Ejecución de actividades con equipo capacitado y seguimiento continuo de calidad y avances.',
    fullDescription:
      'Con los permisos obtenidos y los planos aprobados, iniciamos la construcción. Contamos con un equipo de profesionales capacitados que ejecuta cada actividad con los más altos estándares de calidad y seguridad. Implementamos un sistema de seguimiento continuo con reportes de avance periódicos para que usted permanezca siempre informado del estado de su proyecto.',
  },
  {
    number: 6,
    icon: 'Key',
    title: 'Entrega',
    description: 'Recorrido final, entrega de estudios, planos, registro fotográfico y garantías por escrito.',
    fullDescription:
      'Realizamos un recorrido final conjunto para verificar cada detalle de la obra. Le entregamos todos los estudios, planos, memorias técnicas y el registro fotográfico completo del proceso. Formalizamos las garantías por escrito y le capacitamos sobre el uso y mantenimiento de las instalaciones. Nuestro compromiso no termina con la entrega: ofrecemos soporte post-venta.',
  },
]

const faqs = [
  {
    question: '¿Cuánto tiempo toma un proyecto de construcción?',
    answer: 'El tiempo varía según la complejidad y envergadura del proyecto. Una vivienda puede tomar entre 8 y 16 meses, mientras que proyectos de infraestructura pueden extenderse de 12 a 36 meses. En la consulta inicial le proporcionamos un cronograma detallado y realista.',
  },
  {
    question: '¿Qué garantías ofrecen en sus proyectos?',
    answer: 'Ofrecemos garantía estructural de 10 años conforme a la ley colombiana, además de garantía de acabados de 2 años. Proporcionamos manuales de mantenimiento y ofrecemos servicio de soporte post-venta para cualquier consulta o necesidad posterior a la entrega.',
  },
  {
    question: '¿Trabajan con proyectos de cualquier tamaño?',
    answer: 'Sí, manejamos proyectos de todas las escalas: desde remodelaciones y viviendas unifamiliares hasta grandes complejos residenciales e infraestructura urbana. Adaptamos nuestros equipos y procesos según las necesidades específicas de cada proyecto.',
  },
  {
    question: '¿Cómo es el proceso de cotización?',
    answer: 'Es simple y sin costo. Contáctenos por nuestro formulario, WhatsApp o teléfono. Agendamos una reunión para conocer su proyecto, realizamos un análisis preliminar y en un plazo de 5 a 10 días hábiles le entregamos una cotización detallada y transparente.',
  },
  {
    question: '¿Ofrecen financiamiento o planes de pago?',
    answer: 'Trabajamos con múltiples opciones de financiamiento. Podemos conectarle con entidades bancarias aliadas que ofrecen tasas preferenciales para proyectos de construcción. También ofrecemos esquemas de pagos por etapas durante la ejecución del proyecto.',
  },
  {
    question: '¿Qué permisos y licencias gestionan?',
    answer: 'Nos encargamos de todo el proceso de licenciamiento ante las autoridades competentes: licencias de construcción, aprobaciones ambientales, diseños técnicos aprobados, certificados de habitabilidad y todos los trámites necesarios para que su proyecto cumpla con la normativa vigente.',
  },
]

const differentiators = [
  { icon: <Shield className="w-6 h-6" />, title: 'Normativas al día', description: 'Cumplimiento total de regulaciones colombianas e internacionales' },
  { icon: <Clock className="w-6 h-6" />, title: 'Puntualidad garantizada', description: 'Cronogramas detallados con cumplimiento superior al 95%' },
  { icon: <Users className="w-6 h-6" />, title: 'Equipo especializado', description: '35+ ingenieros con certificaciones y experiencia comprobada' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Transparencia total', description: 'Reportes de avance semanales y control de presupuesto en tiempo real' },
  { icon: <MessageSquare className="w-6 h-6" />, title: 'Comunicación constante', description: 'Canal directo con el equipo de proyecto en todo momento' },
  { icon: <Zap className="w-6 h-6" />, title: 'Tecnología avanzada', description: 'BIM, modelado 3D y software de gestión de proyectos de última generación' },
]

export default function ProcesoPage() {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
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
              <span className="text-white/70">Proceso</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestro <span className="text-brand-light">Proceso</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Un proceso estructurado, transparente y eficiente que garantiza el éxito de su proyecto desde la primera reunión hasta la entrega final.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ease, duration }}
            className="text-center mb-20"
          >
            <Badge className="bg-brand-100 text-brand-700 hover:bg-brand-100 mb-4">
              Metodología
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              6 pasos hacia su proyecto ideal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Cada fase está diseñada para asegurar calidad, eficiencia y comunicación constante.
            </p>
          </motion.div>

          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-brand-200 z-0" />

            <div className="grid lg:grid-cols-6 gap-6 relative z-10">
              {expandedSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ ease, duration, delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    {/* Circle with number */}
                    <div className="w-20 h-20 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand/30 relative">
                      <div className="text-white font-bold text-2xl">{step.number}</div>
                      {i < expandedSteps.length - 1 && (
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-brand-lighter hidden lg:block">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {/* Icon */}
                    <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-dark">
                      {stepIcons[step.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.fullDescription}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-200" />
            <div className="space-y-12">
              {expandedSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ ease, duration, delay: i * 0.15 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center shadow-lg shadow-brand/30">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-dark mb-3">
                    {stepIcons[step.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.fullDescription}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
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
              Nuestra Diferencia
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Qué nos hace diferentes?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Cada aspecto de nuestro proceso está optimizado para garantizar su tranquilidad y el éxito de su inversión.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ ease, duration, delay: i * 0.1 }}
              >
                <Card className="bg-[#0f2340]/80 border-brand/10 rounded-2xl p-5 backdrop-blur-sm hover:border-brand/30 transition-colors duration-500">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand/20 rounded-xl flex items-center justify-center text-brand-light shrink-0">
                        {diff.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{diff.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{diff.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Preguntas Frecuentes
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              ¿Tiene alguna duda?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Resolvemos las preguntas más comunes sobre nuestro proceso de construcción.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ease, duration }}
            >
              <Card className="bg-white border-0 shadow-lg rounded-3xl p-6 md:p-8">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="border-gray-100">
                        <AccordionTrigger className="text-[#0a1628] font-semibold text-left hover:no-underline py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
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
              Inicie su proyecto <span className="text-brand-light">hoy</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Dé el primer paso hacia el proyecto de sus sueños. Agende su consulta inicial sin costo ni compromiso.
            </p>
            <Button asChild size="lg" className="bg-brand hover:bg-brand-dark text-white rounded-full px-10 text-lg h-14">
              <Link href="/contacto">
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
