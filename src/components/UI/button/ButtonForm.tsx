"use client";

type Props = {
  children: React.ReactNode;
  onClick?:()=>void;
};

const ButtonForm: React.FC<Props> = function ({ children,onClick }) {
  return (
    <button className="bg-primary-600 text-primary-50 p-3 rounded-md w-max mt-2" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonForm;