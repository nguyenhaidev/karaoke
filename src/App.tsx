import "./App.css";

function App() {
  return (
    <>
      <div className="flex-col-reverse lg:flex-row flex w-screen h-screen bg-gray-800 lg:items-stretch">
        <div className="grow bg-red-200 overflow-y-auto">
          <div className="w-full h-[3rem] bg-blue-300 mb-3 sticky top-0 border-b-orange-50 border-b-4"></div>
          <div className="h-[1000px] "></div>
        </div>
        <div className="lg:w-[40vw] min-h-[400px] overflow-y-auto">
          <div className="sticky top-0">
            <div className="w-full h-[400px] bg-white flex-none"></div>
            <div className="w-full h-[60px] bg-red-300 flex-none">
              Controller
            </div>
            <div className="w-full bg-indigo-400 shrink">Queue</div>
          </div>
          <div className="w-full bg-orange-400 h-[1000px] shrink">Items</div>
        </div>
      </div>
    </>
  );
}

export default App;
