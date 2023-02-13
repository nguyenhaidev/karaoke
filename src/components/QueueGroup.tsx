import React, { useMemo, useState } from "react";
import ResultItem from "./searchGroup/ResultItem";

// import { Container } from './styles';

const Queue: React.FC = () => {
  const [queue, setQueue] = useState([
    0.123, 12, 31, 12, 312, 31, 23, 12, 312, 3,
  ]);

  const renderItems = useMemo(
    () =>
      queue.map((e) => (
        <div className="w-full px-1 py-2">
          <ResultItem title="abc" author="xbvas" key={e} layout="row" />
        </div>
      )),
    [queue]
  );
  return <div className="w-full shrink">{renderItems}</div>;
};

export default Queue;
