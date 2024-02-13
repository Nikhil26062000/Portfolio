import React from 'react'

const SkillsButton = ({val}) => {
  return (
    <div>
        <button className=" px-3 py-3 bg-white text-[10px]  rounded-lg   font-medium sm:w-[130px] sm:text-[12px] hover:bg-violet-600 hover:text-white ">{val}</button>
    </div>
  )
}

export default SkillsButton