import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="text-center py-10 px-6 pb-8 bg-gradient-to-b from-[#F6F6F7] to-white animate-fade-in-up">
      <div className="w-[100px] h-[100px] mx-auto mb-6">
        <img
          src="/resources/gemify.png"
          alt="Gemify Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4 text-[#202223] md:text-4xl">
        Gemify
      </h1>
      <p className="text-2xl text-[#6D7175] mb-4 font-medium md:text-xl">
        Simple, powerful apps for Shopify merchants
      </p>
      <p className="text-lg text-[#6D7175] max-w-[650px] mx-auto md:text-base">
        Built by developers who understand your needs. No fluff, just tools that work.
      </p>
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
}

function AppCard({
  icon,
  title,
  features,
  buttonText,
  buttonHref,
  buttonDisabled = false,
  detailsLink,
}: AppCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-in-up-delay-1">
      <div className="flex items-center gap-6 mb-6 md:flex-col md:text-center">
        <div className="w-20 h-20 rounded-2xl shrink-0 overflow-hidden">
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#202223] md:text-2xl">{title}</h3>
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
              className="bg-[#C9CCCF] text-white px-6 py-3.5 rounded-lg text-base font-semibold cursor-not-allowed"
            >
              {buttonText}
            </button>
          ) : (
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A87B] text-white px-6 py-3.5 rounded-lg text-base font-semibold cursor-pointer hover:bg-[#008060] transition-colors no-underline"
            >
              {buttonText}
            </a>
          )}
          {detailsLink && (
            <Link
              to={detailsLink}
              className="bg-white border-2 border-[#00A87B] text-[#00A87B] px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#00A87B] hover:text-white transition-colors no-underline"
            >
              Learn More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturedAppsSection() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#202223] md:text-3xl">
          Featured Apps
        </h2>
        <div className="max-w-[800px] mx-auto space-y-8">
          <AppCard
            icon="/resources/bulk_delete_orders.png"
            title="Bulk Delete Orders"
            features={[
              'Use filters to precisely target specific orders for deletion',
              'Orders are automatically cancelled before deletion - no manual steps required',
              'Track all deletion jobs and export reports in Job History',
            ]}
            buttonText="View on Shopify App Store"
            buttonHref="https://apps.shopify.com/bulk-delete-orders"
          />
          <AppCard
            icon="/resources/default_address_lock.png"
            title="Default Address Lock"
            features={[
              "Prevent Shopify from overwriting customer default addresses after orders",
              'Smart detection distinguishes order-triggered changes from manual updates',
              'Perfect for gift stores, B2B merchants, and CRM-integrated shops',
            ]}
            buttonText="Coming Soon"
            buttonDisabled
            detailsLink="/apps/default-address-lock"
          />
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

function BenefitCard({ icon, title, description, delay = '' }: BenefitCardProps) {
  return (
    <div
      className={`bg-white/95 rounded-2xl p-10 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm ${delay}`}
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00A87B] to-[#008060] rounded-full flex items-center justify-center text-4xl">
        {icon}
      </div>
      <h3 className="text-[22px] font-bold mb-3 text-[#202223]">{title}</h3>
      <p className="text-base leading-relaxed text-[#6D7175]">{description}</p>
    </div>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#00A87B] to-[#008060] relative overflow-hidden">
      <div className="absolute -top-1/2 -right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full z-0" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <h2 className="text-center text-4xl font-bold mb-12 text-white md:text-3xl">
          Why Choose Gemify
        </h2>
        <div className="grid grid-cols-3 gap-8 max-w-[1200px] mx-auto md:grid-cols-1">
          <BenefitCard
            icon="&#9889;"
            title="Built by Shopify Experts"
            description="Our team has years of experience building high-quality apps for the Shopify ecosystem."
            delay="animate-fade-in-up-delay-1"
          />
          <BenefitCard
            icon="&#128737;"
            title="Reliable and Secure"
            description="Enterprise-grade security and reliability you can trust with your store data."
            delay="animate-fade-in-up-delay-2"
          />
          <BenefitCard
            icon="&#128172;"
            title="Excellent Support"
            description="Dedicated support team ready to help you succeed with our apps."
            delay="animate-fade-in-up-delay-3"
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#202223] md:text-3xl">
          About Gemify
        </h2>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-lg leading-relaxed text-[#6D7175] mb-6">
            Gemify was founded by a team of experienced Shopify developers who understand
            the challenges merchants face every day. We&apos;re passionate about creating
            simple, powerful tools that solve real problems.
          </p>
          <p className="text-lg leading-relaxed text-[#6D7175] mb-6">
            Our mission is to build apps that are intuitive, reliable, and genuinely helpful.
            No bloated features and no confusing interfaces. Just clean, efficient solutions
            that help your business thrive.
          </p>
          <p className="text-lg leading-relaxed text-[#6D7175]">
            Every app we create is built with the same attention to detail and commitment to
            quality that we&apos;d demand for our own stores. When you choose Gemify, you&apos;re
            choosing a partner dedicated to your success.
          </p>
        </div>
      </div>
    </section>
  );
}

interface SmallAppCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  buttonDisabled?: boolean;
}

function SmallAppCard({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  buttonDisabled,
}: SmallAppCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden">
        <img src={icon} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-[#202223]">{title}</h3>
      <p className="text-base text-[#6D7175] mb-5 leading-relaxed">{description}</p>
      {buttonDisabled ? (
        <button
          disabled
          className="bg-[#C9CCCF] text-white px-6 py-3.5 rounded-lg text-base font-semibold cursor-not-allowed"
        >
          {buttonText}
        </button>
      ) : (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00A87B] text-white px-6 py-3.5 rounded-lg text-base font-semibold cursor-pointer hover:bg-[#008060] transition-colors no-underline"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}

function OurAppsSection() {
  return (
    <section id="apps" className="py-16 px-6 bg-[#F6F6F7]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#202223] md:text-3xl">
          Our Apps
        </h2>
        <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto md:grid-cols-1">
          <SmallAppCard
            icon="/resources/bulk_delete_orders.png"
            title="Bulk Delete Orders"
            description="Efficiently manage your store by deleting multiple orders at once with powerful filtering options and automatic cancellation."
            buttonText="View App"
            buttonHref="https://apps.shopify.com/bulk-delete-orders"
          />
          <SmallAppCard
            icon="/resources/default_address_lock.png"
            title="Default Address Lock"
            description="Protect your customers' default addresses from being overwritten when they ship orders to different locations. Smart detection, automatic restoration."
            buttonText="Coming Soon"
            buttonDisabled
          />
          <SmallAppCard
            icon="/resources/gemify.png"
            title="More Apps Coming Soon"
            description="We're working on exciting new tools to help you manage and grow your Shopify store. Stay tuned for updates!"
            buttonText="Coming Soon"
            buttonDisabled
          />
        </div>
      </div>
    </section>
  );
}

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
        alert('Thank you! Your email has been sent successfully.');
      } else {
        alert('Oops! There was a problem sending your message. Please try again.');
      }
    } catch {
      alert('Oops! There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#202223] md:text-3xl">
          Get In Touch
        </h2>
        <div className="max-w-[600px] mx-auto">
          {isSuccess && (
            <div className="bg-[#E8F5F1] border-2 border-[#00A87B] rounded-lg p-5 text-center text-[#202223] text-base mb-5">
              <div className="text-xl font-bold text-[#00A87B] mb-2">Thank You!</div>
              <p>Your message has been sent successfully. We&apos;ll get back to you soon!</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-5 ${isSuccess ? 'opacity-60 pointer-events-none' : ''}`}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#202223]">
                Name<span className="text-[#D72C0D] ml-1">*</span>
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className="px-4 py-3 border border-[#C9CCCF] rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-[#00A87B]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#202223]">
                Email<span className="text-[#D72C0D] ml-1">*</span>
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="px-4 py-3 border border-[#C9CCCF] rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-[#00A87B]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#202223]">
                Subject<span className="text-[#D72C0D] ml-1">*</span>
              </label>
              <input
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                className="px-4 py-3 border border-[#C9CCCF] rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-[#00A87B]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#202223]">
                Message<span className="text-[#D72C0D] ml-1">*</span>
              </label>
              <textarea
                required
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="px-4 py-3 border border-[#C9CCCF] rounded-lg text-base font-inherit min-h-[120px] resize-y transition-colors focus:outline-none focus:border-[#00A87B]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="bg-[#00A87B] text-white px-6 py-3.5 rounded-lg text-base font-semibold cursor-pointer hover:bg-[#008060] transition-colors disabled:bg-[#C9CCCF] disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedAppsSection />
      <WhyChooseSection />
      <AboutSection />
      <OurAppsSection />
      <ContactSection />
    </div>
  );
}
