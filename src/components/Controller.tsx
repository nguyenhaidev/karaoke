import { Button } from "@chakra-ui/react";
import React from "react";
import SearchBox from "./searchGroup/SearchBox";

// import { Container } from './styles';

const Controller: React.FC = () => {
  return (
    <>
      <div className="w-full h-fit items-center flex-none grid p-2 grid-cols-4 gap-2 bg-white">
        <Button className="w-full" height={50}>
          <i className="fa-solid fa-play text-2xl" />
        </Button>
        <Button className="w-full" height={50}>
          <i className="fa-solid fa-forward text-2xl" />
        </Button>
        <Button className="w-full" height={50}>
          <i className="fa-solid fa-expand text-2xl" />
        </Button>
        <Button className="w-full" height={50}>
          <i className="fa-solid fa-volume-high text-2xl" />
        </Button>
      </div>
      <div className="w-full shrink py-3 px-3 text-2xl font-semibold uppercase bg-white">
        Bài kế tiếp
      </div>
      <div className="flex w-full justify-between bg-white pb-3 lg:hidden ">
        <Button>Danh sách bài</Button>
        <Button>Chọn bài</Button>
      </div>
      <div className="">
        <SearchBox />
      </div>
    </>
  );
};

export default Controller;
