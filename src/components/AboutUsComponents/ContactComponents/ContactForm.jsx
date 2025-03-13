import { useForm } from "react-hook-form";
import ContactButton from "./ContactButton";


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to an API
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <>
      <section className="grid gap-2 px-5 py-12 md:px-8">
        <p className="font-light lg:text-lg">E-MAIL FORM</p>
        <p className="text-3xl font-semibold tracking-wide lg:text-4xl">
          Say Hello
        </p>
        <div className="bg-[#54C4CF] w-20 h-1 mt-2 lg:w-24"></div>
        <p className="py-4 text-sm md:text-base md:py-6">
          Capitalise on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps.
        </p>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="pb-12 px-5 md:px-8">
        <div className="grid space-y-2 pb-5">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            className="p-3 border border-gray-500"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="grid space-y-2 pb-5">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            className="p-3 border border-gray-500"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="grid space-y-2 pb-5">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="p-3 border border-gray-500 resize-none"
            rows="5"
            cols="50"
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* <button type="submit" className="bg">
          Send Message
        </button> */}
        <ContactButton
          title="SEND"
          className="flex items-center gap-2 bg-[#54C4CF] py-3 px-8 text-white font-semibold md:px-12 lg:px-16"
        />
      </form>
    </>
  );
};

export default ContactForm;
