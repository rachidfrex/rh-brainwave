import { brainwave } from "../assets";
const Header = () => {
  return (
    <div
      className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b
         border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm "
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-5">
        <a href="#hero" className="block w-[12rem xl:mr-8 ">
          <img src="{brainwave}" width={190} height={40} alt="Brainwave" />
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <a href="#about" className="text-n-0">
            About
          </a>
          <a href="#features" className="text-n-0">
            Features
          </a>
          <a href="#pricing" className="text-n-0">
            Pricing
          </a>
          <a href="#contact" className="text-n-0">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
