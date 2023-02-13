import React from "react";

// import { Container } from './styles';
interface ItemInfo {
  title: string;
  author: string;
  layout: "column" | "row";
}

const ResultItem: React.FC<ItemInfo> = ({ title, author, layout }) => {
  if (layout === "column") {
    return (
      <div className="w-full  bg-white rounded-[6px] overflow-hidden">
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="w-full h-[200px] object-fill"
        />
        <div className=" p-2 text-black">
          <div className="truncate text-3xl pb-1 font-semibold capitalize">
            {title}
          </div>
          <div className="">Tác giả: {author}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex bg-white rounded-[6px] overflow-hidden">
      <img
        src="https://picsum.photos/200/300"
        className="w-[300px] h-[200px] object-fill"
      />
      <div className="p-3 text-black">
        <div className="truncate text-3xl pb-1 font-semibold capitalize">
          {title}
        </div>
        <div className="">Tác giả: {author}</div>
      </div>
    </div>
  );
};

export default ResultItem;
