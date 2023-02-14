import React from "react";
import ResultPanel from "./ResultsPanel";
import SearchBox from "./SearchBox";

// import { Container } from './styles';

const SearchGroup: React.FC = () => {
  return (
    <div className="w-full border-r-indigo-100 border-r relative lg:flex flex-col hidden">
      <SearchBox />
      <ResultPanel />
    </div>
  );
};

export default SearchGroup;
