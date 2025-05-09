import SectionHeading from '@/components/Helper/SectionHeading';
import { getServicesData } from '@/Data/translatedData';
import ServiceCard from './ServiceCard';
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('services');
  const servicesData = getServicesData();

  return (
    <div id="services" className="py-16 bg-[#0F0715]">
      <SectionHeading>{t('title')}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service, i) => (
          <div
            key={service.id}
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 150}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
