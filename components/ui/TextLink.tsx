import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
}

const TextLink = ({ href, children }: Props) => {
  return (
    <Link href={href} className="text-secondary hover:underline">
      {children}
    </Link>
  );
};

export default TextLink;
