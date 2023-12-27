import Link from "next/link";
import Button from "./button/button";

interface Header {
  theme: "dark" | "light";
}

const Header: React.FC<Header> = ({ theme }) => {
  const isDark = () => {
    return theme === "dark";
  };

  return (
    <header className="text-off-white h-14 z-50 absolute top-10 w-full px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <Link
              href="/"
              className={`${
                isDark() ? "text-dark-blue" : "text-off-white"
              }  font-semibold text-5xl`}
            >
              team<span className="text-soft-blue">.</span>
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex md:items-center space-x-4">
          <nav role="navigation" className="flex ">
            <ul className="flex md:gap-7 lg:gap-14 items-center">
              <li>
                <Link
                  href="/product"
                  className={`underline text-lg font-medium ${
                    isDark()
                      ? "text-dark-blue"
                      : "text-off-white shadow-dark-blue shadow-lg"
                  }`}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`underline text-lg font-medium ${
                    isDark()
                      ? "text-dark-blue"
                      : "text-off-white shadow-dark-blue shadow-lg"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`underline text-lg font-medium ${
                    isDark()
                      ? "text-dark-blue"
                      : "text-off-white shadow-dark-blue shadow-lg"
                  }`}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`underline text-lg font-medium ${
                    isDark()
                      ? "text-dark-blue"
                      : "text-off-white shadow-dark-blue shadow-lg"
                  }`}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Button
                  state="secondary"
                  className={!isDark() ? "!text-off-white " : ""}
                >
                  Get Access
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="block md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z"
              fill="#F5F5F5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
