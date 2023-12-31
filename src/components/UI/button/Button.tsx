"use client";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  nav?: boolean;
};

const Button: React.FC<Props> = function ({ children, onClick, nav = false }) {
  return (
    <button
      className={`focus:border-[1px] focus:border-indigo-700 focus:border-solid ${
        nav && "text-indigo-700"
      } p-2 rounded-md transition-all hover:bg-grey-100 flex justify-center items-center w-[40px] h-[40px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
