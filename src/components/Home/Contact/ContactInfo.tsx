import { contactData } from '@/Data/translatedData';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = () => {
  const t = useTranslations('contactInfo');

  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="size-10 md:size-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="size-4 md:size-7 text-white rotate-90" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">{t('phone')}</h1>
          <Link href={`tel:${contactData.phone}`} className="text-base sm:text-lg text-white/70">
            {contactData.phone}
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-8 my-8">
        <div className="size-10 md:size-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="size-4 md:size-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">{t('email')}</h1>
          <Link href={`mailto:${contactData.email}`} className="text-base sm:text-lg text-white/70">
            {contactData.email}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
