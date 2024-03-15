import destinationsData from "../data.json";
import { useState } from "react";

const Destination = () => {
  const [object, setObject] = useState<string>("Moon");
  const [data, setData] = useState({
    name: "Moon",
    images: {
      png: "/assets/destination/image-moon.png",
      webp: "/assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    if (target instanceof HTMLButtonElement) {
      const value = target.value;
      setObject(value);

      const newData = destinationsData.destinations.find(
        (destination) => destination.name === value,
      );

      setData(
        newData || {
          name: "",
          images: { png: "", webp: "" },
          description: "",
          distance: "",
          travel: "",
        },
      );
    }
  };

  return (
    <div className="bg-dest-mobile sm:bg-dest-tablet lg:bg-dest-desktop grid min-h-[100vh] place-content-center bg-cover bg-fixed bg-center bg-no-repeat text-white lg:p-28">
      <p className="px-7 text-sm uppercase text-white/70">
        01 <b className="ml-2 text-white">pick your destination</b>
      </p>
      <div className="-mb-24 flex flex-col items-center justify-center p-7 md:mb-0 lg:flex-row lg:justify-end lg:gap-10">
        <img
          src={data.images.webp}
          alt={data.images.png}
          className="mb-7 mt-0 w-[50%] md:my-10 md:w-[40%] lg:w-[30%] lg:flex-1"
        />
        <div className="space-y-6 text-center md:w-[60%] lg:flex-1 lg:text-left">
          <div className="space-x-6 uppercase">
            <button
              value="Moon"
              className={`cursor-pointer text-xs uppercase ${object === "Moon" && " font-medium underline underline-offset-8"}`}
              onClick={handleClick}
            >
              Moon
            </button>
            <button
              value={"Mars"}
              className={`cursor-pointer text-xs uppercase ${object === "Mars" && " font-medium underline underline-offset-8"}`}
              onClick={handleClick}
            >
              mars
            </button>
            <button
              value="Europa"
              className={`cursor-pointer text-xs uppercase ${object === "Europa" && " font-medium underline underline-offset-8"}`}
              onClick={handleClick}
            >
              europa
            </button>
            <button
              value={"Titan"}
              className={`cursor-pointer text-xs uppercase ${object === "Titan" && " font-medium underline underline-offset-8"}`}
              onClick={handleClick}
            >
              titan
            </button>
          </div>
          <h1 className="gilda text-7xl md:text-8xl lg:text-9xl">
            {data.name}
          </h1>
          <p className="text-xs md:text-sm">{data.description}</p>
          <hr className="h-px w-full border-0 bg-white/60" />
          <div className="flex items-center justify-around gap-5 lg:justify-start lg:gap-10">
            <div className="uppercase">
              <p className="mb-1 text-xs md:text-sm lg:text-xs">
                avg. distance
              </p>
              <h1 className="gilda text-lg md:text-xl lg:text-2xl">
                {data.distance}
              </h1>
            </div>
            <div className="uppercase">
              <p className="mb-1 text-xs md:text-sm lg:text-xs">
                est. travel time
              </p>
              <h1 className="gilda text-lg md:text-xl lg:text-2xl">
                {data.travel}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
