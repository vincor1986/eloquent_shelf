import Link from "next/link";

import SectionTitle from "@/components/ui/SectionTitle";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
}


const LinkButton = ({ href, children }: ButtonProps ) => {
  return (
    <Link href={href}>
      <button className="text-primary bg-zinc-200 w-full max-w-[350px] mx-auto py-3 rounded-md hover:bg-zinc-300 transition-colors cursor-pointer">
        {children}
      </button>
    </Link>
  );
};

const LegalPage = () => {
  return (
    <section className="p-4">
      <SectionTitle
        title="Legal stuff"
        desc="Important information about your rights and responsibilities when using this website."
      />
      <div className="flex flex-col gap-1 w-full max-w-[400px] mx-auto mt-12">
        <LinkButton href="/legal/terms-of-use">Terms of Use</LinkButton>
        <LinkButton href="/legal/privacy-policy">Privacy Policy</LinkButton>
        <LinkButton href="/legal/cookie-policy">Cookie Policy</LinkButton>
        <LinkButton href="/legal/affiliate-disclosure">
          Affiliate Disclosure
        </LinkButton>
        <LinkButton href="/legal/dcma">DCMA / Takedown Policy</LinkButton>
        <LinkButton href="/legal/newsletter-terms">Newsletter Terms</LinkButton>
      </div>
    </section>
  );
};

export default LegalPage;
