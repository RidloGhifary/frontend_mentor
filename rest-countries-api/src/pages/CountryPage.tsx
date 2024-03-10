import { Link, useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import countries from "../data.json";
import Country from "../types/CountryType";

const CountryPage = () => {
  const { pathname } = useLocation();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const countryName = decodeURIComponent(pathname.split("/")[1] as string);

    const country = countries.find(
      (country) => country.name.toLowerCase() === countryName.toLowerCase(),
    );

    if (country) {
      const foundCountry: Country = country as Country;
      setCountry(foundCountry);
    } else {
      setCountry(null);
    }
  }, [pathname]);

  return (
    <div className="bg-whiteForDarkModeTextOrLightModeElem dark:bg-veryDarkBlue text-veryDarkBlueForLightMode min-h-[100vh] py-10 pb-10 dark:text-white">
      <div className="container mx-auto mb-10 flex max-w-[1200px] items-center justify-between px-3 md:p-0">
        <Link
          to="/"
          className="dark:bg-darkBlue flex items-center gap-3 rounded-md bg-white px-7 py-3 shadow-md transition hover:scale-105 dark:text-white"
        >
          <FaArrowLeftLong />
          Back
        </Link>
      </div>

      <section className="container mx-auto mb-10 grid max-w-[1200px] grid-cols-1 items-center justify-center gap-10 px-3 md:grid-cols-2 md:p-0">
        <img src={country?.flag} alt="flag" className="w-full shadow-md" />
        <article className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold">{country?.name}</h1>
          <div className="flex items-center gap-32 py-10">
            <article className="space-y-3 font-thin">
              <p>
                <b>Native name :</b> {country?.nativeName || "Not found"}
              </p>
              <p>
                <b>Population :</b> {country?.population || "Not found"}
              </p>
              <p>
                <b>Region :</b> {country?.region || "Not found"}
              </p>
              <p>
                <b>Sub Region :</b> {country?.subregion || "Not found"}
              </p>
              <p>
                <b>Capital :</b> {country?.capital || "Not found"}
              </p>
            </article>
            <article className="space-y-3 font-thin">
              <p>
                <b>Top Level Domain :</b>{" "}
                {country?.topLevelDomain || "Not found"}
              </p>
              <p>
                <b>Currencies :</b>{" "}
                {country?.currencies.map((cur) => (
                  <span key={cur.name as string}>{cur?.name as string},</span>
                ))}
              </p>
              <p>
                <b>Languages :</b>{" "}
                {country?.currencies.map((lang) => (
                  <span key={lang.name as string}>{lang?.name as string},</span>
                ))}
              </p>
            </article>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-semibold">Border counties: </p>
            {country?.borders.map((bor) => (
              <div className="flex flex-wrap items-center gap-3" key={bor}>
                <span className="dark:bg-darkBlue rounded-md px-8 py-1 shadow-md dark:text-white">
                  {bor}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default CountryPage;
