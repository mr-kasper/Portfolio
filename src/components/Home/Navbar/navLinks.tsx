import { useTranslations } from 'next-intl';

export const getNavLinks = () => {
  const t = useTranslations('navigation');

  return [
    {
      id: 1,
      url: '#home',
      label: t('home'),
    },
    {
      id: 2,
      url: '#about',
      label: t('about'),
    },
    {
      id: 3,
      url: '#services',
      label: t('services'),
    },
    {
      id: 4,
      url: '#projects',
      label: t('projects'),
    },
    {
      id: 5,
      url: '#contact',
      label: t('contact'),
    },
  ];
};
