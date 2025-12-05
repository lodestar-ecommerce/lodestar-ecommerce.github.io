import { Link } from 'react-router-dom';

interface HeaderProps {
  showLogo?: boolean;
}

export function Header({ showLogo = true }: HeaderProps) {
  return (
    <header className="bg-white py-6 border-b border-[#E1E3E5]">
      <div className="max-w-[900px] mx-auto px-6 flex items-center gap-4">
        {showLogo && (
          <div className="w-10 h-10">
            <img
              src="/resources/gemify.png"
              alt="Gemify Logo"
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
    </header>
  );
}
