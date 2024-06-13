import Hello from './Hello'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="w-1/6 h-screen border-r-[2px] flex flex-col border-gray-300">
        <Hello name="ashfaq" />
        <div>
          <ul>
            <Link to={'/tasks'}>
              <li>Tasks</li>
            </Link>
            <a>
              <li>Dashboard</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
