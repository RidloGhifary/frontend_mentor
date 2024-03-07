import AddOnsCard from "../AddOnsCard";
import { Button } from "../ui/button";

type Props = {
  setStep: (no: number) => void;
};

const RightSideStep3 = ({ setStep }: Props) => {
  return (
    <div className="col-span-2 flex flex-col justify-between px-16 py-8">
      <div>
        <h1 className="text-3xl font-bold text-[#02295a]">Pick add-ons</h1>
        <p className="mt-1 text-sm font-light text-gray-400">
          Add-ons helps enhance your gaming experience
        </p>
      </div>
      <div className="space-y-4">
        <AddOnsCard
          title="Online service"
          desc="Access to multiplayer games"
          cost="+$10/yr"
        />
        <AddOnsCard
          title="large storage"
          desc="Extra 1TB of cloud save"
          cost="+$20/yr"
        />
        <AddOnsCard
          title="Customizable Profile"
          desc="Custom theme on your profile"
          cost="+$30/yr"
        />
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

export default RightSideStep3;
