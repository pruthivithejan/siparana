import { Search } from "./Search";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed backdrop-blur-sm bg-white/75 dark:bg-background/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full px-4 md:px-8 flex justify-between items-center ">
        <a href="/" className="flex items-center">
          <img src="/siparana.svg" className="h-8 mr-3" alt="Siparana Logo" />
          <span className="self-center text-emerald-500 text-2xl font-semibold whitespace-nowrap hidden md:flex">
            සිප් අරණ
          </span>
        </a>
        <div className="flex md:order-2 gap-4 items-center sm:gap-2">
          <Search />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
