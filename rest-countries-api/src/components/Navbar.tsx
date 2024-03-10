import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="dark:bg-darkBlue shadow-md dark:text-white">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <div className="hover:bg-darkGray dark:hover:bg-veryDarkBlue flex cursor-pointer items-center gap-1 rounded-md p-2 transition hover:text-white dark:hover:text-white">
          <MdDarkMode size={25} />
          <p className="font-semibold">Dark mode</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
