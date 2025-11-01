import TextLink from "@/components/ui/TextLink";

const formatList = (arr, useLinks = true) => {
  const length = arr.length;

  const link = (text) =>
    useLinks ? (
      <TextLink href={`/search?q=${encodeURIComponent(text)}`}>{text}</TextLink>
    ) : (
      text
    );

  switch (length) {
    case 0:
      return "";
    case 1:
      return link(arr[0]);
    case 2:
      return (
        <span>
          {link(arr[0])} and {link(arr[1])}
        </span>
      );
    default:
      return (
        <span>
          {arr.slice(0, -1).map(link)}, and {link(arr[length - 1])}
        </span>
      );
  }
};

export default formatList;
