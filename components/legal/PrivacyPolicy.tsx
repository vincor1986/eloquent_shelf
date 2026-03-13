import SectionTitle from "../ui/SectionTitle";
import TextLink from "../ui/TextLink";
import LegalBullets from "./LegalBullets";
import LegalHeading from "./LegalHeading";
import LegalPara from "./LegalPara";

const PrivacyPolicy = () => {
  return (
    <div>
      <SectionTitle title="Privacy Policy — Eloquent Shelf" />
      <p>
        <strong>Effective date: </strong>5th November 2025
      </p>
      <p>
        <strong>Controller: </strong>Vincent Coraldean
      </p>
      <LegalHeading>1. What we collect</LegalHeading>
      <LegalPara>
        <strong>A. Information you provide</strong>
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            Email address, name, user reviews, comments, ratings, profile
            preferences.
          </LegalPara>,
          <LegalPara>
            Payment info: we do not collect or store payment details unless you
            purchase a product/service on a third-party checkout — we may
            collect invoicing details if we sell products directly.
          </LegalPara>,
        ]}
      />
      <LegalPara>
        <strong>B. Automatically collected information</strong>
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            IP address, browser user agent, device and usage analytics, pages
            viewed, referral URL, click events, and region derived from IP.
          </LegalPara>,
          <LegalPara>
            Cookies and local storage data (see{" "}
            <TextLink href="/legal/cookie-policy">Cookie Policy</TextLink>).
          </LegalPara>,
        ]}
      />
      <LegalPara>
        <strong>C. Third-party data</strong>
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            We may receive book metadata from Google Books, Open Library,
            Hardcover, BooksData, and ratings from other services.
          </LegalPara>,
          <LegalPara>
            If you authenticate with third-party services (e.g., social login),
            we receive profile info as permitted.
          </LegalPara>,
        ]}
      />
      <LegalHeading>2. How we use data</LegalHeading>

      <LegalBullets
        items={[
          <LegalPara>
            Provide and operate the Site and features (accounts, preferences).
          </LegalPara>,
          <LegalPara>
            Personalise content (recommendations) and measure performance.
          </LegalPara>,
          <LegalPara>
            Send marketing emails (newsletter) — you can opt out anytime.
          </LegalPara>,
          <LegalPara>
            Fraud detection, legal compliance, and security.
          </LegalPara>,
        ]}
      />
      <LegalHeading>3. Legal bases for processing (GDPR)</LegalHeading>
      <LegalPara>
        <strong>If you are in the EU/EEA:</strong>
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            Performance of contract: account creation and delivery of services.
          </LegalPara>,
          <LegalPara>
            Legitimate interests: analytics, fraud prevention, improving
            services.
          </LegalPara>,
          <LegalPara>
            Consent: marketing communications & non-essential cookies.
          </LegalPara>,
        ]}
      />
      <LegalHeading>4. Cookies & tracking</LegalHeading>
      <LegalPara>
        We use cookies and third-party analytics using Google Analytics,
        marketing pixels, and A/B testing tools. See our full{" "}
        <TextLink href="/legal/cookie-policy">Cookie Policy</TextLink> for more
        information.
      </LegalPara>
      <LegalHeading>5. Sharing & third-party processors</LegalHeading>
      <LegalPara>
        We may share personal data with service providers acting as processors:
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>Hosting & CDN: Vercel</LegalPara>,
          <LegalPara>Database: Supabase</LegalPara>,
          <LegalPara>CMS: Sanity</LegalPara>,
          <LegalPara>
            AI & summarization: OpenAI (or other AI vendors)
          </LegalPara>,
          <LegalPara>
            Affiliate platforms: Amazon Associates and Bookshop.org,
          </LegalPara>,
        ]}
      />
      <LegalPara>
        We sign data processing agreements with providers as required.
      </LegalPara>
      <LegalHeading>6. International transfers</LegalHeading>
      <LegalPara>
        Some processors (like OpenAI, Vercel) may process data outside your
        country. We ensure transfers are lawful (standard contractual clauses,
        adequate protections).
      </LegalPara>
      <LegalHeading>7. Data retention</LegalHeading>
      <LegalPara>
        We retain data for as long as necessary to provide services, comply with
        legal obligations, and for legitimate business purposes (e.g.,
        analytics). This will usually be for a period of 5 years after your last
        interaction.
      </LegalPara>
      <LegalHeading>8. Your rights (EU/EEA & applicable regions)</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            Access, rectification, deletion (right to be forgotten), object to
            processing, data portability, and withdraw consent.
          </LegalPara>,
          <LegalPara>
            To exercise rights, contact us via our{" "}
            <TextLink href="/contact">contact page</TextLink>. We will respond
            within 15 working days of your request.
          </LegalPara>,
        ]}
      />
      <LegalHeading>9. Children</LegalHeading>
      <LegalPara>
        The Site is not for children under 13 (or local age). We do not
        knowingly collect data from children; if you believe we have, contact us
        via our <TextLink href="/contact">contact page</TextLink> to request
        deletion.
      </LegalPara>
      <LegalHeading>10. Security</LegalHeading>
      <LegalPara>
        We implement reasonable technical and organisational measures to protect
        data (encryption at rest/in transit, access controls), but no system is
        perfectly secure.
      </LegalPara>
      <LegalHeading>11. Changes</LegalHeading>
      <LegalPara>
        We&apos;ll update this Policy when necessary and indicate the effective
        date.
      </LegalPara>
      <LegalHeading>12. Contact</LegalHeading>
      <LegalPara>
        Contact us via our <TextLink href="/contact">contact page</TextLink> for
        any questions about your privacy on this website.
      </LegalPara>
    </div>
  );
};

export default PrivacyPolicy;
