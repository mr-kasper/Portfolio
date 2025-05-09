'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail } from '../../../../utils/sendEmail';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('contact');
  const tServices = useTranslations('services');

  const contactFormSchema = z.object({
    name: z.string().min(2, t('errors.nameRequired')),
    email: z.string().email(t('errors.emailInvalid')),
    phone: z.string().min(10, t('errors.phoneInvalid')),
    service: z.string().min(1, t('errors.serviceRequired')),
    message: z.string().min(10, t('errors.messageRequired')),
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const handleForm = async (data: ContactFormValues) => {
    toast.promise(sendEmail(data), {
      loading: 'Sending...',
      success: t('success'),
      error: t('error'),
    });
    reset();
  };

  return (
    <div className="bg-[#140C1C] rounded-l-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-4xl font-bold">{t('title')}</h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">{t('description')}</p>

      <form onSubmit={handleSubmit(handleForm)} className="mt-8 block w-full overflow-hidden">
        {' '}
        {/* Updated to use handleSubmit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full">
            <input
              type="text"
              placeholder={t('name')}
              className={`flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-2 ${
                errors.name ? 'border-red-500' : 'border-gray-200/20'
              } outline-none w-full`}
              {...register('name')}
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
          </div>
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2">
            <input
              type="email"
              placeholder={t('email')}
              className={`flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-2 ${
                errors.email ? 'border-red-500' : 'border-gray-200/20'
              } outline-none w-full`}
              {...register('email')}
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="w-full md:w-1/2">
            <input
              type="tel"
              placeholder={t('phone')}
              className={`flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-2 ${
                errors.phone ? 'border-red-500' : 'border-gray-200/20'
              } outline-none w-full`}
              {...register('phone')}
            />
            {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="">
          <select
            className={`w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-2 ${
              errors.service ? 'border-red-500' : 'border-gray-200/50'
            } outline-none`}
            {...register('service')}
          >
            <option value="" disabled>
              {t('service')}
            </option>
            <option value="frontend">{tServices('frontend')}</option>
            <option value="backend">{tServices('backend')}</option>
            <option value="fullstack">{tServices('fullstack')}</option>
          </select>
          {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service.message}</p>}
        </div>
        <div>
          <textarea
            rows={7}
            placeholder={t('message')}
            className={`w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-2 ${
              errors.message ? 'border-red-500' : 'border-gray-200/50'
            } outline-none`}
            {...register('message')}
          ></textarea>
          {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3.5 bg-[#7947DF] text-white hover:bg-[#5C2FB7] transition-all duration-200 rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : t('submit')}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
