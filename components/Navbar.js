"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="relative">
            <Image
              src="/SNTC Logo@2x.png"
              alt="SNTC Logo"
              width={128}
              height={128}
              className="rounded-10"
            />
          </div>

          <div className="hidden md:flex space-x-6 text-white">
            <Link
              href="/Clubs"
              className="hover:text-cyan-400 transition text-xl"
              style={{ fontFamily: "Open Sans" }}
            >
              Clubs
            </Link>
            <a
              href="#events"
              className="hover:text-cyan-400 transition text-xl"
              style={{ fontFamily: "Open Sans" }}
            >
              Events
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 transition text-xl"
              style={{ fontFamily: "Open Sans" }}
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition text-xl"
              style={{ fontFamily: "Open Sans" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
