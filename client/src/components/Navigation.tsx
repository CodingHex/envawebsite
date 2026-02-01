import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

/**
 * Navigation Component
 * - Fixed header
 * - Shrinks on scroll
 * - Smooth logo resize
 * - Desktop + Mobile menu
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products', hasDropdown: true },
    { label: 'Purpose', href: '#purpose', hasDropdown: true },
    { label: 'Culture', href: '#culture' },
    { label: 'Stories', href: '#stories' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 bg-white
          transition-all duration-300 ease-in-out
          ${scrolled ? 'h-16 shadow-md' : 'h-20 shadow-sm'}
        `}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/enva-logo.png"
              alt="ENVA Logo"
              className={`
                w-auto object-contain transition-all duration-300
                ${scrolled ? 'h-16' : 'h-35'}
              `}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                {item.hasDropdown && <span className="text-xs ml-1">▼</span>}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-primary transition-colors">
              <Search size={20} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full z-40 lg:hidden bg-white border-t border-gray-200 py-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
