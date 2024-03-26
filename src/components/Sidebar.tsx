import React from 'react'
import '@/styles/sidebar.css'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Sidebar = () => {
  return (
    <div className="w-1/5 h-full sidebar">
      <div className="logo-header">
        <Avatar style={{ height: '50px', width: '50px' }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Sidebar
