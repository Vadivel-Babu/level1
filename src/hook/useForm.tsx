//@ts-nocheck
import * as EmailValidator from "email-validator";
import { message } from "antd";
import { useState } from "react";
const useForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [values, setValues] = useState({});
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [age, setAge] = useState(1);

  const onClose = () => {
    setIsModalOpen(false);
  };
  console.log(values);

  const handleAge = (value) => {
    setAge(value);
  };

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    if (values.name === undefined || values.name.trim().length === 0) {
      messageApi.error("Enter a valid Name");
      return;
    }
    if (!EmailValidator.validate(values.email)) {
      messageApi.error("Enter a valid Email");
      return;
    }
    if (values.isGuest === undefined || values.isGuest.trim().length === 0) {
      messageApi.error("pls select the availablity of guest");
      return;
    }
    if (
      values.isGuest === "yes" &&
      (values.guestName === undefined || values.guestName.trim().length === 0)
    ) {
      messageApi.error("Enter a valid guest name");
      return;
    }
    const data = {
      ...values,
    };
    setData(data);
    setIsModalOpen(true);
    setValues({});
  }
  return {
    handleChange,
    onClose,
    data,
    contextHolder,
    onSubmit,
    values,
    age,
    handleAge,
    isModalOpen,
  };
};

export default useForm;
