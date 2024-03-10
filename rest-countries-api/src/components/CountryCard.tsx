import { Link } from "react-router-dom";
import Country from "../types/CountryType";

interface Props {
  index: number;
  data: Country;
}

const CountryCard = ({ index, data }: Props) => {
  return (
    <Link
      to={`/${data.name}`}
      className="dark:bg-darkBlue cursor-pointer overflow-hidden rounded-md shadow-md transition hover:scale-105"
      key={index}
    >
      <img
        src={data.flag}
        alt="flag"
        className="h-[200px] w-full object-cover object-top"
      />
      <div className="p-4 font-thin">
        <h2 className="my-4 line-clamp-1 text-2xl font-bold">{data.name}</h2>
        <p>
          <b>Population :</b> {data.population || "Not found"}
        </p>
        <p>
          <b>Region :</b> {data.region || "Not found"}
        </p>
        <p>
          <b>Capital :</b> {data.capital || "Not found"}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
