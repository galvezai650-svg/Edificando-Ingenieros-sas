'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import { blogPosts } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ChevronRight,
  Clock,
  User,
  ArrowRight,
  Send,
  BookOpen,
  Sparkles,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getAuthorInitials(name: string) {
  return name
    .split(' ')
    .filter((_, i) => i === 0 || i === name.split(' ').length - 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-80px' })

  const publishedPosts = blogPosts.filter((p) => p.published)
  const featuredPost = publishedPosts.find((p) => p.featured)
  const regularPosts = publishedPosts.filter((p) => !p.featured)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand rounded-full blur-[128px]" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-dark rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/" className="hover:text-brand-light transition-colors duration-300">
                Inicio
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-light font-medium">Blog</span>
            </nav>

            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-brand-light" />
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog &{' '}
              <span className="bg-gradient-to-r from-brand-light to-brand-lighter bg-clip-text text-transparent">
                Artículos
              </span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Artículos de interés, guías técnicas y novedades del sector de la construcción para mantenerle informado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4"
            >
              <div className="flex items-center gap-2 text-sm text-brand-dark font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Artículo Destacado
              </div>
            </motion.div>

            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-1 border border-gray-100"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-brand/90 backdrop-blur-sm text-white border-0 px-3 py-1 text-xs font-semibold">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-4 group-hover:text-brand-dark transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white text-xs font-bold">
                          {getAuthorInitials(featuredPost.author)}
                        </div>
                        <span className="font-medium text-gray-700">{featuredPost.author}</span>
                      </div>
                      <span className="text-gray-300">|</span>
                      <span>{formatDate(featuredPost.createdAt)}</span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-10"
          >
            Publicaciones Recientes
          </motion.h2>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post, i) => (
              <motion.div
                key={post.id}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeUp}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col border border-gray-100">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-brand/90 backdrop-blur-sm text-white border-0 text-xs px-2.5 py-0.5">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-[#0a1628] text-lg mb-3 group-hover:text-brand-dark transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white text-[10px] font-bold">
                            {getAuthorInitials(post.author)}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-700">{post.author}</p>
                            <p className="text-[11px] text-gray-400">{formatDate(post.createdAt)}</p>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-dark rounded-full blur-[180px]" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-brand-light" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
              Suscríbase a Nuestro Boletín Informativo
            </h2>
            <p className="text-white/60 text-base mb-8">
              Reciba artículos, guías técnicas y novedades del sector de la construcción directamente en su correo electrónico.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-full px-5 h-12 focus:border-brand/50 focus:ring-brand/20"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand-700 text-white px-6 h-12 rounded-full font-semibold shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-all duration-300 whitespace-nowrap"
              >
                Suscribirse
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
            <p className="text-white/30 text-xs mt-4">
              No enviamos correo no deseado. Podrá darse de baja en cualquier momento.
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
