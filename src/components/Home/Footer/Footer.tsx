import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('navigation');

  return (
    <div className="py-16 bg-[#0F0715]">
      <div>
        <Image src="/images/logo.png" alt="logo" width={180} height={108} className="mx-auto" />
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-white font-bold">
        <Link href="#home">{t('home')}</Link>
        <Link href="#services">{t('services')}</Link>
        <Link href="#projects">{t('projects')}</Link>
        <Link href="#contact">{t('contact')}</Link>
      </div>

      <p className="text-white/70 mt-6 text-center">
        © {new Date().getFullYear()} {useTranslations('footer')('copyright')}
      </p>
    </div>
  );
};
export default Footer;
