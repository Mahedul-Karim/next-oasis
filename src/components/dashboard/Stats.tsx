'use client';

import React from 'react'
import { IconType } from 'react-icons';


type Props={
    icon:IconType;
    color:string;
    title:string;
    text:string;
}

const Stats:React.FC<Props> = ({icon:Icon,color,title,text}) => {
  return (
    <div className="bg-grey-0 border-[1px] border-solid border-grey-100 p-[16px] flex items-center gap-4 rounded-md">
          <div className={`rounded-full flex items-center ${`bg-${color}-100`} w-[50px] h-[50px] justify-center`}>
            <Icon size={30} className={`text-${color}-700`}/>
          </div>
          <div>
            <h5 className="text-[12px] uppercase font-[600] text-grey-500">
              {title}
            </h5>
            <p className="text-[24px] font-[500]">{text}</p>
          </div>
        </div>
  )
}

export default Stats