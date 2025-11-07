import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata = {
  title: "Eloquent Shelf | Contact",
  description:
    "Get in touch with the Eloquent Shelf team for enquiries, support, or feedback.",
};

const ContactLayoutPage = ({ children }) => {
  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      {children}
    </ReCaptchaProvider>
  );
};

export default ContactLayoutPage;
