import { getBaseInfo } from '@/Data/translatedData';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const t = useTranslations('hero');
  const baseInfo = getBaseInfo();

  return (
    <div
      id="home"
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0F0715] overflow-hidden relative"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              {t('title')}
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-12 lg:leading-14 xl:leading-16 text-white"
            >
              {baseInfo.position}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white/60"
            >
              {baseInfo.description}
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
            >
              <span>{t('button')}</span>
              <FaDownload />
            </button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden"
          >
            <Image
              src={baseInfo.profilePic}
              alt={baseInfo.name}
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
