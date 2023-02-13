import { Switch } from "@chakra-ui/react";
import React, { useLayoutEffect, useMemo, useState } from "react";
import ResultItem from "./ResultItem";

const ResultPanel: React.FC = () => {
  const [searchResult, setSearchResult] = useState<any>([]);
  const [rowLayout, setRowLayout] = useState(false);

  const renderResults = useMemo(
    () =>
      searchResult.map((e: any) => (
        <ResultItem
          title="abc"
          author="xbvas"
          key={e}
          layout={rowLayout ? "row" : "column"}
        />
      )),
    [searchResult, rowLayout]
  );

  useLayoutEffect(() => {
    setSearchResult([1, 2, 3, 2312, 3, 123, 123]);
    return () => {
      setSearchResult([]);
    };
  }, []);

  return (
    <div className="p-3">
      <div
        className={`grid ${
          rowLayout
            ? "grid-cols-1"
            : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        } gap-3`}
      >
        {renderResults}
      </div>
    </div>
  );
};

export default ResultPanel;
