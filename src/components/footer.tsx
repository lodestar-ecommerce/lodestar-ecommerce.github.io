import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#202223] text-white py-8 px-6 mt-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
        <nav className="flex gap-8 flex-wrap justify-center">
          <Link
            to="/#about"
            className="text-white no-underline text-sm hover:text-[#00A87B] transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/#apps"
            className="text-white no-underline text-sm hover:text-[#00A87B] transition-colors"
          >
            Our Apps
          </Link>
          <Link
            to="/faq"
            className="text-white no-underline text-sm hover:text-[#00A87B] transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/privacy-policy"
            className="text-white no-underline text-sm hover:text-[#00A87B] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/#contact"
            className="text-white no-underline text-sm hover:text-[#00A87B] transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="text-[#6D7175] text-sm">
          Email:{' '}
          <a
            href="mailto:sean.gemify@gmail.com"
            className="text-[#00A87B] no-underline hover:underline"
          >
            sean.gemify@gmail.com
          </a>
        </div>
        <div className="text-[#6D7175] text-sm">
          &copy; 2025 Gemify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
