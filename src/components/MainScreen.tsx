import React from "react";

// import { Container } from './styles';

const MainScreen: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white flex-none">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/1OUOaBl_WVk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default MainScreen;
