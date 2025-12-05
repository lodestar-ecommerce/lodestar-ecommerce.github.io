import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#00A87B] to-[#00BFA5] py-16 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to simplify your Shopify store?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join hundreds of merchants using our apps to save time and grow sales.
          </p>
          <a
            href="#apps"
            className="inline-block bg-white text-[#00A87B] px-8 py-4 rounded-xl text-lg font-semibold no-underline hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Our Apps
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo" className="bg-[#202223] text-white py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/resources/gemify.png"
                  alt="Gemify"
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">Gemify</span>
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Crafting powerful Shopify apps that help merchants save time and grow their business.
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Navigation</h4>
              <nav aria-label="Footer navigation" className="flex flex-col gap-3">
                <a href="#apps" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  Our Apps
                </a>
                <a href="#about" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  About Us
                </a>
                <a href="#contact" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <nav aria-label="Resources" className="flex flex-col gap-3">
                <Link to="/faq" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  FAQ
                </Link>
                <Link to="/privacy-policy" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  Privacy Policy
                </Link>
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sean.gemify@gmail.com"
                  className="text-[#00A87B] no-underline text-sm hover:underline"
                >
                  sean.gemify@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-[#374151] text-center">
            <p className="text-[#6D7175] text-sm">
              &copy; 2025 Gemify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
