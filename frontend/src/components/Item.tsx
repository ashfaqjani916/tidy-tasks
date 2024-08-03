import { Checkbox } from './ui/checkbox'
import { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
// import { TbCategory2 } from 'react-icons/tb'

interface props {
  name: string
  description: string
  due: Date
  category: string
}

const Item = (task: props) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  const date = task.due.toString().split(' ')
  return (
    <div className={isChecked ? 'flex gap-5 items-center p-3 mb-3 rounded-lg shadow-md bg-slate-100' : 'flex gap-5 items-center p-3 mb-3 rounded-lg shadow-md'}>
      <Checkbox className="rounded-sm h-5 w-5 " checked={isChecked} onClick={handleCheckboxChange} />
      <div className="flex flex-col">
        <h1 className={isChecked ? 'line-through' : ''}>{task.name}</h1>
        {!isChecked ? (
          <div>
            <p className=" text-sm text-gray-700 ">{task.description}</p>
            <div className="flex gap-5 items-center pt-1">
              <h6 className=" text-orange-400 rounded-lg flex gap-2 items-center  ">
                <CiCalendar className=" text-xl font-bold" />
                {date[1]} {date[2]}, {date[3]}
              </h6>
              {/* <p className=" flex items-center gap-2  text-purple-500 bg-purple-100 px-2  rounded-lg">
                <TbCategory2 />
                {task.category}
              </p> */}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Item
