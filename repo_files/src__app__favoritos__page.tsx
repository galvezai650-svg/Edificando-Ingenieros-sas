'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  MapPin,
  Calendar,
  Trash2,
  ChevronRight,
  ArrowRight,
  Search,
  BookmarkX,
  Building2,
} from 'lucide-react'
import { useFavorites } from '@/hooks/useFavorites'
import { projects } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const
const duration = 0.7

export default function FavoritosPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  const favoriteProjects = projects.filter(p => favorites.includes(p.id))

  const hasFavorites = favoriteProjects.length > 0

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
              <span className="text-white/70">Favoritos</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-6">
              Mis <span className="text-brand-light">Favoritos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Aquí encuentras todos los proyectos que has guardado para revisar más adelante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Favorites Content */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          {hasFavorites ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration }}
                className="flex items-center justify-between mb-10"
              >
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628]">
                    {favoriteProjects.length} {favoriteProjects.length === 1 ? 'proyecto guardado' : 'proyectos guardados'}
                  </h2>
                  <p className="text-gray-500 mt-1">Tus proyectos seleccionados</p>
                </div>
                <Badge variant="secondary" className="bg-brand-100 text-brand-700 text-sm rounded-full px-4 py-1.5">
                  <Heart className="w-3.5 h-3.5 mr-1.5 fill-brand text-brand" />
                  {favoriteProjects.length}
                </Badge>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoriteProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ ease, duration, delay: i * 0.1 }}
                  >
                    <Card className="bg-white border-0 shadow-lg rounded-3xl overflow-hidden h-full group hover:shadow-2xl transition-all duration-500">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-[#0a1628] hover:bg-white/90 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <button
                          onClick={() => toggleFavorite(project.id)}
                          className="absolute top-4 right-4 w-10 h-10 bg-red-500/90 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                          aria-label="Eliminar de favoritos"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {project.location}
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {project.year}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {project.client}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.highlights.slice(0, 3).map(h => (
                            <Badge key={h} variant="secondary" className="bg-gray-100 text-gray-600 text-xs rounded-full font-normal">
                              {h}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease, duration }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ ease, duration, delay: 0.2 }}
                className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8"
              >
                <BookmarkX className="w-12 h-12 text-gray-300" />
              </motion.div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-4">
                No tienes favoritos guardados
              </h2>
              <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg">
                Explora nuestros proyectos y guarda los que más te gusten haciendo clic en el corazón.
              </p>
              <Button asChild className="bg-brand hover:bg-brand-dark text-white rounded-full px-8 h-12">
                <Link href="/">
                  <Search className="w-4 h-4 mr-2" />
                  Explorar Proyectos
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}
