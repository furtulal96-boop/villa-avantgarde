import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    emailjs
      .send(
        "service_l0cuikt",
        "template_nvwmn0a",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message,
        },
        "5HgTs44iWzqLCNpHw",
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(t("contactForm.success"));
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess(t("contactForm.error"));
          console.error(error);
        },
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-xl flex flex-col gap-6"
    >
      {/* Name */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1 flex flex-col min-w-0">
          <label htmlFor="firstName" className="mb-2 font-medium text-gray-700">
            {t("contactForm.firstName")}
          </label>
          <input
            required
            id="firstName"
            name="firstName"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <label htmlFor="lastName" className="mb-2 font-medium text-gray-700">
            {t("contactForm.lastName")}
          </label>
          <input
            required
            id="lastName"
            name="lastName"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-medium text-gray-700">
          {t("contactForm.email")}
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 font-medium text-gray-700">
          {t("contactForm.message")}
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows="6"
          placeholder={t("contactForm.messagePlaceholder")}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none transition"
        />
      </div>

      {/* Submit button */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-dark transition w-full md:w-auto"
        >
          {loading ? t("contactForm.sending") : t("contactForm.submit")}
        </button>
        {success && <p className="text-sm text-green-600">{success}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
