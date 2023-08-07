const Navbar = () => {
  return (
    <div className="w-full h-[87px] bg-primaryBlue pt-11 pb-4 px-8 flex flex-row justify-between items-center text-white">
      <h3>WanderUs</h3>
      <img
        src="./menu.svg"
        alt="Click to view menu"
        width={24}
        height={24}
        className="cursor-pointer hover:scale-125 transition"
      />
    </div>
  );
};

export default Navbar;
