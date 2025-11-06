"use client";

import { useState } from "react";
import { MailCheck, LoaderCircle } from "lucide-react";

import TextLink from "../ui/TextLink";

import { addToMailingList } from "@/actions/mailing-list";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const setErrorMessage = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    if (email.trim() === "" || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setSending(false);
      return;
    }

    const { success } = await addToMailingList(email);

    if (!success) {
      setErrorMessage("There was an error, please try again later.");
      setSending(false);
    } else {
      setSuccess(true);
      setSending(false);
    }
  };

  return (
    <div className="relative">
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className={`flex w-full flex-col ${sending ? "blur-sm pointer-events-none" : ""}`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-sm text-primary focus:outline-primary"
            required
          />
          <p className="mt-2 italic text-zinc-400">
            By subscribing, you agree to our{" "}
            <TextLink href="/legal/newsletter-terms">Newsletter Terms</TextLink>
            .
          </p>
          <button
            type="submit"
            className="bg-primary text-white mt-4 p-2 rounded hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
          >
            Subscribe
          </button>
          {error ? (
            <div className="w-full items-center text-center text-white bg-red-800 p-2 mt-2">
              {error}
            </div>
          ) : null}
        </form>
      ) : null}
      {sending ? (
        <div className="min-w-[250px] absolute top-1/2 left-1/2 -translate-1/2 p-8 flex flex-col items-center justify-center text-center text-primary bg-white rounded-md border border-secondary">
          <LoaderCircle className="h-12 w-12 animate-spin mb-4" />
          <h3 className="text-xl font-medium">
            Submitting your subscription...
          </h3>
        </div>
      ) : null}
      {success ? (
        <div className="min-w-[250px] p-8 flex flex-col items-center justify-center">
          <MailCheck className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-medium text-primary">Success!</h3>
          <h3 className="text-xl font-medium mb-2 text-primary">
            We've added you to our mailing list.
          </h3>
        </div>
      ) : null}
    </div>
  );
};

export default NewsletterForm;
