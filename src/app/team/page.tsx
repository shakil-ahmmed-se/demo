import TopProjectCards from '@/components/dashboard/TopProjectCard'
import TeamMemberTable from '@/components/team/TeamMemberTable'
import React from 'react'

export default function page() {
  return (
    <div className='flex-1 justify-center items-center w-full h-full overflow-x-hidden scrollbar-hide'>
      <TopProjectCards/>
      <TeamMemberTable/>
    </div>
  )
}
