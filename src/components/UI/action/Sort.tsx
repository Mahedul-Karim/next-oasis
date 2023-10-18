"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

type Props = {
  queryValue: string;
  options: {
    id: any;
    label: string;
    value: string;
  }[];
};

const Sort: React.FC<Props> = function ({ queryValue, options }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const selected = searchParams.get(queryValue) || options?.[0].value;

  const setQuery = function (e: ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    params.set(queryValue, e.target.value);
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <select
      className="bg-grey-0 border-[1px] border-solid border-grey-100 rounded-md p-2 shadow-sm mt-2 sm:mt-0 font-[500] text-[14px]"
      value={selected}
      onChange={setQuery}
    >
      {options?.map((op) => (
        <option key={op.id} value={op.value}>
          {op.label}
        </option>
      ))}
    </select>
  );
};
export default Sort;
