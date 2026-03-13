import SectionTitle from "../ui/SectionTitle";
import TextLink from "../ui/TextLink";
import LegalBullets from "./LegalBullets";
import LegalHeading from "./LegalHeading";
import LegalPara from "./LegalPara";

const TermsOfUse = () => {
  return (
    <div>
      <SectionTitle title="Terms of Use — Eloquent Shelf" />
      <p>
        <strong>Effective date: </strong>5th November 2025
      </p>
      <p>
        <strong>Controller: </strong>Vincent Coraldean
      </p>
      <LegalHeading>1. Acceptance of Terms</LegalHeading>
      <LegalPara>
        By using https://www.eloquentshelf.com (the “Site”) you agree to these
        Terms of Use (“Terms”). If you do not agree, do not use the Site.
      </LegalPara>
      <LegalHeading>2. Who we are</LegalHeading>
      <LegalPara>
        Eloquent Shelf is a curated non-fiction discovery and affiliate website.
        Content includes book summaries, reviews, reading paths, and related
        articles. We operate as an affiliate for third-party retailers (see our{" "}
        <TextLink href="/legal/affiliate-disclosure">
          Affiliate Disclosure
        </TextLink>
        ).
      </LegalPara>
      <LegalHeading>3. Changes to Terms</LegalHeading>
      <LegalPara>
        We may update these Terms. Material changes will be posted here with a
        revised “Effective date.” Continued use after changes constitutes
        acceptance.
      </LegalPara>
      <LegalHeading>4. Access & accounts</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            Access to some features (newsletter, comments, rating) may require
            an account. You are responsible for activity under your account.
          </LegalPara>,
          <LegalPara>
            Do not share passwords. Notify us immediately of unauthorized access
            by contacting us via the{" "}
            <TextLink href="/contact">contact page</TextLink>.
          </LegalPara>,
        ]}
      />
      <LegalHeading>5. Content & intellectual property</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            All content on the Site is copyright Vincent Coraldean or licensed
            third parties, unless otherwise noted.
          </LegalPara>,
          <LegalPara>
            You may read, share links, and save individual articles for personal
            use only. You may not republish or distribute content without
            express permission.
          </LegalPara>,
          <LegalPara>
            Book covers are not owned by us and are used under fair use for
            review and marketing purposes. If you are a rights holder and have
            concerns, please contact us via the{" "}
            <TextLink href="/contact">contact page</TextLink>.
          </LegalPara>,
        ]}
      />
      <LegalHeading>6. User-generated content</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            If you submit reviews, comments, or other content, you grant us a
            perpetual, worldwide, royalty-free license to use, display, modify,
            and distribute that content.
          </LegalPara>,
          <LegalPara>
            You may not submit illegal, defamatory, or infringing content. We
            may remove content and terminate accounts at our discretion.
          </LegalPara>,
        ]}
      />
      <LegalHeading>7. Book data, AI content, and accuracy</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            Book metadata may be obtained from third parties (Google Books, Open
            Library, Hardcover API, etc.). Summaries and reviews may be
            generated or assisted by AI. We make reasonable efforts to ensure
            accuracy but <strong>do not guarantee</strong> completeness or
            error-free content.
          </LegalPara>,
          <LegalPara>
            <strong>Affiliation and verification</strong>: AI drafts are
            reviewed prior to publication; however, errors may occur. Verify
            details (ISBNs, prices) with vendor pages before purchase.
          </LegalPara>,
        ]}
      />
      <LegalHeading>8. Affiliate links & remuneration</LegalHeading>
      <LegalPara>
        We use affiliate links (Amazon, Bookshop.org, etc.). Using affiliate
        links may generate commissions for us at no extra cost to you. See our
        full{" "}
        <TextLink href="/legal/affiliate-disclosure">
          Affiliate Disclosure
        </TextLink>{" "}
        page for details.
      </LegalPara>
      <LegalHeading>9. External links & third-party services</LegalHeading>
      <LegalPara>
        We link to third-party sites for purchases or additional content. We are
        not responsible for third-party terms or practices.
      </LegalPara>
      <LegalHeading>10. Disclaimers & limitation of liability</LegalHeading>
      <LegalBullets
        items={[
          <LegalPara>
            The Site and content are provided <strong>“as is”</strong> without
            warranties, express or implied.
          </LegalPara>,
          <LegalPara>
            To the maximum extent permitted by law, Vincent Coraldean is not
            liable for indirect, incidental, consequential, or punitive damages
            arising from use of the Site.
          </LegalPara>,
        ]}
      />
      <LegalHeading>11. Indemnity</LegalHeading>
      <LegalPara>
        You agree to indemnify and hold Vincent Coraldean harmless from claims
        arising from your breach of the Terms or misuse of the Site.
      </LegalPara>
      <LegalHeading>12. Governing law & dispute resolution</LegalHeading>
      <LegalPara>
        These Terms are governed by the laws of England & Wales. Disputes should
        be submitted to the competent courts of that jurisdiction (or specify
        arbitration if you prefer).
      </LegalPara>
      <LegalHeading>13. Contact</LegalHeading>
      <LegalPara>
        For any questions or concerns about these Terms, please contact us via{" "}
        <TextLink href="/contact">our contact page</TextLink>.
      </LegalPara>
    </div>
  );
};

export default TermsOfUse;
