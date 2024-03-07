import mainBackground from "../../assets/images/bg-sidebar-desktop.svg";
import Step from "./components/steps/Step";
import RightSideStep1 from "./components/rightSide/RightSideStep1";
import { useState } from "react";
import RightSideStep2 from "./components/rightSide/RightSideStep2";
import RightSideStep3 from "./components/rightSide/RightSideStep3";
import RightSideStep4 from "./components/rightSide/RightSideStep4";
import RightSideStep5 from "./components/rightSide/RightSideStep5";

function App() {
  const [step, setStep] = useState<number>(1);

  return (
    <section className="mx-auto grid min-h-screen place-content-center bg-[#f0f6ff]">
      <div className="mx-auto grid w-full max-w-[90%] grid-cols-3 rounded-lg bg-white p-3 shadow-md">
        <div className="relative">
          <img src={mainBackground} />
          <div className="absolute left-7 top-7 space-y-5">
            <Step step="1" title="your info" setStep={setStep} active={step} />
            <Step
              step="2"
              title="select plan"
              setStep={setStep}
              active={step}
            />
            <Step step="3" title="add ons" setStep={setStep} active={step} />
            <Step step="4" title="summary" setStep={setStep} active={step} />
          </div>
        </div>
        {step === 1 && <RightSideStep1 setStep={setStep} />}
        {step === 2 && <RightSideStep2 setStep={setStep} />}
        {step === 3 && <RightSideStep3 setStep={setStep} />}
        {step === 4 && <RightSideStep4 setStep={setStep} />}
        {step === 5 && <RightSideStep5 />}
      </div>
    </section>
  );
}

export default App;
