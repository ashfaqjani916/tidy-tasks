import { useState } from 'react'
import Item from '../Item'
import { Button } from '../ui/button'
import { CiFilter } from 'react-icons/ci'
import InpDialog from '../InpDialog'

const Today = () => {
  const [handle, setHandle] = useState(false)
  const inpHandle = () => {
    setHandle(!handle)
  }
  return (
    <div className=" md:relative md:w-[90rem]  ">
      <h1 className=" text-3xl mt-10 mx-20 pb-5 border-b-2 border-gray-00 ">Today</h1>
      <div className="flex gap-4 mx-20 mt-4">
        <Button className=" bg-blue-900 hover:bg-blue-700 rounded-lg" onClick={inpHandle}>
          + New task
        </Button>
        <Button className=" bg-white text-black hover:bg-slate-300 rounded-lg">
          <CiFilter />
          Filter
        </Button>
      </div>
      <div className=" mx-20 mt-5 p-4 overflow-auto">
        {handle && <InpDialog state={inpHandle} />}
        <Item name="Loading design" description="design some questions for the prediction thingy" due={new Date(2024, 6, 21)} category="designing" />
        <Item name="finish this porject" description="this is an important task dude" due={new Date(2024, 6, 18)} category="coding" />
      </div>
    </div>
  )
}

export default Today
