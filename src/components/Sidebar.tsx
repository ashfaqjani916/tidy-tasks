import React from 'react'
import Link from 'next/link'
import '@/styles/sidebar.css'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CiInboxIn } from 'react-icons/ci'
import { IoTodayOutline } from 'react-icons/io5'
import { LuCalendarClock } from 'react-icons/lu'
import { MdSchedule } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className="w-1/5 h-full sidebar p-4">
      <Link href={'/home'}>
        <div className="logo-header flex   items-center  text-[var(--text-color)] ">
          <Avatar style={{ height: '50px', width: '50px' }}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-[var(--text-color)] text-[30px] pl-5 font-custom">Task Tide</h1>
        </div>
      </Link>

      <div className="buttons text-[ivory] text-xl mt-10 font-bold">
        <Link href="/home/inbox">
          <div className="flex  items-center p-5 hover:border-l-8">
            <CiInboxIn className="text-[var(--text-color)] text-3xl mr-3" />
            Inbox
          </div>
        </Link>
        <Link href={'/home/today'}>
          <div className="flex  items-center p-5 hover:border-l-8">
            <IoTodayOutline className="text-[var(--text-color)] text-3xl mr-3" />
            Today
          </div>
        </Link>

        <Link href={'/home/upcoming'}>
          <div className="flex  items-center p-5 hover:border-l-8">
            <LuCalendarClock className="text-[var(--text-color)] text-3xl mr-3" />
            Upcoming
          </div>
        </Link>
        <Link href={'/home/schedule'}>
          <div className="flex  items-center p-5 hover:border-l-8">
            <MdSchedule className="text-[var(--text-color)] text-3xl mr-3" />
            Schedule Meeting
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
