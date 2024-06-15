import { Checkbox } from './ui/checkbox'
import { useState } from 'react'

interface props {
  name: string
}

const Item = (task: props) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className="flex gap-2 items-center p-3 mb-3 rounded-lg shadow-md">
      <Checkbox className="rounded-sm " checked={isChecked} onClick={handleCheckboxChange} />
      <h1 className={isChecked ? 'line-through' : ''}>{task.name}</h1>
    </div>
  )
}

export default Item
