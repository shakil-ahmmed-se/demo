import TopProjectCards from '@/components/dashboard/TopProjectCard'
import ProjectTable from '@/components/projects/AllProject-2'
import { DataTableDemo } from '@/components/projects/AllProjects'
import React from 'react'

export default function ProjectsPage() {
  return (
    <div className=' flex-1 justify-center items-center w-full h-full '>
      <TopProjectCards/>
      {/* <DataTableDemo/> */}
      <ProjectTable/>
    </div>
  )
}
