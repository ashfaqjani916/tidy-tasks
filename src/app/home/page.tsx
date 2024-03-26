import Sidebar from '@/components/Sidebar'
import Tasks from '@/components/Tasks'
import React from 'react'

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Tasks />
    </div>
  )
}

export default page
