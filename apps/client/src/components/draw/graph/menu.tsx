import { useState, useCallback, useRef } from "react";
import Modal from "react-modal";
import { Button } from "@chartit/ui";
import { IoImageOutline, IoSaveOutline } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { toast } from "react-toastify";
import { toPng } from "html-to-image";
import useUser from "@/hooks/useUser";
import { useSaveMutation } from "@/service/graph/queries";

interface MenuProps {
  refContainer: React.RefObject<HTMLDivElement>;
  options: any;
  type: string;
}

const Menu = ({ refContainer, options, type }: MenuProps) => {
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { user } = useUser();
  const { saveMutate } = useSaveMutation();

  const saveGraph = () => {
    if (!user) {
      toast.error("로그인을 해주세요!");
      return;
    }
    const data = {
      owner: user.id,
      options: options,
      type: type,
      title: title,
      lastModified: new Date(),
    };
    saveMutate(data);
  };

  const exportToImage = useCallback(() => {
    if (!refContainer.current) {
      toast.error("그래프가 없습니다!");
      return;
    }
    toPng(refContainer.current, { cacheBust: true }).then((url) => {
      if (downloadRef.current) {
        downloadRef.current.href = url;
        downloadRef.current.click();
      }
    });
  }, [refContainer]);

  return (
    <>
      <a ref={downloadRef} download="graph.png" className="hidden" />
      <div className="flex items-center gap-4 px-2 py-2">
        <Button
          className="group relative rounded-md text-primary duration-200 hover:bg-gray-200 im:p-2"
          onClick={exportToImage}
        >
          <IoImageOutline size="2rem" />
          <div className="absolute left-1/2 top-[110%] hidden -translate-x-1/2 text-nowrap rounded-md border border-gray-200 bg-white px-2 py-2 text-sm text-black group-hover:flex">
            이미지로 저장하기
          </div>
        </Button>
        <Button
          className="group relative rounded-md text-primary duration-200 hover:bg-gray-200 im:p-2"
          onClick={() => setIsOpen(true)}
        >
          <IoSaveOutline size="2rem" />
          <div className="absolute left-1/2 top-[110%] hidden -translate-x-1/2 text-nowrap rounded-md border border-gray-200 bg-white px-2 py-2 text-sm text-black group-hover:flex">
            차트 저장하기
          </div>
        </Button>
        <Modal
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <div className="relative flex flex-col gap-4 rounded-md border border-gray-300 bg-white p-6">
            <HiMiniXMark
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 cursor-pointer"
              size="1.5rem"
            />
            <span className="text-lg font-semibold">차트 저장하기</span>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="w-96 rounded-md border border-gray-300 p-2 outline-none"
              placeholder="차트 제목을 입력하세요"
            />
            <div className="flex w-full justify-end gap-2">
              <Button
                className="rounded-md bg-red-500 py-2 text-white hover:opacity-85"
                onClick={() => setIsOpen(false)}
              >
                취소
              </Button>
              <Button
                className="rounded-md bg-primary py-2 text-white hover:bg-primary-hover"
                onClick={saveGraph}
              >
                저장
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Menu;
