import { Icons } from "@/components/Icons";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-background m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center">
            <img src="/siparana.svg" className="h-8 mr-3" alt="Siparana Logo" />
            <span className="self-center text-emerald-500 text-2xl font-semibold whitespace-nowrap hidden md:flex">
              සිප් අරණ
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              සිප් අරණ.
            </a>
            . සියලුම හිමිකම් ඇවිරිණි.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href={"https://facebook.com/ZEOAmpara/?_rdc=1&_rdr"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icons.facebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href={"mailto:amp@edudept.ep.gov.lk"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icons.mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href={"tel:+94632222139"}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icons.phone className="w-5 h-5" />
              <span className="sr-only">Telephone</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
