interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Record<string, unknown>;
  currencies: Record<string, unknown>[];
  languages: Record<string, unknown>[];
  translations: Record<string, string>;
  flag: string;
  regionalBlocs: Record<string, unknown>[];
  cioc: string;
  independent: boolean;
}

export default Country;
