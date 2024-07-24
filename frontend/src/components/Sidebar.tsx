import Hello from './Hello';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaTasks } from 'react-icons/fa';
import { AiOutlineProject } from 'react-icons/ai';
import { useState } from 'react';
import Modal from 'react-modal';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle open/closed state
  };

  const closeSidebar = () => {
    setIsOpen(false); // Explicitly set state to close
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleSidebar} // Trigger toggleSidebar for flexibility
        contentLabel="Sidebar"
      >
        <div className={`fixed md:relative top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}>
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Hello name="ashfaq" />
            <ul className="space-y-2 font-medium text-lg">
              <Link to="/">
                <li className="py-2 px-5 rounded-md flex gap-2 items-center hover:text-gray-600">
                  <FaCalendarCheck /> Inbox/Today
                </li>
              </Link>
              <Link to="/tasks">
                <li className="py-2 px-5 rounded-md flex gap-2 items-center hover:text-gray-600">
                  <FaTasks /> Tasks
                </li>
              </Link>
              {/* Add more links... */}
            </ul>
            <button onClick={closeSidebar} className="mt-4 text-sm text-gray-500 hover:text-gray-600 focus:outline-none">
              Close Sidebar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
