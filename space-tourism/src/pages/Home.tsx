const Home = () => {
  return (
    <div className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop grid h-[100vh] place-content-center bg-cover bg-fixed bg-center bg-no-repeat text-white">
      <div className="lg:-mb-20 lg:flex lg:items-end lg:justify-end lg:px-32">
        <div className="container mx-auto mt-20 space-y-6 px-8 text-center uppercase md:w-[70%] lg:mt-0 lg:w-[50%] lg:flex-1">
          <p className="text-mainColor text-xs md:text-sm">
            so, you want to travel to
          </p>
          <h1 className="gilda text-8xl md:text-9xl">SPACE</h1>
          <p className="text-mainColor text-xs leading-loose md:text-sm">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:flex-1">
          <p className="gilda mx-auto mt-14 flex h-32 w-32 items-center justify-center rounded-full bg-white font-medium uppercase text-black lg:mb-5 lg:mt-0 lg:h-48 lg:w-48">
            explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
