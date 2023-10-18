"use client";

type Props = {
  children: React.ReactNode;
  onSubmit?: () => void;
};

const Form: React.FC<Props> = function ({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
