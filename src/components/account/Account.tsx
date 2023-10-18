"use client";
import Heading from "../UI/Heading";
import ButtonForm from "../UI/button/ButtonForm";
import Form from "../UI/form/Form";
import FormBody from "../UI/form/FormBody";
import FormLabel from "../UI/form/FormLabel";
import Input from "../UI/form/Input";

const Account = function () {
  return (
    <>
      <div className="text-center">
        <Heading title={"Update your account"} />
      </div>
      <div className="bg-grey-0 px-4 py-2 w-full mb-6 sm:mb-0 rounded-md my-4">
        <Form>
          <FormBody>
            <FormLabel label="Email address" />
            <Input type="email" name="email" disabled/>
          </FormBody>
          <FormBody>
            <FormLabel label="Full name" />
            <Input type="text" name="name" />
          </FormBody>
          <FormBody>
            <FormLabel label="Avatar image" />
            <Input type="file" name="image" />
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
