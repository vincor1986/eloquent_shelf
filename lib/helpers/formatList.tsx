import TextLink from "@/components/ui/TextLink";
import { JSX } from "react";

const formatList = (arr: string[], useLinks: boolean = true): string | JSX.Element => {
  const length = arr.length;

  const link = (text: string) =>
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
