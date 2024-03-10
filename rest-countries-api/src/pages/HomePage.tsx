import { useEffect, useState } from "react";
import Country from "../types/CountryType";
import countries from "../data.json";
import CountryCard from "../components/CountryCard";
import SearchInput from "../components/SearchInput";

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
    <section className="bg-whiteForDarkModeTextOrLightModeElem dark:bg-veryDarkBlue text-veryDarkBlueForLightMode py-10 pb-10 dark:text-white">
      <SearchInput
        handleSearchCountry={handleSearchCountry}
        handleSearchRegion={handleSearchRegion}
        selectedRegion={selectedRegion}
      />

      <section className="container mx-auto mb-10 grid max-w-[1200px] grid-cols-1 items-center justify-center gap-5 p-3 sm:grid-cols-2 md:grid-cols-3 md:p-0 lg:grid-cols-4">
        {dataCountries?.map((data, index) => (
          <CountryCard index={index} data={data} />
        ))}
      </section>
    </section>
  );
};

export default HomePage;
