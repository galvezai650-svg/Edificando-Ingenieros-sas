import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      nombre, email, telefono, ciudad, tipoProyecto,
      presupuesto, area, ubicacion, descripcion, plazo,
    } = body

    if (!nombre || !email || !telefono || !ciudad || !tipoProyecto || !ubicacion || !descripcion) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben ser completados' },
        { status: 400 }
      )
    }

    const quote = await db.quote.create({
      data: {
        nombre,
        email,
        telefono,
        ciudad,
        tipoProyecto,
        presupuesto: presupuesto || null,
        area: area || null,
        ubicacion,
        descripcion,
        plazo: plazo || null,
      },
    })

    return NextResponse.json(
      { success: true, id: quote.id },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar la cotización' },
      { status: 500 }
    )
  }
}
