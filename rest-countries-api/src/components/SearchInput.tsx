import { IoSearch } from "react-icons/io5";

interface Props {
  handleSearchCountry: (
    searchTerm: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleSearchRegion: (
    searchTerm: React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  selectedRegion: string;
}

const SearchInput = ({
  handleSearchCountry,
  handleSearchRegion,
  selectedRegion,
}: Props) => {
  return (
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
  );
};

export default SearchInput;
