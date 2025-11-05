import SectionTitle from "../ui/SectionTitle";
import LegalBullets from "./LegalBullets";
import LegalPara from "./LegalPara";

const AffiliateDisclosure = () => {
  return (
    <div>
      <SectionTitle title="Affiliate Disclosure — Eloquent Shelf" />
      <p>
        <strong>Effective date: </strong>5th November 2025
      </p>
      <LegalPara>
        Eloquent Shelf uses affiliate links to fund operations. If you click
        certain links and make a purchase, we may receive a commission at no
        extra cost to you.
      </LegalPara>
      <LegalBullets
        items={[
          <LegalPara>
            We may include affiliate links to Amazon Associates, Bookshop.org,
            Bookshop UK/US, and others.
          </LegalPara>,
          <LegalPara>
            Affiliate links are marked on pages where relevant (e.g., Book page
            has “Buy on Amazon” and “Buy on Bookshop.org” button)
          </LegalPara>,
          <LegalPara>
            We aim to present unbiased, honest recommendations. Affiliate
            relationships do not influence editorial independence.
          </LegalPara>,
        ]}
      />
    </div>
  );
};

export default AffiliateDisclosure;
