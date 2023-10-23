"use client";

import { useForm } from "react-hook-form";
import Heading from "../UI/Heading";
import ButtonForm from "../UI/button/ButtonForm";
import Form from "../UI/form/Form";
import FormBody from "../UI/form/FormBody";
import FormLabel from "../UI/form/FormLabel";
import Input from "../UI/form/Input";
import { useMutation } from "@tanstack/react-query";
import { mutateApi } from "@/util/api";
import toast from "react-hot-toast";

const User = function () {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset
  } = useForm();

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
    onSuccess: () => {
      toast.success("User created!");
      reset();
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const formSubmit = (data: any) => {
    mutate({ endpoint: "user/signup", method: "POST", data });
  };

  return (
    <>
      <Heading title={"Create a new user"} />
      <div className="bg-grey-0 px-4 py-2 w-full mb-6 sm:mb-0 rounded-md">
        <Form onSubmit={handleSubmit(formSubmit)}>
          <FormBody>
            <FormLabel label="Full name" />
            <Input
              type="text"
              register={register("name", {
                required: "This field is required!",
              })}
              error={errors?.name?.message}
              disabled={isLoading}
            />
          </FormBody>
          <FormBody>
            <FormLabel label="Email address" />
            <Input
              type="email"
              register={register("email", {
                required: "This field is required!",
              })}
              error={errors?.email?.message}
              disabled={isLoading}
            />
          </FormBody>
          <FormBody>
            <FormLabel label="Password (min 8 characters)" />
            <Input
              type="password"
              register={register("password", {
                required: "This field is required!",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters long!",
                },
              })}
              error={errors?.password?.message}
              disabled={isLoading}
            />
          </FormBody>
          <FormBody>
            <FormLabel label="Repeat password" />
            <Input
              type="password"
              register={register("confirmPassword", {
                required: "This field is required!",
                validate: (value) =>
                  value === getValues().password || "Passwords must match",
              })}
              error={errors?.confirmPassword?.message}
              disabled={isLoading}
            />
          </FormBody>
          <div className="flex justify-end">
            <ButtonForm>Create new user</ButtonForm>
          </div>
        </Form>
      </div>
    </>
  );
};

export default User;
