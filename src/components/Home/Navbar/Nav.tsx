import Image from 'next/image';
import { navLinks } from '@/../constant/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

const Nav = ({ openNav }: { openNav: () => void }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (scrollY >= 90) setNavBg(true);
      if (scrollY < 90) setNavBg(false);
    };

    addEventListener('scroll', handler);

    return () => removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed ${
        navBg ? 'bg-[#240B39]' : 'fixed'
      } h-[12vh] z-10 w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={170}
            height={102}
            priority
            className="ml-[-1.5rem] sm:ml-0"
          />
        </Link>
        <div className="flex items-center space-x-10">
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              {navLinks.map((navLink) => (
                <li key={navLink.id} className="group w-fit block">
                  <Link href={navLink.url}>
                    <p className="nav__link">{navLink.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={openNav}
              aria-label="Open mobile navigation menu"
              className="lg:hidden"
            >
              <HiBars3BottomRight className="size-8 cursor-pointer text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Nav;
