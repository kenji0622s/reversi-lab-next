import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ status: 'OK' })
}

export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({ status: 'OK', data })
}

