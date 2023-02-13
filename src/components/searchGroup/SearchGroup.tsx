import React from "react";
import ResultPanel from "./ResultsPanel";
import SearchBox from "./SearchBox";

// import { Container } from './styles';

const SearchGroup: React.FC = () => {
  return (
    <div className="grow overflow-y-auto border-r-indigo-100 border-r relative">
      <SearchBox />
      <ResultPanel />
    </div>
  );
};

export default SearchGroup;
