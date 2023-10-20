"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import ButtonForm from "../UI/button/ButtonForm";
import Form from "../UI/form/Form";
import FormBody from "../UI/form/FormBody";
import FormLabel from "../UI/form/FormLabel";
import Input from "../UI/form/Input";
import Modal from "./Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutateCabin } from "@/app/hooks/useCabins";

type Props = {
  onClick: () => void;
  cabinData?: any;
  submitType?: string;
};

const FormModal: React.FC<Props> = function ({
  onClick,
  cabinData,
  submitType,
}) {
  const [image, setImage] = useState<string | ArrayBuffer | null>();

  const isEditSession = Boolean(cabinData?._id);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: isEditSession ? cabinData : {},
  });

  const { cabinMutate, isMutating } = useMutateCabin(onClick, reset);

  const imageHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(e.target.files[0]);
  };

  const formSubmit: SubmitHandler<Cabins> = (formData) => {
    const formObject = {
      data: {
        id:submitType === "edit" ? formData._id : '',
        ...formData,
        image: image ? image : formData.image,
      },
      method: submitType === "edit" ? "PATCH" : "POST",
    };
    if (submitType === "edit") {
      cabinMutate(formObject);
      return;
    }

    cabinMutate(formObject);
  };

  return (
    <Modal type="form" onClick={onClick}>
      <Form onSubmit={handleSubmit(formSubmit)}>
        <FormBody>
          <FormLabel label="Cabin name" />
          <Input
            type="text"
            id="name"
            register={register("name", {
              required: {
                value: true,
                message: "This field is required!",
              },
            })}
            error={errors?.name?.message}
            disabled={isMutating}
          />
        </FormBody>
        <FormBody>
          <FormLabel label="Maximum capacity" />
          <Input
            type="number"
            register={register("maxCapacity", {
              required: "This field is required",
            })}
            error={errors?.maxCapacity?.message}
            disabled={isMutating}
          />
        </FormBody>
        <FormBody>
          <FormLabel label="Regular price" />
          <Input
            type="number"
            register={register("regularPrice", {
              required: "This field is required",
            })}
            error={errors?.regularPrice?.message}
            disabled={isMutating}
          />
        </FormBody>
        <FormBody>
          <FormLabel label="Discount" />
          <Input type="number" register={register("discount")} />
        </FormBody>
        <FormBody>
          <FormLabel label="Description" />
          <Input
            type="textarea"
            register={register("description", {
              required: "This field is required",
            })}
            error={errors?.description?.message}
            disabled={isMutating}
          />
        </FormBody>
        <FormBody>
          <FormLabel label="Cabin photo" />
          <input type="file" name="photo" onChange={imageHandler} />
        </FormBody>
        <div className="flex justify-end">
          <ButtonForm>Create new cabin</ButtonForm>
        </div>
      </Form>
    </Modal>
  );
};

export default FormModal;
