import techData from "../data.json";
import { useState } from "react";

const Technology = () => {
  const [object, setObject] = useState<string>("Launch vehicle");
  const [data, setData] = useState({
    name: "Launch vehicle",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    if (target instanceof HTMLButtonElement) {
      const value = target.value;
      setObject(value);

      const newData = techData.technology.find((name) => name.name === value);

      setData(
        newData || {
          name: "",
          images: { portrait: "", landscape: "" },
          description: "",
        },
      );
    }
  };

  return (
    <div className="bg-tech-mobile sm:bg-tech-tablet lg:bg-tech-desktop h-[100vh] overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat text-white lg:p-28">
      <p className="relative mb-1 px-7 pt-[30%] text-sm uppercase text-white/70 md:pt-[15%] lg:pt-[0%]">
        03 <b className="ml-2 text-white">space launch 101</b>
      </p>
      <div className="flex flex-col items-center justify-center gap-5 p-7 lg:flex-row-reverse lg:justify-end lg:gap-14">
        <img
          src={data.images.landscape}
          alt={data.images.portrait}
          className={`w-full md:my-10 lg:flex-1 lg:bg-[url("${data.images.portrait}")]`}
        />
        <div className="lg:flex-2 space-y-3 text-center md:w-[60%] lg:flex lg:w-full lg:gap-6 lg:space-y-8 lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-6 uppercase lg:flex-col">
            {Array.from(techData.technology).map((d, i) => {
              return (
                <button
                  key={i}
                  value={d.name}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border border-white lg:h-16 lg:w-16 ${d.name === object ? "text-blackGray bg-white" : "bg-transparent text-white"} `}
                  onClick={handleClick}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div>
            <p className="text-sm lg:text-xl">the terminology</p>
            <h1 className="gilda text-6xl md:text-8xl lg:my-5">{data.name}</h1>
            <p className="text-xs shadow md:text-sm">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
