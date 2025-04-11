import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#060606] p-4 border-b border-b-gray-500">
      <div className="container mx-auto">
        <img
          className="max-w-48 h-auto"
          src={logo}
          alt="Logo"
          draggable={false}
        />
      </div>
    </nav>
  );
};

export default Navbar;
