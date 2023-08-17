const Navbar = () => {
  return (
    <div className="w-full h-[87px] bg-primaryBlue pt-11 pb-4 px-8 lg:px-12 flex flex-row justify-between items-center text-white">
      <a href="/">
        <img
          src="/logo/wander-us-logo.svg"
          alt="Wander Us Logo"
          width={102}
          height={40}
          className="cursor-pointer hover:scale-125 hover:-translate-y-2 transition"
        />
      </a>
      <img
        src="/menu.svg"
        alt="Click to view menu"
        width={24}
        height={24}
        className="cursor-pointer hover:scale-125 transition"
      />
    </div>
  );
};

export default Navbar;
