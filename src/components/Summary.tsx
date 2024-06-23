//@ts-nocheck
import React from "react";
import { Modal } from "antd";

const Summary = ({ isOpen, data, onClose }) => {
  return (
    <Modal title="Summary" open={isOpen} onCancel={onClose}>
      <p>
        Name: <span className="font-bold"> {data.name}</span>
      </p>
      <p>
        Email: <span className="font-bold">{data.email}</span>{" "}
      </p>
      <p>
        Guest Status: <span className="font-bold">{data.isGuest}</span>{" "}
      </p>
      <p>
        Guest Name: <span className="font-bold">{data.guestName || "No"}</span>{" "}
      </p>
    </Modal>
  );
};

export default Summary;
