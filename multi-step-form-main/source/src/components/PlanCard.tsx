type Props = {
  icon: string;
  setCard: (no: number) => void;
  card: number;
  no: number;
  switchValue: boolean;
};

const PlanCard = ({ icon, setCard, card, no, switchValue }: Props) => {
  return (
    <div
      className={`cursor-pointer rounded-md border ${no === card ? "border-[#473dff]" : "border-gray-400"} p-4`}
      onClick={() => setCard(no)}
    >
      <img src={icon} />
      <div className="mt-10 space-y-1">
        <p className="text-base font-semibold text-[#02295a]">Arcade</p>
        <p className="text-xs text-gray-400">$9/mo</p>
        {switchValue && (
          <p className="text-xs font-extralight text-[#02295a]">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
