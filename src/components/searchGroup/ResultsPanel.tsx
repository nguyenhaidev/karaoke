import { Switch } from "@chakra-ui/react";
import React, { useLayoutEffect, useMemo, useState } from "react";
import useAppStore from "../../app/appState";
import ResultItem from "./ResultItem";

const ResultPanel: React.FC = () => {
  const searchResult = useAppStore((state) => state.searchResult);
  const [rowLayout, setRowLayout] = useState(false);

  const renderResults = useMemo(
    () =>
      searchResult.map((e) => (
        <ResultItem
          title={e.title}
          author={e.author}
          key={e.videoId}
          image={
            e.videoThumbnails.find((t) => t.quality === "sddefault")?.url ?? ""
          }
          layout={"column"}
        />
      )),
    [searchResult, rowLayout]
  );

  return (
    <div className="w-full grow h-full overflow-y-auto p-3">
      <div className="w-full">
        <div
          className={`grid ${
            rowLayout
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } gap-3`}
        >
          {renderResults}
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
