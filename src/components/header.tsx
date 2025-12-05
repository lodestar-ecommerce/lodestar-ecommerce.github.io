import { Link } from 'react-router-dom';

interface HeaderProps {
  showLogo?: boolean;
}

export function Header({ showLogo = true }: HeaderProps) {
  return (
    <header role="banner" className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-4 border-b border-[#E1E3E5]">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          {showLogo && (
            <div className="w-10 h-10">
              <img
                src="/resources/gemify.png"
                alt="Gemify Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <Link
            to="/"
            className="text-2xl font-bold text-[#202223] no-underline hover:text-[#00A87B] transition-colors"
          >
            Gemify
          </Link>
        </div>

        {/* Navigation - Desktop Only */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <a
            href="/#apps"
            className="text-[#202223] no-underline text-sm font-medium hover:text-[#00A87B] transition-colors"
          >
            Apps
          </a>
          <a
            href="/#about"
            className="text-[#202223] no-underline text-sm font-medium hover:text-[#00A87B] transition-colors"
          >
            About
          </a>
          <a
            href="/#contact"
            className="text-[#202223] no-underline text-sm font-medium hover:text-[#00A87B] transition-colors"
          >
            Contact
          </a>
          <a
            href="/#apps"
            className="bg-[#00A87B] text-white px-5 py-2.5 rounded-lg text-sm font-semibold no-underline hover:bg-[#008060] transition-colors"
          >
            Explore Apps
          </a>
        </nav>
      </div>
    </header>
  );
}
