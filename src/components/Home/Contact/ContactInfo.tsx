import { contactData } from '@/Data/data';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="size-10 md:size-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="size-4 md:size-7 text-white rotate-90" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h1 className="text-base sm:text-lg text-white/70">{contactData.phone}</h1>
        </div>
      </div>

      <div className="flex items-center space-x-8 my-8">
        <div className="size-10 md:size-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="size-4 md:size-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Email Address</h1>
          <h1 className="text-base sm:text-lg text-white/70">{contactData.email}</h1>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
