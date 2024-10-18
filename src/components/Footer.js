import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 px-4 py-8">
      <div className="mb-4 sm:mb-0">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Frigate"
            width={72}
            height={16}
            className="cursor-pointer"
          />
        </Link>

        <p className="text-sm mt-2 text-gray-600">© 2024 Frigate. All rights reserved.</p>
        <p className="text-gray-600">Get real-world experience with this amazing team</p>
      </div>

      <div className="flex flex-wrap w-full sm:w-2/3 justify-between gap-4">
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-2 mb-4 sm:mb-0" key={link.title}>
            <h3 className="font-bold text-gray-800">{link.title}</h3>
            {link.links.map((item) => (
              <Link key={item.title} href={item.url} className="text-gray-500 hover:text-gray-900">
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
