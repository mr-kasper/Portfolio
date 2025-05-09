'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { IoLanguage } from 'react-icons/io5';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  const { locales } = routing;

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex items-center gap-2 border border-gray-700 rounded-lg px-2 py-1 bg-gray-900/50">
      <IoLanguage className="text-yellow-400 size-5" aria-hidden="true" />
      <div className="flex gap-1 items-center">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={`uppercase px-2 py-1 text-sm font-medium transition-colors duration-300 rounded ${
              locale === currentLocale
                ? 'bg-yellow-400 text-black'
                : 'text-white hover:text-yellow-400'
            }`}
            aria-label={`Switch language to ${locale}`}
            title={locale === 'en' ? 'English' : 'Français'}
          >
            {locale}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
