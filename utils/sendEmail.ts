import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: Record<string, any>) => {
  try {
    const { name, email, phone, service, message } = formData;

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      service,
      message,
    };

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );

    console.log('Email sent successfully:', result.text);
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
};
