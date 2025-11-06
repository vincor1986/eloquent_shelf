import { motion } from "framer-motion";
import Link from "next/link";

import navigationLinks from "@/data/navigationLinks";
import { MenuIcon } from "lucide-react";

const MobileMenu = ({ closeMenu }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeMenu}
    >
      <motion.div
        className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-zinc-50 shadow-lg p-6"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center w-full gap-2 text-primary">
          <h2 className="text-2xl text-primary">Main Menu</h2>
          <MenuIcon />
        </div>
        <div className="h-1 bg-light-gold w-full mb-12" />

        <ul>
          {navigationLinks.map((link) => (
            <li
              key={link.title}
              className="group mb-4 hover:bg-primary hover:text-white rounded-md p-2 transition-colors duration-300"
            >
              <Link
                href={link.href}
                className="group-hover:text-white flex items-center gap-2 text-xl"
              >
                <link.icon className="" />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
