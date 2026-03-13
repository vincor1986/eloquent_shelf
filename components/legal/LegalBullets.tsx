type Props = {
  items: any[];
}

const LegalBullets = ({ items }: Props) => {
  return (
    <ul className="ml-8 list-disc mb-4 text-sm text-zinc-600">
      {items.map((item, index) => (
        <li key={index} className="mt-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default LegalBullets;
