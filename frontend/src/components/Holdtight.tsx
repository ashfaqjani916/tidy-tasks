// HoldTight.tsx
import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const HoldTight: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-700 font-sans text-xl">
      <AiOutlineLoading3Quarters className="animate-spin text-3xl text-gray-700" />
      <div className="animate-bounce mt-5">Hold tight, we are working on it.</div>
    </div>
  )
}

export default HoldTight
