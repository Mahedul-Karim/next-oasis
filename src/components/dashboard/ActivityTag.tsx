import React from 'react'

type Props={
    color:string;
    title:string;
}

const ActivityTag:React.FC<Props> = ({color,title}) => {
  return (
    <div className={`w-fit text-[11px] font-[600] py-[4px] px-[12px] rounded-md text-${color}-700 bg-${color}-100`}>
        {title}
      </div>
  )
}

export default ActivityTag