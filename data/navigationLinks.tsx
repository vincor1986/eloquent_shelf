import { BookType, Search, Telescope, Bookmark, Feather } from "lucide-react";

const NavigationLinks = [
  {
    title: "Topics",
    href: "/topics",
    icon: BookType,
  },
  {
    title: "Search",
    href: "/search",
    icon: Search,
  },
  {
    title: "Discover",
    href: "/discover",
    icon: Telescope,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: Feather,
  },
];

export default NavigationLinks;
