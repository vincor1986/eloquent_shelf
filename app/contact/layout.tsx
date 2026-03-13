import { Metadata } from "@/types/seo";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata: Metadata = {
  title: "Eloquent Shelf | Contact",
  description:
    "Get in touch with the Eloquent Shelf team for enquiries, support, or feedback.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "https://www.eloquentshelf.com/contact",
  },
};

const ContactLayoutPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      {children}
    </ReCaptchaProvider>
  );
};

export default ContactLayoutPage;
