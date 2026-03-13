import SectionTitle from "../ui/SectionTitle";
import TextLink from "../ui/TextLink";
import LegalBullets from "./LegalBullets";
import LegalHeading from "./LegalHeading";
import LegalPara from "./LegalPara";

const NewsletterTerms = () => {
  return (
    <div>
      <SectionTitle title="Newsletter Terms — Eloquent Shelf" />
      <p>
        <strong>Last updated: </strong>5th November 2025
      </p>
      <br />
      <LegalPara>
        These Email Newsletter Terms (“Terms”) explain how we manage
        subscriptions to the Eloquent Shelf newsletter (“Newsletter”) and what
        you can expect when you sign up. By subscribing, you agree to these
        Terms and to our{" "}
        <TextLink href="/legal/privacy-policy">Privacy Policy</TextLink> which
        explains how we handle your personal data.
      </LegalPara>
      <LegalHeading>1. Purpose of the Newsletter</LegalHeading>
      <LegalPara>
        The Eloquent Shelf Newsletter is a free email publication that may
        include
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            Book recommendations, reviews, and reading insights
          </LegalPara>,
          <LegalPara>Editorial features and articles</LegalPara>,
          <LegalPara>Information about new site content or updates</LegalPara>,
          <LegalPara>
            Occasional affiliate links to partner retailers (e.g., Bookshop.org,
            Amazon)
          </LegalPara>,
          <LegalPara>
            Special offers, giveaways, or announcements related to Eloquent
            Shelf
          </LegalPara>,
        ]}
      />
      <LegalPara>
        We will never send unrelated third-party advertising or sell your email
        address.
      </LegalPara>
      <LegalHeading>2. Subscribing</LegalHeading>
      <LegalPara>
        You can subscribe to the Newsletter through our website or other
        official Eloquent Shelf channels. By subscribing, you confirm that:
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            You are at least 16 years old (or the applicable minimum digital
            consent age in your region), and
          </LegalPara>,
          <LegalPara>
            You consent to receive marketing emails from Eloquent Shelf in
            accordance with these Terms.
          </LegalPara>,
        ]}
      />
      <LegalPara>
        You can unsubscribe at any time — see Section 4 below.
      </LegalPara>
      <LegalHeading>3. Data Collected</LegalHeading>
      <LegalPara>When you subscribe, we collect:</LegalPara>
      <LegalBullets
        items={[
          <LegalPara>Your email address (required)</LegalPara>,
          <LegalPara>Your name (optional)</LegalPara>,
          <LegalPara>
            Subscription preferences (e.g., genres of interest, if you choose to
            provide them)
          </LegalPara>,
          <LegalPara>
            Technical data such as email open rates or click-through statistics,
            which help us improve content relevance and performance.
          </LegalPara>,
        ]}
      />
      <LegalPara>
        Your personal data is processed according to our{" "}
        <TextLink href="/legal/privacy-policy">Privacy Policy</TextLink>, under
        lawful bases of consent (for receiving newsletters) and legitimate
        interest (for measuring engagement and preventing abuse).
      </LegalPara>
      <LegalHeading>4. Unsubscribing and Managing Preferences</LegalHeading>
      <LegalPara>
        You may unsubscribe at any time by clicking the “Unsubscribe” link in
        any email we send or by contacting us directly via our{" "}
        <TextLink href="/contact">contact page</TextLink>.{" "}
      </LegalPara>
      <LegalPara>
        Unsubscribing will stop further marketing emails, but you may still
        receive transactional emails (for example, confirmations of changes to
        your account or subscription preferences).
      </LegalPara>
      <LegalPara>
        If you want to resubscribe later, you can do so at any time through our
        website.
      </LegalPara>
      <LegalHeading>5. Frequency</LegalHeading>
      <LegalPara>
        We aim to send emails <strong>no more than once per week</strong>,
        unless you have specifically opted into additional categories such as
        special editions or new releases.
      </LegalPara>
      <LegalPara>
        Frequency may vary depending on seasonality or publishing schedule.
      </LegalPara>

      <LegalHeading>6. Affiliate Disclosure</LegalHeading>
      <LegalPara>
        Some newsletter content includes affiliate links. If you click these
        links and make a purchase, Eloquent Shelf may earn a small commission at
        no additional cost to you.
      </LegalPara>
      <LegalPara>
        Affiliate links help support the site&apos;s operations and keep the
        content free.
      </LegalPara>
      <LegalPara>
        We always aim to recommend books and products based on merit, not
        commission potential.
      </LegalPara>

      <LegalHeading>7. Email Delivery and Third-Party Providers</LegalHeading>

      <LegalPara>
        We use a secure third-party email service provider (such as Mailchimp,
        ConvertKit, or a similar platform) to manage our subscriber list and
        deliver emails.
      </LegalPara>
      <LegalPara>
        These providers store and process your data on our behalf in accordance
        with their own privacy and security standards.
      </LegalPara>
      <LegalPara>
        We ensure that any third-party provider used is compliant with
        applicable data protection regulations (including GDPR where relevant).
      </LegalPara>
      <LegalHeading>8. Your Rights</LegalHeading>
      <LegalPara>You have the right to:</LegalPara>
      <LegalBullets
        items={[
          <LegalPara>Access and correct your personal data;</LegalPara>,
          <LegalPara>Withdraw consent and unsubscribe at any time;</LegalPara>,
          <LegalPara>Request deletion of your information;</LegalPara>,
          <LegalPara>
            Complain to a data protection authority if you believe your rights
            are being violated.
          </LegalPara>,
        ]}
      />
      <LegalPara>
        You can exercise these rights by contacting us via our{" "}
        <TextLink href="/contact">contact page</TextLink>.
      </LegalPara>
      <LegalHeading>9. Liability</LegalHeading>
      <LegalPara>
        We make no guarantee that the Newsletter or any content within it will
        be error-free or uninterrupted. We are not responsible for any losses
        arising from following external links contained in our emails or for
        actions taken based on editorial content.
      </LegalPara>
      <LegalHeading>10. Changes to These Terms</LegalHeading>
      <LegalPara>
        We may update these Terms occasionally to reflect changes in our
        services or legal requirements. The updated Terms will be published on
        our website with a new “Last updated” date. If the changes are
        significant, we will notify subscribers by email.
      </LegalPara>
      <LegalHeading>11. Contact</LegalHeading>
      <LegalPara>
        For any questions or concerns about these Terms or your subscription,
        please contact us via{" "}
        <TextLink href="/contact">our contact page</TextLink>.
      </LegalPara>
    </div>
  );
};

export default NewsletterTerms;
