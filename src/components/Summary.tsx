//@ts-nocheck
import React from "react";
import { Modal } from "antd";

const Summary = ({ isOpen, data, onClose }) => {
  return (
    <Modal title="Summary" open={isOpen} onCancel={onClose}>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Guest Status: {data.isGuest}</p>
      <p>Guest Name: {data.guestName || "No"}</p>
    </Modal>
  );
};

export default Summary;
