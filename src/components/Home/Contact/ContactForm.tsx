const ContactForm = () => {
  return (
    <div className="bg-[#140C1C] rounded-l-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-4xl font-bold">Let's work together</h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quod, hic consectetur
        aspernatur natus, corporis modi id dolorem reprehenderit itaque voluptatibus non dolor
        voluptas nam numquam ducimus cumque iure necessitatibus!
      </p>

      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-2 border-gray-200/20 outline-none w-full"
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-2 border-gray-200/20 outline-none w-full"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-2 border-gray-200/20 outline-none w-full"
          />
        </div>
        <div className="">
          <select
            defaultValue=""
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-2 border-gray-200/50 outline-none"
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-2 border-gray-200/50 outline-none"
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#7947DF] text-white hover:bg-[#5C2FB7] transition-all duration-200 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
