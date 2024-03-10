import countries from "./data.json";

const App = () => {
  const dataCountries = countries;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Button
      </button>
    </>
  );
};

export default App;
