'use client'

import { ReactNode } from 'react'
import { Navigation } from './Navigation'
import { Footer, WhatsAppButton, ScrollToTopButton } from './Footer'
import { PageLoader } from '@/components/PageLoader'
import { CookieBanner } from '@/components/CookieBanner'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
      <CookieBanner />
    </div>
  )
}
