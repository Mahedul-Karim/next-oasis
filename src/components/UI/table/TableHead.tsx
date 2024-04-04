"use client";

type Props = {
  children: React.ReactNode;
};

const TableHead: React.FC<Props> = function ({ children }) {
  return (
    <div className="grid grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] py-[1.2rem] px-[2.4rem] gap-x-[2.4rem] bg-grey-100 min-w-[938px] uppercase text-sm font-[600] items-center">
      {children}
    </div>
  );
};

export default TableHead;
