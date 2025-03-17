'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const isAtTop = currentScrollPos < 10;

      setVisible(!isScrollingDown || isAtTop);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md 
        bg-background/80 border-b border-white/5 transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex justify-between items-center py-4 px-6 w-full max-w-7xl mx-auto">
        <Link href="/" className="text-white">
          <div className="w-8 h-8 relative">
            <Image
              src="/images/beard-hat-icon-no-background.png"
              alt="Logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-sm">
          <a
            href="/pablo-jesus-acosta-resume.pdf"
            download
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Resume
          </a>
          <Link
            href="/projects"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-primary transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden
            ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{ top: '64px' }}
        >
          {/* Backdrop with blur */}
          <div
            className={`absolute inset-0 transition-all duration-300 
              ${isMenuOpen ? 'backdrop-blur-[20px] bg-black/90 h-80' : 'backdrop-blur-none bg-transparent'}`}
          />

          {/* Content */}
          <div
            className={`relative z-50 flex flex-col items-center gap-8 py-12 text-lg 
              transition-transform duration-300
              ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <a
              href="/pablo-jesus-acosta-resume.pdf"
              download
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
            <Link
              href="/projects"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
