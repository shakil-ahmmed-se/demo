'use client'

import { useParams } from 'next/navigation';
import React from 'react'

export default function ProjectDetailPage() {
    const { projectId } = useParams()
    console.log(projectId);

  return (
    <div>
      <h1>Project Detail Page</h1>
      <p>Project ID: {projectId}</p>
    </div>
  )
}
