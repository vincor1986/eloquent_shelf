import SectionTitle from "../ui/SectionTitle";
import TextLink from "../ui/TextLink";
import LegalBullets from "./LegalBullets";
import LegalPara from "./LegalPara";

const DCMA = () => {
  return (
    <div>
      <SectionTitle title="DCMA / Takedown Policy (Copyright Notice) — Eloquent Shelf" />
      <p>
        <strong>Effective date: </strong>5th November 2025
      </p>
      <br />
      <LegalPara>
        If you believe content on the Site infringes your copyright, send a
        notice containing:
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            A physical or electronic signature of the copyright owner (or
            authorized agent)
          </LegalPara>,
          <LegalPara>Identification of the copyrighted work</LegalPara>,
          <LegalPara>
            Identification and location (URL) of the infringing material on the
            Site
          </LegalPara>,
          <LegalPara>Contact information (address, phone, email)</LegalPara>,
          <LegalPara>
            A statement of good faith belief that use is not authorised
          </LegalPara>,
          <LegalPara>
            A statement under penalty of perjury that information is accurate
          </LegalPara>,
        ]}
      />
      <LegalPara>
        Contact us directly, or obtain an address to send notices to us via our{" "}
        <TextLink href="/contact">contact page</TextLink>. We will respond and
        take action where appropriate.
      </LegalPara>
    </div>
  );
};

export default DCMA;
