import Logo1 from "../assets/Logo1.svg";
import Logo2 from "../assets/Logo2.svg";
import Logo7 from "../assets/Logo7.svg";
import Logo6 from "../assets/Logo6.svg";
import Logo5 from "../assets/Logo5.svg";
import Logo4 from "../assets/Logo4.svg";
import Logo3 from "../assets/Logo3.svg";

function BrandLogo() {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-evenly items-center w-full px-2 py-4">
      <img src={Logo1} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <img src={Logo2} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <img src={Logo3} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <img src={Logo4} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <img src={Logo5} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <img src={Logo6} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <img src={Logo7} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    </div>
  );
}

export default BrandLogo;