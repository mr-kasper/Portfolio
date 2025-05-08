import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="py-16 bg-[#0F0715]">
      <div>
        <Image src="/images/logo.png" alt="logo" width={180} height={108} className="mx-auto" />
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-white font-bold">
        <Link href="#home">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#project">Project</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <p className="text-white/70 mt-6 text-center">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
