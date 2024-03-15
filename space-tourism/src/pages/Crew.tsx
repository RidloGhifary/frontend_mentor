import crewsData from "../data.json";
import { useState } from "react";

const Crew = () => {
  const [object, setObject] = useState<string>("Douglas Hurley");
  const [data, setData] = useState({
    name: "Douglas Hurley",
    images: {
      png: "/assets/crew/image-douglas-hurley.png",
      webp: "/assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    if (target instanceof HTMLButtonElement) {
      const value = target.value;
      setObject(value);

      const newData = crewsData.crew.find((name) => name.name === value);

      setData(
        newData || {
          name: "",
          images: { png: "", webp: "" },
          role: "",
          bio: "",
        },
      );
    }
  };

  return (
    <div className="bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop h-[100vh] overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat text-white lg:p-28">
      <p className="relative mb-1 px-7 pt-[30%] text-sm uppercase text-white/70 md:pt-[20%] lg:pt-[0%]">
        02 <b className="ml-2 text-white">meet your crew</b>
      </p>
      <div className="-mb-24 flex flex-col items-center justify-center gap-5 p-7 md:mb-0 md:pt-10 lg:flex-row lg:justify-end lg:gap-14">
        <div className="z-10 mr-auto space-y-3 text-center md:w-[60%] lg:w-[50%] lg:space-y-8 lg:text-left">
          <p className="text-xs md:text-sm">{data.role}</p>
          <h1 className="gilda text-6xl md:text-8xl">{data.name}</h1>
          <p className="text-xs shadow md:text-sm">{data.bio}</p>
          <div className="space-x-6 uppercase">
            {Array.from(crewsData.crew).map((d, i) => {
              return (
                <button
                  key={i}
                  value={d.name}
                  className={`h-3 w-3 rounded-full ${d.name === object ? "bg-white" : "bg-white/50"}`}
                  onClick={handleClick}
                ></button>
              );
            })}
          </div>
        </div>
        <img
          src={data.images.webp}
          alt={data.images.png}
          className="absolute bottom-0 z-0 mb-7 mt-0 w-[70%] md:bottom-10 md:my-10 md:w-[50%] lg:right-[20%] lg:w-[30%]"
        />
      </div>
    </div>
  );
};

export default Crew;
