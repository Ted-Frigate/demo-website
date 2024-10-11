import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Header = () => {
  const navLinks = [
    {
      title: "Company",
      path: "/about",
    },
    {
      title: "Work",
      path: "/projects",
    },
    {
      title: "Team",
      path: "/team",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleRoute = () => {
    window.location.href = "/contact";
  };
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/">
        <Image
          src="../../public/logo.svg"
          alt="Frigate"
          width={72}
          height={16}
        />
      </Link>
      <nav>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link className="uppercase" key={link.title} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
      <CustomButton title="Contact us" />
    </header>
  );
};

export default Header;
