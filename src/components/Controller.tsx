import { Button } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const Controller: React.FC = () => {
  return (
    <>
      <div className="w-full h-fit items-center flex-none grid p-2 grid-cols-4 gap-2 bg-white">
        <Button className="w-full" height={50}>
          Play
        </Button>
        <Button className="w-full" height={50}>
          Next
        </Button>
        <Button className="w-full" height={50}>
          Re-Play
        </Button>
        <Button className="w-full" height={50}>
          Play
        </Button>
      </div>
      <div className="w-full shrink py-3 px-3 text-2xl font-semibold uppercase bg-white">
        Bài kế tiếp
      </div>
    </>
  );
};

export default Controller;
