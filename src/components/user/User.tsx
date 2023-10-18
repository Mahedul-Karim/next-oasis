"use client";

import Heading from "../UI/Heading";
import ButtonForm from "../UI/button/ButtonForm";
import Form from "../UI/form/Form";
import FormBody from "../UI/form/FormBody";
import FormLabel from "../UI/form/FormLabel";
import Input from "../UI/form/Input";

const User = function () {
  return (
    <>
      <Heading title={"Create a new user"} />
      <div className="bg-grey-0 px-4 py-2 w-full mb-6 sm:mb-0 rounded-md">
      <Form>
        <FormBody>
          <FormLabel label="Full name" />
          <Input type="text" name="name" />
        </FormBody>
        <FormBody>
          <FormLabel label="Email address" />
          <Input type="email" name="email" />
        </FormBody>
        <FormBody>
          <FormLabel label="Password (min 8 characters)" />
          <Input type="password" name="password" />
        </FormBody>
        <FormBody>
          <FormLabel label="Repeat password" />
          <Input type="password" name="password" />
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
