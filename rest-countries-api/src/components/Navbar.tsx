import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="dark:bg-darkBlue bg-white shadow-md dark:text-white">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between p-4">
        <h1 className="font-bold md:text-2xl">Where in the world?</h1>
        <DarkModeToggle />
      </nav>
    </div>
  );
};

export default Navbar;
