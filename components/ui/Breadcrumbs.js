import Link from "next/link";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="absolute top-4 left-4 flex text-xs">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <Link
            href={item.href}
            className="ml-1 text-primary hover:underline underline-offset-4"
          >
            {item.label.toLowerCase()}
          </Link>
          {index < items.length - 1 && (
            <span className="ml-1 text-gray-500">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
