const Navbar = () => {
  return (
    <div className="w-full h-[87px] bg-primaryBlue pt-11 pb-4 px-8 lg:px-12 flex flex-row justify-between items-center text-white">
      <a href="/trips">
        <img
          src="/src/images/logo/wander-us-logo.svg"
          alt="Wander Us Logo"
          width={102}
          height={40}
          className="cursor-pointer hover:scale-125 hover:-translate-y-2 transition"
        />
      </a>
      <img
        src="/src/images/menu.svg"
        alt="Click to view menu"
        width={24}
        height={24}
        className="cursor-pointer hover:scale-125 transition"
        title="Coming soon!"
      />
    </div>
  );
};

export default Navbar;
