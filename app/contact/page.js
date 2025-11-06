"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { LoaderCircle, MailCheck } from "lucide-react";
import { useReCaptcha } from "next-recaptcha-v3";

import SectionTitle from "@/components/ui/SectionTitle";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

import { submitContactForm } from "@/actions/general";
import useRegionCtx from "@/store/useRegionCtx";

import baroque from "@/public/images/graphics/baroque90.jpg";
import { useSearchParams } from "next/navigation";

const DEFAULT_FORM_DATA = {
  name: "",
  email: "",
  message: "",
  subject: "",
};

const ContactFormPage = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const urlParams = useSearchParams();
  const slug = urlParams.get("slug");
  const subject = urlParams.get("subject");

  const region = useRegionCtx();
  const { executeRecaptcha } = useReCaptcha();

  useEffect(() => {
    if (slug && subject === "inaccuracy") {
      const message = `I'd like to flag an inaccuracy with the book with slug: "${slug}" - please see my comments below: \n\n`;
      setFormData((prev) => ({ ...prev, subject, message }));
    }
  }, []);

  const setErrorMessage = (msg) => {
    setError(msg);
    setTimeout(() => setError(null), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() == "" ||
      formData.email.trim() == "" ||
      formData.subject.trim() == "" ||
      formData.message.trim() == ""
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const token = await executeRecaptcha("contact_form_submit");

    if (!token) {
      setErrorMessage("ReCaptcha verification failed. Please try again later.");
      return;
    }

    setLoading(true);

    const { success, error } = await submitContactForm(
      {
        ...formData,
        region: region,
      },
      token
    );

    if (!success) {
      setErrorMessage(error);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <section className="px-4">
      <Breadcrumbs items={[{ label: "contact", href: "/contact" }]} />
      <SectionTitle
        title="Get in touch"
        desc="We'd love to hear from you. Please complete the below contact form to reach out to us about anything at all."
      />
      {!success ? (
        <form
          className="relative flex flex-col border border-light-forest p-4 rounded-md shadow-md max-w-[700px] mx-auto mt-8 pb-12 "
          onSubmit={handleSubmit}
        >
          <div className="bg-white absolute top-0 left-0 w-full h-full overflow-hidden rounded-md -z-10">
            <Image
              src={baroque}
              className="w-full h-auto opacity-6 object-cover"
              alt="Decorative background image"
              priority
              width={700}
            />
          </div>
          <div className="flex flex-col rounded-md text-primary">
            <label htmlFor="name">
              Your name: <span className="text-primary">*</span>
            </label>
            <input
              className="px-4 py-2 border border-zinc-300 rounded-sm w-full mt-2 mb-4 bg-white"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>
          <div className="flex flex-col rounded-md text-primary">
            <label htmlFor="email">
              Your email address: <span className="text-primary">*</span>
            </label>
            <input
              className="px-4 py-2 border border-zinc-300 rounded-sm w-full mt-2 mb-4 bg-white"
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
          <div className="flex flex-col rounded-md text-primary">
            <label htmlFor="subject">
              Subject: <span className="text-primary">*</span>
            </label>
            <select
              className="px-4 py-2 border border-zinc-300 rounded-sm w-full mt-2 mb-4 bg-white"
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="general">General Inquiry</option>
              <option value="marketing">Marketing</option>
              <option value="feedback">Feedback</option>
              <option value="inaccuracy">Report inaccuracy</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col rounded-md text-primary">
            <label htmlFor="message">
              Your message: <span className="text-primary">*</span>
            </label>
            <textarea
              className="px-4 py-2 border border-zinc-300 rounded-sm w-full mt-2 mb-4 bg-white"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            className="mx-auto mt-8 w-full max-w-[400px] py-2 px-4 text-white bg-primary rounded-md cursor-pointer hover:bg-secondary transition-colors duration-300"
          >
            Submit message
          </button>
          {error ? (
            <div className="w-full bg-red-900 text-white p-2 flex items-center justify-center mt-4 rounded-sm">
              {error}
            </div>
          ) : null}
        </form>
      ) : null}
      {loading ? (
        <div className="fixed h-screen w-screen inset-0 bg-black opacity-80">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <LoaderCircle className="animate-spin text-white" size={48} />
            <p className="mt-2 text-white">Sending your message...</p>
          </div>
        </div>
      ) : null}
      {success ? (
        <div className="w-full p-4 py-16 items-center justify-center">
          <div className="max-w-md mx-auto flex flex-col items-center gap-4 border border-zinc-200 rounded-md p-8 shadow-md text-primary">
            <MailCheck
              className="text-green-600 animate-ping-reverse"
              size={48}
            />
            <h2 className="text-2xl">Message sent successfully!</h2>
            <p className="text-center italic">
              Thanks so much for taking the time to get in touch. We'll get back
              to you soon!
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ContactFormPage;
