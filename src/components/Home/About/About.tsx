import SectionHeading from '@/components/Helper/SectionHeading';
import { getAboutInfo } from '@/Data/translatedData';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('about');
  const tServices = useTranslations('services');
  const aboutInfo = getAboutInfo();

  return (
    <div id="about" className="py-16 bg-[#050709]">
      <SectionHeading>{t('title')}</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="size-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                {tServices('frontend')}
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="size-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                {tServices('backend')}
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="size-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                {tServices('fullstack')}
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          <div>
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">{t('years')}</p>
          </div>

          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.project}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              {t('completedProjects')}
            </p>
          </div>

          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.website}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              {t('websitesLaunched')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
