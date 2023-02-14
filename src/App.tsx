import { Button } from "@chakra-ui/react";
import "./App.css";
import Controller from "./components/Controller";
import MainScreen from "./components/MainScreen";
import Queue from "./components/QueueGroup";
import ResultPanel from "./components/searchGroup/ResultsPanel";
import SearchBox from "./components/searchGroup/SearchBox";
import SearchGroup from "./components/searchGroup/SearchGroup";

function App() {
  return (
    <>
      <div className="flex-col-reverse lg:flex-row flex w-screen h-screen bg-gray-300 lg:items-stretch justify-end px-0">
        <SearchGroup />
        <div className="lg:w-[45vw] min-h-[300px] overflow-y-auto">
          <div className="sticky top-0">
            <MainScreen />
            <Controller />
          </div>
          <Queue />
          <div className="lg:hidden block">
            <ResultPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
