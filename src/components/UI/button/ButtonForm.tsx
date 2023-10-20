"use client";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  classes?: string;
};

const ButtonForm: React.FC<Props> = function ({ children, onClick, classes }) {
  return (
    <button
      className={`bg-primary-600 text-primary-50 p-3 rounded-md mt-2 ${
        classes ? classes : "w-max"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
