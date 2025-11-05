import SectionTitle from "../ui/SectionTitle";
import TextLink from "../ui/TextLink";
import LegalBullets from "./LegalBullets";
import LegalHeading from "./LegalHeading";
import LegalPara from "./LegalPara";

const CookiePolicy = () => {
  return (
    <div>
      <SectionTitle title="Cookie Policy — Eloquent Shelf" />
      <p>
        <strong>Effective date: </strong>5th November 2025
      </p>
      <LegalHeading>What are cookies?</LegalHeading>
      <LegalPara>
        Cookies are small text files placed on your device to remember
        preferences and improve performance.
      </LegalPara>
      <LegalHeading>Cookies we use</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            <strong>Essential cookies</strong> — required for Site operation
            (session, authentication).
          </LegalPara>,
          <LegalPara>
            <strong>Functional cookies</strong> — remember preferences
            (language, display).
          </LegalPara>,
          <LegalPara>
            <strong>Analytics cookies</strong> — measure Site performance
            (Google Analytics or Plausible).
          </LegalPara>,
          <LegalPara>
            <strong>Marketing/affiliate cookies</strong> — used by third parties
            (affiliate platforms) to track referrals.
          </LegalPara>,
        ]}
      />
      <LegalHeading>Consent</LegalHeading>
      <LegalPara>
        On first visit we display a cookie banner explaining types and asking
        for consent for non-essential cookies. You may revoke consent in the
        banner or your account settings.
      </LegalPara>

      <LegalHeading>Managing cookies</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            <strong>Browser controls</strong>: Most web browsers automatically
            accept cookies, but you can change your settings to delete existing
            cookies or prevent new ones from being saved. Each browser&apos;s
            controls are slightly different, but in most cases, this can be
            achieved within the settings or preferences menu of your browser.
          </LegalPara>,
          <LegalPara>
            Contact us via our <TextLink href="/contact">contact page</TextLink>{" "}
            for assistance.
          </LegalPara>,
        ]}
      />
    </div>
  );
};

export default CookiePolicy;
