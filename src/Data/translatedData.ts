import { useTranslations } from 'next-intl';

// Static data that doesn't need translations
export const BaseInfo = {
  name: 'Rachid',
  profilePic: '/images/hero.png',
};

// Static number data
export const aboutInfo = {
  experience: '1+',
  project: '40+',
  website: '40+',
};

// Hook for getting service data with translations
export const getServicesData = () => {
  const t = useTranslations('services');

  return [
    {
      id: 1,
      title: t('webApplications'),
      description: t('webApplicationsDesc'),
      icon: '/images/s1.png',
    },
    {
      id: 2,
      title: t('apiIntegration'),
      description: t('apiIntegrationDesc'),
      icon: '/images/s3.png',
    },
    {
      id: 3,
      title: t('userInterfaces'),
      description: t('userInterfacesDesc'),
      icon: '/images/s4.png',
    },
    {
      id: 4,
      title: t('databaseSolutions'),
      description: t('databaseSolutionsDesc'),
      icon: '/images/s5.png',
    },
    {
      id: 5,
      title: t('realTimeFeatures'),
      description: t('realTimeFeaturesDesc'),
      icon: '/images/s6.png',
    },
    {
      id: 6,
      title: t('speedOptimization'),
      description: t('speedOptimizationDesc'),
      icon: '/images/s7.png',
    },
  ];
};

// Project data - URLs don't need translation
export const getProjectData = () => {
  return [
    {
      id: 1,
      image: '/images/storeit.png',
      url: 'https://agency-opal-eight.vercel.app/',
    },
    {
      id: 2,
      image: '/images/ycdirectory.png',
      url: 'https://agency-opal-eight.vercel.app/',
    },
    {
      id: 3,
      image: '/images/storycareer.png',
      url: 'https://agency-opal-eight.vercel.app/',
    },
    {
      id: 4,
      image: '/images/aimock.png',
      url: 'https://agency-opal-eight.vercel.app/',
    },
    {
      id: 5,
      image: '/images/booking.png',
      url: 'https://agency-opal-eight.vercel.app/',
    },
    {
      id: 6,
      image: '/images/paritydeals.png',
      url: 'https://agency-opal-eight.vercel.app/',
    },
    {
      id: 7,
      image: '/images/repairshop.png',
      url: 'https://agency-opal-eight.vercel.app/',
    },
  ];
};

// Skills data - technology names typically don't need translation
export const getSkillsData = () => {
  return [
    {
      id: 1,
      title: 'React',
      image: '/images/react.svg',
      percent: '90%',
    },
    {
      id: 2,
      title: 'Next.js',
      image: '/images/nextjs.svg',
      percent: '88%',
    },
    {
      id: 3,
      title: 'CSS',
      image: '/images/css.svg',
      percent: '97%',
    },
    {
      id: 4,
      title: 'Tailwind CSS',
      image: '/images/tailwind.svg',
      percent: '92%',
    },
    {
      id: 5,
      title: 'JavaScript',
      image: '/images/js.svg',
      percent: '80%',
    },
    {
      id: 6,
      title: 'TypeScript',
      image: '/images/ts.svg',
      percent: '77%',
    },
    {
      id: 7,
      title: 'HTML',
      image: '/images/html.svg',
      percent: '90%',
    },
    {
      id: 8,
      title: 'Node JS',
      image: '/images/node.svg',
      percent: '70%',
    },
    {
      id: 9,
      title: 'Prisma',
      image: '/images/prisma.svg',
      percent: '75%',
    },
    {
      id: 10,
      title: 'Drizzle ORM',
      image: '/images/drizzle.svg',
      percent: '68%',
    },
    {
      id: 11,
      title: 'MySQL',
      image: '/images/mysql.svg',
      percent: '80%',
    },
    {
      id: 12,
      title: 'PostgreSQL',
      image: '/images/postgresql.svg',
      percent: '80%',
    },
    {
      id: 13,
      title: 'Nest JS',
      image: '/images/nestjs.svg',
      percent: '67%',
    },
    {
      id: 14,
      title: 'GraphQL',
      image: '/images/graphql.svg',
      percent: '78%',
    },
    {
      id: 15,
      title: 'PHP',
      image: '/images/php.svg',
      percent: '80%',
    },
    {
      id: 16,
      title: 'Laravel',
      image: '/images/laravel.svg',
      percent: '74%',
    },
  ];
};

// Hook for getting about data with translations
export const getAboutInfo = () => {
  const t = useTranslations('about');

  return {
    ...aboutInfo,
    title: t('title'),
    description: t('description'),
  };
};

// Hook for getting base info with translations
export const getBaseInfo = () => {
  const t = useTranslations('hero');

  return {
    ...BaseInfo,
    position: t('subtitle'),
    description: t('description'),
  };
};

// Contact data doesn't need translation
export const contactData = {
  phone: '+212 713 424099',
  email: 'rachidwork5050@gmail.com',
};
