"use client";

type Props = {
  children: React.ReactNode;
};

const Table: React.FC<Props> = function ({ children }) {
  return (
    <div
      className="overflow-x-scroll border-grey-200 border-[1px] border-solid bg-grey-50"
      id="table"
    >
      {children}
    </div>
  );
};
export default Table;
