'use client'

import { useState, useCallback, useSyncExternalStore } from 'react'

function getFavoritesSnapshot(): string[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem('edificando-favorites')
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  }
  return []
}

function getServerSnapshot(): string[] {
  return []
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(getFavoritesSnapshot)

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
      localStorage.setItem('edificando-favorites', JSON.stringify(updated))
      window.dispatchEvent(new Event('storage'))
      return updated
    })
  }, [])

  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites])
  const getFavoritesCount = useCallback(() => favorites.length, [favorites])

  return { favorites, toggleFavorite, isFavorite, getFavoritesCount }
}
