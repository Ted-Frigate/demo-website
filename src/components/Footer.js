import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "../../constants";
const Footer = () => {
  return (
    <footer className="flex items-baseline justify-between gap-4 px-4 py-8 bg-slate-400">
      <div>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Frigate"
            width={72}
            height={16}
            className="cursor-pointer"
          />
        </Link>

        <p className="text-sm">© 2024 Frigate. All rights reserved.</p>
        <p>Get real-world experience with this amazing team</p>
      </div>
      
      <div className="flex w-2/3 justify-between">
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-2 " key={link.title}>
            <h3 className="font-bold">{link.title}</h3>
            {link.links.map((item) => (
              <Link key={item.title} href={item.url} className="text-gray-500">
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
