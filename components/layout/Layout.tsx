"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Navlinks = [
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Markets",
    href: "#",
  },
  {
    title: "Service & support",
    href: "#",
  },
];

const MotionLink = motion(Link);

export const Header = () => {
  return (
    <header className="w-full h-28 flex z-50 absolute top-0 items-center justify-between px-28 py-7">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Image src="/images/logo.png" alt="logo" width={120} height={50} />
      </motion.div>

      <nav className="text-white flex items-center gap-14 justify-center">
        <ul className="flex items-center gap-14 font-normal">
          {Navlinks.map((link, index) => (
            <motion.li
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * (0.2 * index) }}
            >
              <Link href={link.href}>{link.title}</Link>
            </motion.li>
          ))}
        </ul>

        <Image src="/images/Search.svg" alt="Search" width={24} height={24} />
        <Image src="/images/Menu.svg" alt="Menu" width={24} height={24} />
      </nav>

      <div className="flex items-center gap-14 text-white">
        <div className="flex items-center gap-3">
          <Image
            src="/images/Language.svg"
            alt="Language"
            width={24}
            height={24}
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            NL
          </motion.span>
        </div>
        <MotionLink
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          My Bronkhorst
        </MotionLink>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-white opacity-20"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "linear" }}
      />
    </header>
  );
};
