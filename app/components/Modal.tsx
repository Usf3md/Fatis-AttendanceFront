"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

interface Props {
  isVisible: boolean;
  onConfirm(): void;
  message: string;
  handleVisiblity(isVisible: boolean): void;
}

const Modal = ({ isVisible, onConfirm, message, handleVisiblity }: Props) => {
  return (
    <>
      {isVisible && (
        <article
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm z-30 flex items-center justify-center"
          onClick={(e) => handleVisiblity(false)}
        >
          <div
            className="flex flex-col gap-4 bg-content1 p-8 rounded-md z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p>{message}</p>
            </div>
            <div className="flex gap-2 self-end">
              <Button
                color="danger"
                variant="flat"
                radius="sm"
                onClick={() => handleVisiblity(false)}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                variant="flat"
                radius="sm"
                onClick={() => {
                  onConfirm();
                  handleVisiblity(false);
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Modal;
