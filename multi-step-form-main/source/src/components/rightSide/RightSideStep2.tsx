import { useState } from "react";
import PlanCard from "../PlanCard";
import IconArcade from "../../../../assets/images/icon-arcade.svg";
import IconAdvance from "../../../../assets/images/icon-advanced.svg";
import IconPro from "../../../../assets/images/icon-pro.svg";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

type Props = {
  setStep: (step: number) => void;
};

const RightSideStep2 = ({ setStep }: Props) => {
  const [card, setCard] = useState(1);
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  return (
    <div className="col-span-2 flex flex-col justify-between px-16 py-8">
      <div>
        <h1 className="text-3xl font-bold text-[#02295a]">Select your plan</h1>
        <p className="mt-1 text-sm font-light text-gray-400">
          You have the options of monthly or yearly billing
        </p>
      </div>
      <div className="space-y-10">
        <div className="grid w-full grid-cols-3 gap-3">
          <PlanCard
            icon={IconArcade}
            setCard={setCard}
            card={card}
            no={1}
            switchValue={switchValue}
          />
          <PlanCard
            icon={IconAdvance}
            setCard={setCard}
            card={card}
            no={2}
            switchValue={switchValue}
          />
          <PlanCard
            icon={IconPro}
            setCard={setCard}
            card={card}
            no={3}
            switchValue={switchValue}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <span
            className={`text-xs font-medium ${switchValue ? "text-[#02295a]" : "text-gray-400"}`}
          >
            Monthly
          </span>
          <Switch onCheckedChange={() => setSwitchValue(!switchValue)} />
          <span
            className={`text-xs font-medium ${!switchValue ? "text-[#02295a]" : "text-gray-400"}`}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="flex items-center  justify-between">
        <Button
          onClick={() => setStep(1)}
          variant={"ghost"}
          className="text-gray-400"
        >
          Go back
        </Button>
        <Button onClick={() => setStep(3)}>Next Step</Button>
      </div>
    </div>
  );
};

export default RightSideStep2;
