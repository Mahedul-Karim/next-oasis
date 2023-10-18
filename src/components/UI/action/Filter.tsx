"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  queryValue: any;
  options: {
    id: any;
    value: String;
    label: String;
  }[];
};

const Filter: React.FC<Props> = function ({ queryValue, options }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname=usePathname();
  
  const active = searchParams.get(queryValue) || options?.[0].value;


  const setSearchParams=function(field:string,value:any){
    const searchQuery = new URLSearchParams(searchParams);
    searchQuery.set(field,value);
    router.push(`${pathname}?${searchQuery.toString()}`)
  }

  return (
    <div className="bg-grey-0 border-[1px] border-solid border-grey-100 rounded-md p-1 shadow-sm mt-2 md:mt-0 flex gap-1 flex-col md:flex-row">
      {options?.map((op) => (
        <button
          className={`p-1 rounded-md  ${
            active === op.value
              ? "bg-primary-600 text-primary-50"
              : "hover:bg-primary-600 hover:text-primary-50"
          } disabled:cursor-not-allowed font-[500] text-[14px]`}
          key={op.id}
          disabled={active === op.value}
          onClick={()=>setSearchParams(queryValue,op.value)}
        >
          {op.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
