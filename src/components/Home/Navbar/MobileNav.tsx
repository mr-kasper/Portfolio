import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import LanguageSwitcher from './LanguageSwitcher';
import { getNavLinks } from './navLinks';

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  const navLinks = getNavLinks();

  return (
    <>
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      />
      <nav
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
        aria-hidden={!showNav}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col space-y-6">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link href={navLink.url}>
                <p className="nav__link text-xl ml-12 border-b-2 border-white sm:text-3xl">
                  {navLink.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
          <LanguageSwitcher />
        </div>

        <button
          onClick={closeNav}
          aria-label="Close navigation menu"
          className="absolute top-0.5 right-1.5"
        >
          <CgClose className="sm:h-8 size-6 text-white" />
        </button>
      </nav>
    </>
  );
};
export default MobileNav;
