import Hello from './Hello'
import { Link, Outlet } from 'react-router-dom'
import { FaCalendarCheck, FaTasks } from 'react-icons/fa'
import { AiOutlineProject } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="flex rounded-lg">
      <div className="w-[250px] h-screen border-r-[2px] flex flex-col border-gray-300">
        <Hello name="ashfaq" />
        <div className=" border-t-[2px] border-gray-300 py-5 text-xl ">
          <ul className="">
            <Link to={'/'}>
              <li className="py-2 px-5 rounded-md flex gap-2 items-center hover:text-gray-600 ">
                <FaCalendarCheck />
                Inbox/Today
              </li>
            </Link>
            <Link to={'/tasks'}>
              <li className="py-2 px-5 rounded-md flex gap-2 items-center hover:text-gray-600 ">
                <FaTasks />
                Tasks
              </li>
            </Link>
            <Link to={'/projects'}>
              <li className="py-2 px-5 rounded-md flex gap-2 items-center hover:text-gray-600 ">
                <AiOutlineProject />
                Projects
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Sidebar
