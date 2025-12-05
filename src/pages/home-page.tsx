import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Store, Shield, MessageCircle, Quote, Lock, Star, Loader2, Clock, CheckCircle } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative text-center py-12 md:py-16 lg:py-20 px-6 overflow-hidden animate-fade-in-up">
      {/* Decorative gradient orbs - hidden from screen readers */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-radial from-[#00A87B]/10 via-[#00BFA5]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none will-change-transform" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#00A87B]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none will-change-transform" />

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Social proof badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 bg-[#E8F5F1] text-[#00A87B] rounded-full text-sm font-medium animate-fade-in-up-delay-1">
          <span className="w-2 h-2 bg-[#00A87B] rounded-full animate-pulse" />
          Trusted by 500+ Shopify merchants
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#202223] leading-[1.05] tracking-tight animate-fade-in-up-delay-1">
          Apps That Actually Help Your Shopify Store
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#616569] mb-8 max-w-[700px] mx-auto leading-relaxed animate-fade-in-up-delay-2">
          Simple, powerful tools built by developers who understand merchant needs. No fluff, just results.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a
            href="#apps"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00A87B] text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#00A87B]/25 hover:bg-[#008060] hover:shadow-xl hover:shadow-[#00A87B]/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Our Apps
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-[#00A87B] text-lg font-semibold hover:text-[#008060] transition-colors"
          >
            Get in Touch →
          </a>
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-[#616569] animate-fade-in-up-delay-3">
          <div className="flex items-center gap-1 text-[#F5C518]">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="text-[#616569]">5-star rated on Shopify App Store</span>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  text: string;
}

function FeatureItem({ text }: FeatureItemProps) {
  return (
    <li className="flex items-start gap-3 mb-3 last:mb-0">
      <span className="text-[#00A87B] text-xl shrink-0 mt-0.5">&#10003;</span>
      <span>{text}</span>
    </li>
  );
}

interface AppCardProps {
  icon: string;
  title: string;
  features: string[];
  buttonText: string;
  buttonHref?: string;
  buttonDisabled?: boolean;
  detailsLink?: string;
  rating?: number;
  isComingSoon?: boolean;
}

function AppCard({
  icon,
  title,
  features,
  buttonText,
  buttonHref,
  buttonDisabled = false,
  detailsLink,
  rating,
  isComingSoon = false,
}: AppCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isComingSoon ? 'relative overflow-hidden' : ''}`}>
      {/* Coming Soon badge */}
      {isComingSoon && (
        <div className="absolute top-3 right-3 px-3 py-1 bg-[#FFF3CD] text-[#856404] text-xs font-semibold rounded-full">
          Coming Soon
        </div>
      )}

      <div className="flex items-center gap-5 mb-5 md:flex-col md:text-center">
        <div className={`w-20 h-20 rounded-xl shrink-0 overflow-hidden shadow-sm ${isComingSoon ? 'opacity-80' : ''}`}>
          <img
            src={icon}
            alt={title}
            width={80}
            height={80}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 md:justify-center">
            <h3 className="text-2xl font-bold text-[#202223]">{title}</h3>
            {rating && (
              <div className="flex items-center gap-1 px-2 py-1 bg-[#FFF8E1] rounded-lg">
                <Star className="w-4 h-4 text-[#F5C518] fill-current" />
                <span className="text-sm font-semibold text-[#202223]">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="list-none p-0 m-0">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </ul>
        <div className="flex gap-3 flex-wrap">
          {buttonDisabled ? (
            <button
              disabled
              className="bg-[#C9CCCF] text-white px-6 py-3.5 rounded-xl text-base font-semibold cursor-not-allowed"
            >
              {buttonText}
            </button>
          ) : (
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A87B] text-white px-6 py-3.5 rounded-xl text-base font-semibold cursor-pointer hover:bg-[#008060] hover:shadow-lg transition-all duration-200 no-underline"
            >
              {buttonText}
            </a>
          )}
          {detailsLink && (
            <Link
              to={detailsLink}
              className="bg-white border-2 border-[#00A87B] text-[#00A87B] px-6 py-3 rounded-xl text-base font-semibold hover:bg-[#00A87B] hover:text-white transition-all duration-200 no-underline"
            >
              Learn More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function AppsSection() {
  return (
    <section id="apps" className="py-12 md:py-16 px-6 bg-[#F6F6F7]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#202223]">
            Our Shopify Apps
          </h2>
          <p className="text-lg text-[#616569] max-w-[600px] mx-auto">
            Simple, powerful tools to streamline your store operations
          </p>
        </div>

        {/* Apps grid */}
        <div className="max-w-[900px] mx-auto space-y-6">
          <AppCard
            icon="/resources/bulk_delete_orders.png"
            title="Bulk Delete Orders"
            features={[
              'Use filters to precisely target specific orders for deletion',
              'Orders are automatically cancelled before deletion - no manual steps required',
              'Track all deletion jobs and export reports in Job History',
            ]}
            buttonText="Install Free"
            buttonHref="https://apps.shopify.com/bulk-delete-orders"
            rating={5.0}
            detailsLink="/apps/bulk-delete-orders"
          />
          <AppCard
            icon="/resources/default_address_lock.png"
            title="Default Address Lock"
            features={[
              "Prevent Shopify from overwriting customer default addresses after orders",
              'Smart detection distinguishes order-triggered changes from manual updates',
              'Perfect for gift stores, B2B merchants, and CRM-integrated shops',
            ]}
            buttonText="Install Free"
            buttonHref="https://apps.shopify.com/default-address-lock"
            detailsLink="/apps/default-address-lock"
          />
        </div>

        {/* Mid-page CTA */}
        <div className="text-center mt-8">
          <p className="text-lg text-[#616569] mb-3">More apps in development</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#00A87B] font-semibold hover:text-[#008060] transition-colors"
          >
            Get notified when we launch new apps →
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Your app saved my team about 8 hours of clicking buttons in Shopify, and turned it into a 5 minute project.",
      name: "Jared",
      role: "Barbell Standard",
      url: "https://barbellstandard.com",
    },
    {
      quote: "Finally, apps that just work without complicated setup. The support team is incredibly responsive too.",
      name: "Michael T.",
      role: "Shopify Plus Merchant",
    },
  ];

  return (
    <section className="py-10 px-6 bg-white border-y border-[#E1E3E5]">
      <div className="max-w-[1000px] mx-auto">
        {/* Compact header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-0.5 text-[#F5C518]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-[#202223]">5-star rated on Shopify App Store</span>
        </div>

        {/* Testimonials - horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex gap-4">
              <Quote className="w-8 h-8 text-[#00A87B]/30 shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-[#202223] text-sm leading-relaxed mb-3 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00A87B] to-[#008060] flex items-center justify-center text-white text-xs font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <span className="text-xs text-[#616569]">
                    <strong className="text-[#202223] font-medium">{t.name}</strong> ·{' '}
                    {t.url ? (
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-[#00A87B] hover:underline">
                        {t.role}
                      </a>
                    ) : (
                      t.role
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

function BenefitCard({ icon, title, description, delay = '' }: BenefitCardProps) {
  return (
    <div
      className={`bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl will-change-transform ${delay}`}
    >
      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#00A87B] to-[#008060] rounded-xl flex items-center justify-center">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="font-heading text-lg font-bold mb-2 text-[#202223]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#616569]">{description}</p>
    </div>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-12 md:py-16 px-6 bg-gradient-to-br from-[#00A87B] to-[#008060] relative overflow-hidden">
      {/* Decorative elements */}
      <div aria-hidden="true" className="absolute -top-1/2 -right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full" />
      <div aria-hidden="true" className="absolute -bottom-1/4 -left-[5%] w-[300px] h-[300px] bg-white/5 rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why Merchants Choose Gemify
          </h2>
          <p className="text-lg text-white/80 max-w-[600px] mx-auto">
            Tools built with your success in mind
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <BenefitCard
            icon={<Store className="w-6 h-6" />}
            title="Shopify Expertise"
            description="Built by certified Shopify experts who understand your daily challenges."
            delay="animate-fade-in-up-delay-1"
          />
          <BenefitCard
            icon={<Shield className="w-6 h-6" />}
            title="Enterprise Security"
            description="Bank-grade security protecting your store data 24/7."
            delay="animate-fade-in-up-delay-2"
          />
          <BenefitCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="Responsive Support"
            description="Real human support ready to help. No bots, just genuine assistance."
            delay="animate-fade-in-up-delay-3"
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-10 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8 text-[#202223]">
          About Gemify
        </h2>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-base leading-relaxed text-[#616569] mb-4">
            Gemify was founded by experienced Shopify developers who understand
            the challenges merchants face. We&apos;re passionate about creating
            simple, powerful tools that solve real problems.
          </p>
          <p className="text-base leading-relaxed text-[#616569] mb-4">
            Our mission: intuitive, reliable apps. No bloated features or confusing interfaces.
            Just clean, efficient solutions that help your business thrive.
          </p>
          <p className="text-base leading-relaxed text-[#616569]">
            Every app is built with the same attention to detail we&apos;d demand for our own stores.
            When you choose Gemify, you&apos;re choosing a partner dedicated to your success.
          </p>
        </div>
      </div>
    </section>
  );
}

const MESSAGE_MAX_LENGTH = 500;

function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('access_key', 'fa917ce1-31bc-4c87-ac0d-bcf16aca9fc3');
      formData.append('subject', 'New Contact Form Submission from Gemify');
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('custom_subject', formState.subject);
      formData.append('message', formState.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        alert('Oops! There was a problem sending your message. Please try again.');
      }
    } catch {
      alert('Oops! There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common input styles for 44px+ touch targets
  const inputClassName =
    'w-full px-4 py-4 border-2 border-[#E1E3E5] rounded-xl text-base transition-all duration-200 focus:outline-none focus:border-[#00A87B] focus:ring-4 focus:ring-[#00A87B]/10';

  return (
    <section id="contact" className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#202223]">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#616569]">
            <Clock className="w-4 h-4" />
            <span>We typically respond within 24 hours</span>
          </div>
        </div>

        <div className="max-w-[600px] mx-auto">
          {/* Success message */}
          {isSuccess && (
            <div className="bg-[#E8F5F1] border-2 border-[#00A87B] rounded-2xl p-6 text-center mb-6">
              <CheckCircle className="w-12 h-12 text-[#00A87B] mx-auto mb-3" />
              <div className="text-xl font-bold text-[#00A87B] mb-2">Thank You!</div>
              <p className="text-[#202223] mb-4">
                Your message has been sent successfully. We&apos;ll get back to you soon!
              </p>
              <a
                href="#apps"
                className="inline-flex items-center gap-2 text-[#00A87B] font-semibold hover:text-[#008060] transition-colors"
              >
                Explore our apps while you wait →
              </a>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 ${isSuccess ? 'opacity-40 pointer-events-none' : ''}`}
          >
            {/* Name field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#202223]">
                Name<span className="text-[#D72C0D] ml-1">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className={inputClassName}
              />
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#202223]">
                Email<span className="text-[#D72C0D] ml-1">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className={inputClassName}
              />
            </div>

            {/* Subject field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#202223]">
                Subject<span className="text-[#D72C0D] ml-1">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="How can we help?"
                value={formState.subject}
                onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                className={inputClassName}
              />
            </div>

            {/* Message field with character counter */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-[#202223]">
                  Message<span className="text-[#D72C0D] ml-1">*</span>
                </label>
                <span
                  className={`text-xs ${formState.message.length > MESSAGE_MAX_LENGTH ? 'text-[#D72C0D]' : 'text-[#616569]'}`}
                >
                  {formState.message.length}/{MESSAGE_MAX_LENGTH}
                </span>
              </div>
              <textarea
                required
                placeholder="Tell us more about your question or feedback..."
                maxLength={MESSAGE_MAX_LENGTH}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className={`${inputClassName} min-h-[120px] resize-y`}
              />
            </div>

            {/* Submit button - larger touch target */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full md:w-auto bg-[#00A87B] text-white px-8 py-4 rounded-xl text-lg font-semibold cursor-pointer hover:bg-[#008060] hover:shadow-lg transition-all duration-200 disabled:bg-[#C9CCCF] disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Security indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#616569]">
              <Lock className="w-4 h-4" />
              <span>Your information is secure and will never be shared</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#apps"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00A87B] focus:text-white focus:rounded-lg focus:no-underline"
      >
        Skip to main content
      </a>
      <HeroSection />
      <AppsSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
