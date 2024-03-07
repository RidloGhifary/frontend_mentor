type Props = {
  step: string;
  title: string;
  setStep: (step: number) => void;
  active: number;
};

const Step = ({ step, title, setStep, active }: Props) => {
  return (
    <div
      className="group flex cursor-pointer items-center gap-4"
      onClick={() => setStep(parseInt(step))}
    >
      <span
        className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-white text-xs text-white first-letter:flex group-hover:border-[#bfe2fd] group-hover:bg-[#bfe2fd] group-hover:text-black ${active === parseInt(step) && "border-[#bfe2fd] bg-[#bfe2fd] text-black"}`}
      >
        {step}
      </span>
      <div className="-space-y-1 uppercase">
        <span className="text-xs font-light text-gray-300">step {step}</span>
        <p className="text-sm font-bold text-white">{title}</p>
      </div>
    </div>
  );
};

export default Step;
