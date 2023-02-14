import React, { useMemo, useState } from "react";
import ResultItem from "./searchGroup/ResultItem";

// import { Container } from './styles';

const Queue: React.FC = () => {
  const [queue, setQueue] = useState([
    123, 12, 31, 1132, 312, 31, 23, 112, 312, 311,
  ]);

  const renderItems = useMemo(
    () =>
      queue.map((e) => (
        <>
          <div className="w-full px-1 py-2 ">
            <ResultItem title="abc" author="xbvas" key={e} layout="row" />
          </div>
        </>
      )),
    [queue]
  );
  return <div className="w-full shrink">{renderItems}</div>;
};

export default Queue;
