"use client";

type Props = {
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string | number;
  disabled?: boolean;
};

const Input: React.FC<Props> = function ({
  type,
  onChange,
  name,
  value,
  disabled,
}) {
  return (
    <>
      {type !== "textarea" ? (
        <input
          type={type}
          className={`${
            type === "file" ? "" : "border-[1px] border-solid border-grey-300"
          } bg-grey-0 py-[8px] px-[12px] rounded-md focus:outline-none disabled:bg-grey-300`}
          onChange={onChange}
          name={name}
          value={value}
          disabled={disabled}
        />
      ) : (
        <textarea
          className="border-[1px] border-solid border-grey-300 bg-grey-0 py-[8px] px-[12px] rounded-md focus:outline-none"
          name={name}
          value={value}
          disabled={disabled}
        ></textarea>
      )}
      <span className="text-red-700">This field is required</span>
    </>
  );
};
export default Input;
