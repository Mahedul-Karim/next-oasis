"use client";

type Props = {
  children: React.ReactNode;
};

const FormBody: React.FC<Props> = function ({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-[15px] sm:gap-[24px] py-[12px] border-b-[1px]  border-solid border-grey-100">
      {children}
    </div>
  );
};

export default FormBody;
