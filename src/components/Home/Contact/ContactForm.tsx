'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail } from '../../../../utils/sendEmail';
import toast from 'react-hot-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
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
      success: <b>Email sent successfully!</b>,
      error: <b>Failed to send email.</b>,
    });
    reset();
  };

  return (
    <div className="bg-[#140C1C] rounded-l-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-4xl font-bold">Let's work together</h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quod, hic consectetur
        aspernatur natus, corporis modi id dolorem reprehenderit itaque voluptatibus non dolor
        voluptas nam numquam ducimus cumque iure necessitatibus!
      </p>

      <form onSubmit={handleSubmit(handleForm)} className="mt-8 block w-full overflow-hidden">
        {' '}
        {/* Updated to use handleSubmit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Your Name"
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
              placeholder="Your Email Address"
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
              placeholder="Your Phone Number"
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
              Select a Service
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
          {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service.message}</p>}
        </div>
        <div>
          <textarea
            rows={7}
            placeholder="Message"
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
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
