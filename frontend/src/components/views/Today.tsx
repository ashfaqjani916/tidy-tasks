import Item from '../Item'
import { Button } from '../ui/button'
import { CiFilter } from 'react-icons/ci'

const Today = () => {
  return (
    <div className="  w-[90rem]  ">
      <h1 className=" text-3xl mt-10 mx-20 pb-5 border-b-2 border-gray-00 ">Today</h1>
      <div className="flex gap-4 mx-20 mt-4">
        <Button className=" bg-blue-900 hover:bg-blue-700 rounded-lg"> + New task</Button>
        <Button className=" bg-white text-black hover:bg-slate-300 rounded-lg">
          <CiFilter />
          Filter
        </Button>
      </div>
      <div className=" mx-20 mt-5 p-4 overflow-auto">
        <Item name="finish this porject" />
        <Item name="finish this porject" />
      </div>
    </div>
  )
}

export default Today
