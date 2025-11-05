import { ReCaptchaProvider } from "next-recaptcha-v3";

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
