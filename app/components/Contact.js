"use client";
import { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import { motion } from "motion/react"

const Contact = () => {
  const initialData = {
    name: "",
    phone: "",
    email: "",
    reason: "",
    time: "",
    agree: false,
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.reason.trim()) newErrors.reason = "Please share your reason.";
    if (!formData.time.trim()) newErrors.time = "Preferred time is required.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Form submitted:", formData);
    toast("Thank you! Your message has been sent.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
    setFormData(initialData);
    setErrors({});
  };

  return (
    <motion.div 
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.8}}
    id="contact" className="py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Get In Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border px-4 py-2 rounded-md ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 234-5678"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border px-4 py-2 rounded-md ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border px-4 py-2 rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              What brings you here?
            </label>
            <textarea
              name="reason"
              placeholder="eg. I'm feeling overwhelmed lately and would like someone to talk to."
              value={formData.reason}
              onChange={handleChange}
              rows={4}
              className={`w-full border px-4 py-2 rounded-md ${
                errors.reason ? "border-red-500" : ""
              }`}
            />
            {errors.reason && (
              <p className="text-sm text-red-500 mt-1">{errors.reason}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Preferred time to reach you
            </label>
            <input
              name="time"
              placeholder="eg. Morning, Afternoon, Evening, Night"
              value={formData.time}
              onChange={handleChange}
              className={`w-full border px-4 py-2 rounded-md ${
                errors.time ? "border-red-500" : ""
              }`}
            />
            {errors.time && (
              <p className="text-sm text-red-500 mt-1">{errors.time}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
            id="agree"
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree">I agree to be contacted</label>
          </div>
          {errors.agree && (
            <p className="text-sm text-red-500 -mt-4">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer/>
    </motion.div>
    
  );
};

export default Contact;
