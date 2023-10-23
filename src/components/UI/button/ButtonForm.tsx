"use client";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  classes?: string;
  disabled?:boolean;
};

const ButtonForm: React.FC<Props> = function ({ children, onClick, classes,disabled }) {
  return (
    <button
      className={`bg-primary-600 text-primary-50 p-3 rounded-md mt-2 ${
        classes ? classes : "w-max"
      } disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
