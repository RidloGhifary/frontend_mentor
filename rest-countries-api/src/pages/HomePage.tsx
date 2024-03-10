import { useEffect, useState } from "react";
import Country from "../types/CountryType";
import countries from "../data.json";
import { IoSearch } from "react-icons/io5";

const HomePage = () => {
  const [dataCountries, setDataCountry] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const handleSearchCountry = (
    searchTerm: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(searchTerm.target.value);
  };

  const handleSearchRegion = (
    searchTerm: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedRegion(searchTerm.target.value);
  };

  useEffect(() => {
    let filteredCountries: Country[] = countries as Country[];

    if (searchTerm) {
      filteredCountries = filteredCountries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedRegion) {
      filteredCountries = filteredCountries.filter((country) =>
        country.region.toLowerCase().includes(selectedRegion.toLowerCase()),
      );
    }

    setDataCountry(filteredCountries);
  }, [searchTerm, selectedRegion]);

  return (
    <section className="bg-whiteForDarkModeTextOrLightModeElem dark:bg-veryDarkBlue text-veryDarkBlueForLightMode min-h-[100dvh] py-10 pb-10 dark:text-white">
      <div className="container mx-auto mb-10 flex max-w-[1200px] items-center justify-between p-3 md:p-0">
        <div className="dark:bg-darkBlue flex items-center gap-3 rounded-md bg-white px-7 py-3 shadow-md">
          <label htmlFor="country">
            <IoSearch className="dark:text-white" />
          </label>
          <input
            id="country"
            placeholder="Search for a country?"
            className="border-none bg-transparent outline-none ring-0"
            onChange={handleSearchCountry}
          />
        </div>
        <div className="dark:bg-darkBlue flex items-center gap-3 rounded-md bg-white px-7 py-3 shadow-md">
          <select
            name="region"
            id="region"
            className="border-none bg-transparent outline-none ring-0"
            onChange={handleSearchRegion}
            value={selectedRegion}
          >
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <section className="container mx-auto mb-10 grid max-w-[1200px] grid-cols-1 items-center justify-center gap-5 p-3 sm:grid-cols-2 md:grid-cols-3 md:p-0 lg:grid-cols-4">
        {dataCountries?.map((data, index) => (
          <div
            className="dark:bg-darkBlue cursor-pointer overflow-hidden rounded-md shadow-md transition hover:scale-105"
            key={index}
          >
            <img
              src={data.flag}
              alt="flag"
              className="h-[200px] w-full object-cover object-top"
            />
            <div className="p-4 font-thin">
              <h2 className="my-4 line-clamp-1 text-2xl font-bold">
                {data.name}
              </h2>
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
          </div>
        ))}
      </section>
    </section>
  );
};

export default HomePage;
