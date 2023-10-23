"use client";
import ButtonForm from "@/components/UI/button/ButtonForm";
import Form from "@/components/UI/form/Form";
import FormLabel from "@/components/UI/form/FormLabel";
import Input from "@/components/UI/form/Input";
import { useCtx } from "@/context/ContextProvider";
import { mutateApi } from "@/util/api";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();
  const { user } = useCtx();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('oasisUser') as string)) {
      router.push("/");
    }
  }, []);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({
      endpoint,
      method,
      data,
    }: {
      endpoint: string;
      method: string;
      data: any;
    }) => mutateApi({ endpoint, method, data }),
    onSuccess: (data) => {
      localStorage.setItem("oasisUser", JSON.stringify(data?.user));
      router.push("/");
    },
  });

  const formSubmit: SubmitHandler<any> = function (data) {
    mutate({ endpoint: "user/login", method: "POST", data });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div>
        <Image
          src="/assets/img/logo-light.png"
          alt="log"
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-2xl font-[700] text-grey-700">
        Log in to your account
      </h1>
      <div className="bg-grey-0 p-6 rounded-md !w-screen sm:!w-[480px]">
        <Form classes="flex flex-col gap-2" onSubmit={handleSubmit(formSubmit)}>
          <div className="flex flex-col">
            <FormLabel label="Email address" />
            <Input
              type="email"
              register={register("email", {
                required: "This field is required!",
              })}
              error={errors?.email?.message}
              placeholder="test@gmail.com"
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col">
            <FormLabel label="Password" />
            <Input
              type="password"
              register={register("password", {
                required: "This field is required!",
              })}
              error={errors?.password?.message}
              placeholder="test1234"
              disabled={isLoading}
            />
          </div>
          <ButtonForm classes="self-stretch">Login</ButtonForm>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
