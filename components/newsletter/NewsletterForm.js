"use client";

import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="p-2 border border-gray-300 rounded-sm text-primary focus:outline-primary"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white p-2 rounded hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
