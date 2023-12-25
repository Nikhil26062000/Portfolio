import React from 'react'

const SkillsButton = ({val}) => {
  return (
    <div>
        <button className=" w-[80px] bg-white text-[10px]   h-[40px] rounded-lg   font-medium sm:w-[130px] sm:text-[12px] hover:bg-violet-600 hover:text-white">{val}</button>
    </div>
  )
}

export default SkillsButton