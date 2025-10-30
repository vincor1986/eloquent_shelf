import Link from "next/link";

const TextLink = ({ href, children }) => {
  return (
    <Link href={href} className="text-secondary hover:underline">
      {children}
    </Link>
  );
};

export default TextLink;
