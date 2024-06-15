import Sidebar from '../components/Sidebar'
import { ReactNode } from 'react'

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default Mainlayout
