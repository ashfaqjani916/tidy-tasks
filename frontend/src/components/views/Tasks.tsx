import TemporaryDrawer from '../Drawer'
import Item from '../Item'
import { Button } from '../ui/button'
import { CiFilter } from 'react-icons/ci'

const Tasks = () => {
  return (
    <div className='flex'>
      <TemporaryDrawer />
      <div className="">
        <h1 className=" text-3xl mt-10 md:mx-20 pb-5 border-b-2 border-gray-00 ">All tasks</h1>
        <div className="flex gap-4 md:mx-20 mt-4">
          <Button className=" bg-blue-900 hover:bg-blue-700 rounded-lg"> + New task</Button>
          <Button className=" bg-white text-black hover:bg-slate-300 rounded-lg">
            <CiFilter />
            Filter
          </Button>
        </div>
        <div className=" mx-20 mt-5 p-4 overflow-auto">
          <Item name="Loading design" description="design some questions for the prediction thingy" due={new Date(2024, 6, 21)} category="designing" />
          <Item name="finish this porject" description="this is an important task dude" due={new Date(2024, 6, 18)} category="coding" />
        </div>
      </div>
    </div>
  )
}

export default Tasks
