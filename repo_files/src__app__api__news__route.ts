import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const news = await db.news.findMany({
      where: { active: true },
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
      take: 10,
    })

    return NextResponse.json(news)
  } catch {
    return NextResponse.json([])
  }
}
