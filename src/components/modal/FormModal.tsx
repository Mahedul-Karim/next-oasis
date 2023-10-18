"use client";

import ButtonForm from "../UI/button/ButtonForm";
import Form from "../UI/form/Form";
import FormBody from "../UI/form/FormBody";
import FormLabel from "../UI/form/FormLabel";
import Input from "../UI/form/Input";
import Modal from "./Modal";

type Props = {
  onClick: () => void;
};

const FormModal: React.FC<Props> = function ({ onClick }) {
  return (
    <Modal type="form" onClick={onClick}>
      <Form>
        <FormBody>
          <FormLabel label="Cabin name" />
          <Input type="text" name="name" />
        </FormBody>
        <FormBody>
          <FormLabel label="Maximum capacity" />
          <Input type="number" name="capacity" />
        </FormBody>
        <FormBody>
          <FormLabel label="Regular price" />
          <Input type="number" name="price" />
        </FormBody>
        <FormBody>
          <FormLabel label="Discount" />
          <Input type="number" name="discount" />
        </FormBody>
        <FormBody>
          <FormLabel label="Description" />
          <Input type="textarea" name="description" />
        </FormBody>
        <FormBody>
          <FormLabel label="Cabin photo" />
          <Input type="file" name="photo" />
        </FormBody>
        <div className="flex justify-end">
          <ButtonForm>Create new cabin</ButtonForm>
        </div>
      </Form>
    </Modal>
  );
};

export default FormModal;
