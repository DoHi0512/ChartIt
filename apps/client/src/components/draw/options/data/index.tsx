import { Button } from "@chartit/ui";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Modal from "react-modal";
import DataForm from "./form";
const Data = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <Button
        className="w-full gap-2 bg-primary p-2 text-white duration-200 hover:bg-primary-hover"
        onClick={() => setIsOpen(true)}
      >
        <IoCloudUploadOutline size={"1.5rem"} />
        데이터 업로드
      </Button>
      <Modal
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <DataForm />
      </Modal>
    </div>
  );
};

export default Data;
