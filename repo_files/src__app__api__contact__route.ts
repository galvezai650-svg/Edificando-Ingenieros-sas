import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      )
    }

    const contactMessage = await db.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      },
    })

    return NextResponse.json(
      { success: true, id: contactMessage.id },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
}
