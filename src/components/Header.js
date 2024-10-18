'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-4 lg:px-8">
      {/* Logo */}
      <Link href="/">
        <Image
          src="../../public/logo.svg"
          alt="Frigate"
          width={72}
          height={16}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              className="uppercase text-sm"
              key={link.title}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Contact Button (Desktop) */}
      <CustomButton title="Contact us" className="hidden lg:block" />

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden">
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <Link
                className="uppercase text-sm"
                key={link.title}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            {/* Contact Button (Mobile) */}
            <CustomButton title="Contact us" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
