"use client";

import { useState, useEffect } from "react";

import SectionTitle from "@/components/ui/SectionTitle";

import { setCookieConsent } from "@/actions/cookies";
import descriptions from "@/data/cookiesText";
import Tickbox from "@/components/discover/Tickbox";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Cookie } from "lucide-react";
import TextLink from "@/components/ui/TextLink";

const DEFAULT_PREFS = {
  analytics: false,
  functional: false,
  marketing: false,
};

const ManageCookies = () => {
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((r) => r.startsWith("_cookieConsent="));
    if (cookie) setPrefs(JSON.parse(decodeURIComponent(cookie.split("=")[1])));
  }, []);

  const handleSave = async () => {
    await setCookieConsent({ ...prefs, essential: true });
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
  };

  return (
    <>
      <section
        className={`p-4 ${showModal ? "blur-sm pointer-events-none" : ""}`}
      >
        <Breadcrumbs
          items={[{ label: "cookie settings", href: "/manage-cookies" }]}
        />
        <div className="max-w-[800px] mx-auto -mt-8">
          <SectionTitle
            title="Manage Cookie Preferences"
            desc="Use the below tick-list to customize your cookie preferences."
          />
          <p className="text-primary mb-8">
            If you'd like more information about how we use cookies, please
            visit our{" "}
            <TextLink href="/legal/cookie-policy">Cookie Policy</TextLink>.
          </p>
          {["analytics", "functional", "marketing"].map((cat) => (
            <div key={cat} className="p-4">
              <label className="flex text-primary items-center gap-2 mb-2">
                <Tickbox
                  checked={prefs[cat]}
                  onChange={() => setPrefs({ ...prefs, [cat]: !prefs[cat] })}
                />
                <span className="capitalize">{cat} cookies</span>
              </label>
              <div className="h-1 rounded-full w-full bg-secondary/30 mb-2" />
              <p className="text-sm italic text-zinc-700">
                {descriptions[cat]}
              </p>
            </div>
          ))}

          <button
            onClick={handleSave}
            className="bg-primary w-full lg:max-w-1/3 text-white px-4 py-2 rounded-sm mt-10 hover:bg-secondary transition-colors duration-300 cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      </section>
      {showModal ? (
        <div className="fixed top-1/2 left-1/2 -translate-1/2 w-[300px] py-10 px-4 flex flex-col items-center justify-center bg-white text-center blur-none border-2 border-secondary rounded-sm">
          <Cookie className="text-primary h-12 w-12" />
          <h3 className="text-xl mb-4 text-primary">
            Your preferences have been updated.
          </h3>
          <p className="text-sm text-zinc-700 text-center">
            Come back to update these preferences at any time.
          </p>
        </div>
      ) : null}
    </>
  );
};

export default ManageCookies;
