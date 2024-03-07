import { useState } from "react";

type Props = {
  title: string;
  desc: string;
  cost: string;
};

const AddOnsCard = ({ title, desc, cost }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div
      className={`flex items-center justify-between rounded-md border ${isChecked ? "border-[#473dff]" : "border-gray-400"} p-5`}
    >
      <label className="flex items-center gap-5">
        <input
          type="checkbox"
          className="accent-[#473dff] checked:outline-2 checked:outline-[#473dff]"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <div>
          <p className="text-base font-semibold text-[#02295a]">{title}</p>
          <p className="text-xs text-gray-400">{desc}</p>
        </div>
      </label>
      <p className="text-xs text-[#473dff]">{cost}</p>
    </div>
  );
};

export default AddOnsCard;
