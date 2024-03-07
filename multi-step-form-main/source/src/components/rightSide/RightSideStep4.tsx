import { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  setStep: (no: number) => void;
};

const RightSideStep4 = ({ setStep }: Props) => {
  const [member, setMember] = useState<boolean>(true);

  return (
    <div className="col-span-2 flex flex-col justify-between px-16 py-8">
      <div>
        <h1 className="text-3xl font-bold text-[#02295a]">Finishing up</h1>
        <p className="mt-1 text-sm font-light text-gray-400">
          Double-check everything looks OK before conforming.
        </p>
      </div>
      <div>
        <div className="space-y-4 rounded-md bg-[#f0f6ff] p-5">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <p className="text-base text-[#02295a]">
                Arcade({member ? "Yearly" : "Monthly"})
              </p>
              <p
                className="-mt-[1px] cursor-pointer text-xs font-thin text-gray-400 underline"
                onClick={() => setMember(!member)}
              >
                change
              </p>
            </div>
            <p className="text-xs font-semibold text-[#02295a]">
              $9{member && "0"}/{member ? "yr" : "mo"}
            </p>
          </div>
          <hr className="border-0 border-t-[1px] border-t-gray-200" />
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Online service</p>
            <p className="text-xs text-[#02295a]">
              +$1{member && "0"}/{member ? "yr" : "mo"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Larger storage</p>
            <p className="text-xs text-[#02295a]">
              +$2{member && "0"}/{member ? "yr" : "mo"}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-5">
          <p className="text-xs text-gray-400">
            Total (per {member ? "year" : "month"})
          </p>
          <p className="font-medium text-[#473dff]">
            +$12{member && "0"}/{member ? "yr" : "mo"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setStep(3)}
          variant={"ghost"}
          className="text-gray-400"
        >
          Go back
        </Button>
        <Button onClick={() => setStep(5)} className="bg-[#473dff]">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default RightSideStep4;
