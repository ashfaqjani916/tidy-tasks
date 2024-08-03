
import { ReactNode } from 'react'

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <main>{children}</main>
    </div>
  )
}

export default Mainlayout
