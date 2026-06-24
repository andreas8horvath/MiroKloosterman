'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/retreats', label: 'Retreats', hasDropdown: true },
  { href: '/modalities', label: 'Modalities', hasDropdown: true },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

const retreatsDropdown = [
  { href: '/retreats', label: 'All Retreats', desc: 'Overview of our journeys' },
  { href: '/retreats/private', label: 'Private Retreats', desc: 'One-on-one in Bali' },
  { href: '/retreats/group', label: 'Group Retreats', desc: 'Worldwide shared alignment' },
];

const modalitiesDropdown = [
  { href: '/modalities', label: 'Our Approach', desc: 'Integrated overall method' },
  { href: '/modalities/breathwork', label: 'Breathwork', desc: 'Transformative breathing' },
  { href: '/modalities/body-reset', label: 'Body Reset', desc: 'Whole-system structural realignment' },
  { href: '/modalities/massages', label: 'Massages', desc: 'Chi Core Release & Intuitive Massage' },
  { href: '/modalities/water-therapy', label: 'Water Therapy', desc: 'Harmonic Flow Aquatic Healing Arts' },
  { href: '/modalities/hypnotherapy', label: 'Hypnotherapy', desc: 'Subconscious pattern shifting' },
  { href: '/modalities/coaching', label: 'Coaching', desc: 'Direct health & lifestyle mentoring' },
];

export default function Header({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHeroPage = pathname !== '/privacy';
  const showSolidHeader = isScrolled || !isHeroPage;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      showSolidHeader 
        ? 'bg-[#FBF8F3]/80 backdrop-blur-md border-b border-[#F2ECE3] py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div id="nav-container" className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Lockup */}
        <Link href="/" className="group flex flex-col items-start select-none">
          <span className={`font-display text-2xl tracking-wide font-light transition-colors ${
            showSolidHeader 
              ? 'text-[#322C2B] group-hover:text-[#C08264]' 
              : 'text-[#FBF8F3] group-hover:text-[#D9A38A]'
          }`}>
            Miro Kloosterman
          </span>
          <span className={`font-body text-[10px] tracking-[0.2em] uppercase -mt-0.5 pointer-events-none transition-colors ${
            showSolidHeader ? 'text-[#6E655E]' : 'text-[#E6E1DA]/70'
          }`}>
            Body · Mind · Soul
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
            if (link.hasDropdown) {
              const dropdownItems = link.label === 'Retreats' ? retreatsDropdown : modalitiesDropdown;
              const isDropdownActive = activeDropdown === link.label;

              return (
                <div 
                  key={link.label} 
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center text-sm font-medium tracking-wide transition-colors ${
                    isActive 
                      ? (showSolidHeader ? 'text-[#C08264]' : 'text-[#D9A38A]') 
                      : (showSolidHeader ? 'text-[#322C2B] hover:text-[#C08264]' : 'text-[#FBF8F3]/90 hover:text-[#D9A38A]')
                  }`}>
                    {link.label}
                    <ChevronDown className="ml-1 w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Card */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white border border-[#F2ECE3] shadow-xl rounded-xl p-4 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 origin-top transform scale-95 group-hover:scale-100 grid gap-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="p-2 rounded-lg hover:bg-[#F2ECE3]/40 transition-all flex flex-col text-left group/item"
                      >
                        <span className="text-sm font-medium text-[#322C2B] group-hover/item:text-[#C08264] transition-colors">
                          {item.label}
                        </span>
                        <span className="text-xs text-[#6E655E] font-light">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-2 ${
                  isActive 
                    ? (showSolidHeader ? 'text-[#C08264]' : 'text-[#D9A38A]') 
                    : (showSolidHeader ? 'text-[#322C2B] hover:text-[#C08264]' : 'text-[#FBF8F3]/90 hover:text-[#D9A38A]')
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${showSolidHeader ? 'bg-[#C08264]' : 'bg-[#D9A38A]'}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenBooking}
            className="bg-[#D9A38A] text-[#1E1918] hover:bg-[#C08264] hover:text-[#1E1918] font-body text-sm px-6 py-2.5 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 tracking-wide shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2 font-medium"
          >
            <Calendar className="w-4 h-4" />
            Book a free discovery call
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center lg:hidden space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors ${
              showSolidHeader 
                ? 'text-[#322C2B] hover:text-[#C08264]' 
                : 'text-[#FBF8F3]/90 hover:text-[#D9A38A]'
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#FBF8F3] border-b border-[#F2ECE3] shadow-lg overflow-y-auto max-h-[85vh]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                
                if (link.hasDropdown) {
                  const dropdownItems = link.label === 'Retreats' ? retreatsDropdown : modalitiesDropdown;
                  const isDropdownExpanded = activeDropdown === link.label;

                  return (
                    <div key={link.label} className="border-b border-[#F2ECE3]/60 pb-3">
                      <button 
                        onClick={() => setActiveDropdown(isDropdownExpanded ? null : link.label)}
                        className="flex items-center justify-between w-full text-base font-medium text-[#322C2B] text-left"
                      >
                        <span className={isActive ? 'text-[#C08264]' : ''}>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isDropdownExpanded && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 pl-4 flex flex-col gap-3 font-light"
                          >
                            {dropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm py-1.5 border-l-2 pl-3 transition-colors ${
                                  pathname === item.href 
                                    ? 'border-[#C08264] text-[#C08264] font-medium' 
                                    : 'border-transparent text-[#6E655E] hover:text-[#C08264]'
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium border-b border-[#F2ECE3]/60 pb-2 ${
                      isActive ? 'text-[#C08264]' : 'text-[#322C2B]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#D9A38A] text-[#1E1918] hover:bg-[#C08264] hover:text-[#1E1918] text-center font-medium font-body py-3.5 rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 tracking-wide mt-2 shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book a free discovery call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
