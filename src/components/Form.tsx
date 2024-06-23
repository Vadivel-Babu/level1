//@ts-nocheck
import { Button, Input, InputNumber, Radio, message } from "antd";
import { useState } from "react";

import * as EmailValidator from "email-validator";
import useForm from "../hook/useForm";
import Summary from "./Summary";
const Form = () => {
  const {
    handleChange,
    onClose,
    data,
    contextHolder,
    onSubmit,
    values,
    age,
    handleAge,
    isModalOpen,
  } = useForm();

  return (
    <>
      {contextHolder}
      <form
        onSubmit={onSubmit}
        action=""
        className="max-w-[500px] mx-auto mt-10 shadow-lg p-2 space-y-3 bg-slate-100 rounded-md"
      >
        <h1 className="text-xl text-center font-bold">Form</h1>
        <Input
          placeholder="Enter your Name..."
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Enter your Email..."
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <p>Age:</p>
          <InputNumber min={1} max={100} value={age} onChange={handleAge} />
        </div>
        <div className="flex gap-2 items-center">
          <p>Are having a guest?</p>
          <Radio.Group
            onChange={handleChange}
            name="isGuest"
            value={values.isGuest || ""}
          >
            <Radio value={"yes"}>yes</Radio>
            <Radio value={"no"}>no</Radio>
          </Radio.Group>
        </div>
        {values.isGuest === "yes" ? (
          <Input
            placeholder="Enter the Guest Name..."
            value={values.guestName}
            name="guestName"
            onChange={handleChange}
          />
        ) : (
          ""
        )}

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
      <Summary isOpen={isModalOpen} data={data} onClose={onClose} />
    </>
  );
};

export default Form;
