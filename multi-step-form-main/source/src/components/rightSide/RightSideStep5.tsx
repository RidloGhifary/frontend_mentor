import IconSuccess from "../../../../assets/images/icon-thank-you.svg";

const RightSideStep5 = () => {
  return (
    <div className="col-span-2 flex flex-col items-center justify-center gap-3 px-16 py-8">
      <img src={IconSuccess} />
      <h1 className="text-3xl font-bold text-[#02295a]">Thank you!</h1>
      <p className="mt-1 max-w-[400px] text-center text-sm font-light text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using out
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default RightSideStep5;
