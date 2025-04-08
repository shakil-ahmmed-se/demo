'use client'
import TopProjectCards from '@/components/dashboard/TopProjectCard'
import ProjectTable from '@/components/projects/AllProject-2'
import { DataTableDemo } from '@/components/projects/AllProjects'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoReturnUpBackOutline } from 'react-icons/io5'

export default function ProjectsPage() {
  const route = useRouter()
  return (
    <div className='flex-1 justify-center items-center w-full h-full'>
    {/* // <div className='flex flex-col min-h-screen w-full'> */}
     <button
       onClick={()=> route.back()}
        className="text-[#238DB2] flex font-extrabold gap-x-1 mx-6 mt-5 cursor-pointer"
      >
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Projects</span>
      </button>
      <TopProjectCards/>
      {/* <DataTableDemo/> */}
      <ProjectTable title={'All Projects'}/>
    </div>
  )
}
