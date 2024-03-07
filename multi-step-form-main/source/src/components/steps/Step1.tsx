type Props = {
  step: string;
  title: string;
};

const Step1 = ({ step, title }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-white text-xs text-white hover:border-[#bfe2fd] hover:bg-[#bfe2fd] hover:text-black">
        {step}
      </span>
      <div className="-space-y-1 uppercase">
        <span className="text-xs font-light text-gray-300">step {step}</span>
        <p className="text-sm font-bold text-white">{title}</p>
      </div>
    </div>
  );
};

export default Step1;
