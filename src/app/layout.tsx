import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edificando Ingenieros | Construcción e Ingeniería en Colombia",
  description: "Empresa líder en ingeniería y construcción en Colombia. +10 años de experiencia en obras civiles, infraestructura urbana, vivienda y proyectos comerciales.",
  keywords: ["construcción Colombia", "ingeniería civil", "obras civiles", "infraestructura urbana", "constructora Bogotá", "vivienda campestre"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
