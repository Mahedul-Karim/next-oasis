"use client";
import { useCtx } from "@/context/ContextProvider";
import Heading from "../UI/Heading";
import ButtonForm from "../UI/button/ButtonForm";
import Form from "../UI/form/Form";
import FormBody from "../UI/form/FormBody";
import FormLabel from "../UI/form/FormLabel";
import Input from "../UI/form/Input";
import { ChangeEventHandler,useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { mutateApi } from "@/util/api";
import toast from "react-hot-toast";

const Account = function () {
  const { user,setUser } = useCtx();
  const [image,setImage]=useState();
  const [name,setName]=useState(user?.name);

  const {mutate,isLoading}=useMutation({
    mutationFn:({endpoint,method,data}:{endpoint:string;method:string;data:any})=>mutateApi({endpoint,method,data}),
    onSuccess:(data)=>{
      toast.success('User updated');
      localStorage.setItem('oasisUser',JSON.stringify(data?.user));
      setUser(data?.user)
    },
    onError:()=>{
      toast.error('Something went wrong!')
    }
  })

  const imageHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result as any);
    };

    fileReader.readAsDataURL(e.target.files[0]);
  };


  const formSubmit=(e:any)=>{
    e.preventDefault();
    const data={
      id:user?._id,
      name,
      avatar:image
    }
    mutate({endpoint:'user/update',method:'PATCH',data})
  }

  return (
    <>
      <div className="text-center">
        <Heading title={"Update your account"} />
      </div>
      <div className="bg-grey-0 px-4 py-2 w-full mb-6 sm:mb-0 rounded-md my-4">
        <Form onSubmit={formSubmit}>
          <FormBody>
            <FormLabel label="Email address" />
            <input
              type="email"
              name="email"
              disabled
              className={`border-[1px] border-solid border-grey-300
           bg-grey-0 py-[8px] px-[12px] rounded-md focus:outline-none disabled:bg-grey-300`}
              value={user?.email}
            />
          </FormBody>
          <FormBody>
            <FormLabel label="Full name" />
            <input type="text" name="name" className={`border-[1px] border-solid border-grey-300
           bg-grey-0 py-[8px] px-[12px] rounded-md focus:outline-none disabled:bg-grey-300`} value={name || ""} onChange={(e)=>setName(e.target.value)}/>
          </FormBody>
          <FormBody>
            <FormLabel label="Avatar image" />
            <input type="file" name="image" onChange={imageHandler}/>
          </FormBody>
          <div className="flex justify-end">
            <ButtonForm>Update account</ButtonForm>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Account;
