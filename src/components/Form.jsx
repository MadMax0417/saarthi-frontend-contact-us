import { useForm } from "react-hook-form";
import api from "../api/axios.js";
import toast from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,  //making custom error (like for server side)
    formState: { errors, isSubmitting },
  } = useForm({mode: "onBlur"});

  const onSubmit = async(formData) => {
    try {
      const res = await api.post("api/v1/submitform", formData);
      toast.success("Form Submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
   
  }

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <section className="w-full lg:w-[70%] h-[80%] mx-auto mt-3 p-5 rounded-3xl">

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="myName">Name:</label>
        <input
          type="text"
          id="myName"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name should be minimum 2 characters",
            },
            maxLength: {
              value: 100,
              message: "Name should be under 100 characters",
            },
          })}
          placeholder="Enter Your name"
          className="focus:outline-none border-b-2 mb-4"
        />

        {errors.name && (
          <div className="text-red-500 text-center text-sm mb-2 mt-0">
            {errors.name.message}
          </div>
        )}

        <label htmlFor="myEmail">Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          id="myEmail"
          placeholder="Enter Your email"
          className="focus:outline-none border-b-2 mb-4"
        />
        {errors.email && (
          <div className="text-red-500 text-center text-sm mb-2 mt-0">
            {errors.email.message}
          </div>
        )}

        <label htmlFor="myPhone">Phone:</label>
        <input
          type="tel"
          {...register("phone", {
            minLength: {
              value: 10,
              message: "Number should not be less than 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Number should not be more than 10 digits",
            },
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Only 10-digit numbers allowed",
            },
          })}
          id="myPhone"
          placeholder="Enter Your phone"
          className="focus:outline-none border-b-2 mb-4"
        />
        {errors.phone && (
          <div className="text-red-500 text-center text-sm mb-2 mt-0">
            {errors.phone.message}
          </div>
        )}

        <label htmlFor="myMessage">Message:</label>
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message should not be less than 10 characters",
            },
            maxLength: {
              value: 500,
              message: "Message should not exceeds more than 500 characters",
            },
          })}
          id="myMessage"
          cols="20"
          rows="3"
          className="focus:outline-none border-b-2 mb-4"
          placeholder="Enter Your Message"
        ></textarea>
        {errors.message && (
          <div className="text-red-500 text-center text-sm mb-2 mt-0">
            {errors.message.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer self-center px-3 py-1 rounded-xl bg-[#0062D3] text-white hover:bg-[#007CFF]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
