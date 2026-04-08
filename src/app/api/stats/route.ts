import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Upsert: increment view count
    const stats = await db.siteStats.upsert({
      where: { id: 'main' },
      update: {
        viewCount: { increment: 1 },
      },
      create: {
        id: 'main',
        viewCount: 1,
      },
    })

    return NextResponse.json({ views: stats.viewCount })
  } catch {
    return NextResponse.json({ views: 0 })
  }
}
