import { useState } from 'react'
import Item from '../Item'
import { Button } from '../ui/button'

import InpDialog from '../InpDialog'
import TemporaryDrawer from '../Drawer'


const Today = () => {
  const [handle, setHandle] = useState(false)
  const inpHandle = () => {
    setHandle(!handle)
  }
  return (
    <div className=" relative  w-full h-screen  ">
      <div className='flex items-center justify-between  border-b-2 m-5 md:mt-10 md:mx-20 md:pb-5  border-gray-00'>
        <TemporaryDrawer />
        <h1 className="text-5xl font-bold text-[#42b883] font-handlee  ">Today</h1>
      </div>

      <div className=" h-full p-3 md:px-24 mt-5 ">

        <Item name="Loading design" description="design some questions for the prediction thingy" due={new Date(2024, 6, 21)} category="designing" />

        <Item name="finish this porject" description="this is an important task dude" due={new Date(2024, 6, 18)} category="coding" />
        {handle && <InpDialog state={inpHandle} />}
        <div className=" flex  justify-end  ml-72 mt-5  md:mx-20 md:mt-4">
          <Button className=" bg-[#4D89AD]  hover:bg-blue-700 rounded-lg" onClick={inpHandle}>
            {!handle ? "Add Task" : "Close"}
          </Button>
        </div>
      </div>


    </div>
  )
}

export default Today
