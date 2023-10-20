"use client";

import { FormEvent, FormEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  classes?:string;
};

const Form: React.FC<Props> = function ({ children, onSubmit,classes }) {
  return <form onSubmit={onSubmit} className={classes}>{children}</form>;
};

export default Form;
