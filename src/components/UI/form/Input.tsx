"use client";

import { FieldError } from "react-hook-form";

type Props = {
  type: string;
  name?: string;
  disabled?: boolean;
  error?: any;
  onChange?:any;
  onBlur?:any;
  id?:string;
  value?:string;
  register?:any;
};

const Input: React.FC<Props> = function ({
  type,
  name,
  disabled,
  error,
  onChange,
  onBlur,
  id,
  register
}) {
  
  return (
    <>
      {type !== "textarea" ? (
        <input
          type={type}
          className={`${
            type === "file" ? "" : "border-[1px] border-solid border-grey-300"
          } bg-grey-0 py-[8px] px-[12px] rounded-md focus:outline-none disabled:bg-grey-300`}
          disabled={disabled}
          {...register}
          id={id}
        />
      ) : (
        <textarea
          className="border-[1px] border-solid border-grey-300 bg-grey-0 py-[8px] px-[12px] rounded-md focus:outline-none"
          disabled={disabled}
          {...register}
        />
      )}
      {error && <span className="text-red-700">{error}</span>}
    </>
  );
};
export default Input;
