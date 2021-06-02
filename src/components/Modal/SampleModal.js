import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const AlertButtons = styled.button`
  background-color: #4e78f6;
  border: None;
  border-radius: 0.6em;
  color: white;
  cursor: pointer;
  font-size: 20px;
  line-height: 16px;
  margin: 10px;
  width: 90px;
  padding: 2vh;
  text-decoration: none;
`;

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};

function SampleModal(props) {
  const confirmEdit = props.onConfirm;
  const confirmClose = props.onModalClose;
  let modalStatus;
  function onModalConfirm() {
    modalStatus = false;
    //     let actionType = "removeQuestion";
    confirmEdit(modalStatus);
  }
  function close() {
    modalStatus = false;
    confirmClose(modalStatus);
  }
  return (
    <Modal>
      <div>
        <h2>Are you sure?</h2>
        <div>
          <p>This will delete your answers and take you to previous step.</p>
          <AlertButtons onClick={onModalConfirm}>Yes</AlertButtons>
          <AlertButtons onClick={close}>Cancel</AlertButtons>
        </div>
      </div>
    </Modal>
  );
}

export default SampleModal;
