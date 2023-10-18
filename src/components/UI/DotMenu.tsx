"use client";


type Props = {
  children: React.ReactNode;
};


const DotMenu: React.FC<Props> = function ({ children }) {
  return (
    <div className="absolute z-[9999] bg-grey-0 shadow-lg top-[35px] right-[12px] p-3 rounded-md w-max flex flex-col">
      {children}
    </div>
  );
};

export default DotMenu;
