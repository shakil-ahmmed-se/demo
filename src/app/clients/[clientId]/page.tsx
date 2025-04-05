'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function ClientPage() {
    const { clientId } = useParams()
  return (
    <div>
        <h1>Client Detail Page</h1>
        <p>Client ID: {clientId}</p>
    </div>
  )
}
