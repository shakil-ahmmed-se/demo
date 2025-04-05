import ClientTable from '@/components/clients/ClientTable'
import TopProjectCards from '@/components/dashboard/TopProjectCard'
import React from 'react'

export default function ClientPage() {
  return (
    <div className='flex-1 justify-center items-center w-full h-full'>
        <TopProjectCards/>
      <ClientTable/>
    </div>
  )
}
