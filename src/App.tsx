import "./App.css";
import Controller from "./components/Controller";
import MainScreen from "./components/MainScreen";
import Queue from "./components/QueueGroup";
import SearchGroup from "./components/searchGroup/SearchGroup";

function App() {
  return (
    <>
      <div className="flex-col-reverse lg:flex-row flex w-screen h-screen bg-gray-300 lg:items-stretch">
        <SearchGroup />
        <div className="lg:w-[45vw] min-h-[400px] overflow-y-auto">
          <div className="sticky top-0">
            <MainScreen />
            <Controller />
          </div>
          <Queue />
        </div>
      </div>
    </>
  );
}

export default App;
