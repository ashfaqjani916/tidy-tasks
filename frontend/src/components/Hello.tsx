import { MdOutlineWavingHand } from 'react-icons/md'

interface props {
  name: string
}

const Hello = (name: props) => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <h1 className="flex text-2xl gap-1">
        hello
        <MdOutlineWavingHand />,{name.name}
      </h1>
    </div>
  )
}

export default Hello
