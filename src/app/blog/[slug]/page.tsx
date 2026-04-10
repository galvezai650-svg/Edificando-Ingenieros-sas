'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { blogPosts } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  ChevronRight,
  Clock,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Share2,
  MapPin,
  MessageCircle,
  Twitter,
  Facebook,
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

function parseContent(content: string) {
  const blocks = content.split('\n\n')
  return blocks.map((block, i) => {
    const trimmed = block.trim()

    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={i} className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mt-10 mb-4">
          {parseInlineMarkdown(trimmed.slice(4))}
        </h3>
      )
    }

    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mt-12 mb-5">
          {parseInlineMarkdown(trimmed.slice(3))}
        </h2>
      )
    }

    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter((l) => l.trim().startsWith('- '))
      return (
        <ul key={i} className="space-y-3 my-5 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0" />
              <span>{parseInlineMarkdown(item.trim().slice(2))}</span>
            </li>
          ))}
        </ul>
      )
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n').filter((l) => /^\d+\.\s/.test(l.trim()))
      return (
        <ol key={i} className="space-y-3 my-5 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-dark text-xs font-bold flex items-center justify-center mt-0.5 flex-shrink-0">
                {j + 1}
              </span>
              <span>{parseInlineMarkdown(item.trim().replace(/^\d+\.\s/, ''))}</span>
            </li>
          ))}
        </ol>
      )
    }

    if (trimmed.length > 0) {
      return (
        <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">
          {parseInlineMarkdown(trimmed)}
        </p>
      )
    }

    return null
  })
}

function parseInlineMarkdown(text: string) {
  // Split by **bold** patterns
  const parts = text.split(/\*\*(.*?)\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#0a1628]">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export default function BlogArticlePage() {
  const params = useParams()
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.published)
    .slice(0, 2)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = encodeURIComponent(post.title)

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <section className="bg-[#0a1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-sm"
          >
            <Link href="/" className="text-white/50 hover:text-brand-light transition-colors duration-300">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <Link href="/blog" className="text-white/50 hover:text-brand-light transition-colors duration-300">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="text-brand-light font-medium truncate max-w-xs">{post.title}</span>
          </motion.nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-[#0a1628] pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <Badge className="bg-brand/20 text-brand-light border border-brand/30 px-3 py-1 text-xs font-semibold mb-6">
              {post.category}
            </Badge>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-brand/25">
                  {getAuthorInitials(post.author)}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{post.author}</p>
                  <p className="text-white/40 text-xs">{post.authorRole}</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="flex items-center gap-4 text-white/40 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.createdAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} de lectura
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="-mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/20"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="prose-custom"
          >
            {parseContent(post.content)}
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-500">Categoría:</span>
              <Badge className="bg-brand-50 text-brand-700 border border-brand-100 px-3 py-1 text-sm">
                {post.category}
              </Badge>
            </div>
          </motion.div>

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-8"
          >
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Share2 className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Compartir artículo</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-10">
                Artículos Relacionados
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((related, i) => (
                  <motion.div
                    key={related.id}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <Link href={`/blog/${related.slug}`} className="group block">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-brand/90 backdrop-blur-sm text-white border-0 text-xs px-2.5 py-0.5">
                              {related.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-[#0a1628] text-base mb-2 group-hover:text-brand-dark transition-colors duration-300 line-clamp-2">
                            {related.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
                            {related.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span>{formatDate(related.createdAt)}</span>
                            <span className="text-gray-200">|</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {related.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand rounded-full blur-[200px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Requiere asesoría profesional?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Nuestro equipo de expertos se encuentra preparado para brindarle la orientación que requiera para su próximo proyecto.
            </p>
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand-700 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-all duration-300 hover:scale-105"
              >
                Contáctanos
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-700 font-medium transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Volver al Blog
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
