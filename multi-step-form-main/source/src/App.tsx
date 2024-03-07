import mainBackground from "../../assets/images/bg-sidebar-desktop.svg";
import Step1 from "./components/steps/Step1";
import RightSideStep1 from "./components/rightSide/RightSideStep1";

function App() {
  return (
    <section className="mx-auto grid min-h-screen place-content-center bg-[#f0f6ff]">
      <div className="mx-auto grid min-w-[60%] max-w-[85%] grid-cols-3 rounded-lg bg-white p-3 shadow-md">
        <div className="relative">
          <img src={mainBackground} />
          <div className="absolute left-7 top-7 space-y-5">
            <Step1 step="1" title="your info" />
            <Step1 step="2" title="select plan" />
            <Step1 step="3" title="add ons" />
            <Step1 step="4" title="summary" />
          </div>
        </div>
        <RightSideStep1 />
      </div>
    </section>
  );
}

export default App;
