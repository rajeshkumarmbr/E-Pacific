import Navbar from "../Navbar/Navbar";
import Logo from "../../img/epacific-logo1-1.png";

function Header() {
  return (
    <header className=" sticky z-50 top-0">
      <nav className="w-full h-[15vh] bg-[#695FE7] flex justify-between items-center">
        <div className="text-white text-4xl w-1/4 ml-5">
          <img src={Logo} alt="Logo" className=" w-28 rounded-md" />
        </div>
        <div className=" w-2/4 text-white">
          <Navbar />
        </div>
      </nav>
    </header>
  );
}

export default Header;
