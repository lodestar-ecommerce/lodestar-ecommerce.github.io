import { Link } from 'react-router-dom';
import { Home, Gift, AlertTriangle, Shield, Check, X, ArrowDown } from 'lucide-react';
import { Layout } from '../components/layout';

function AddressFlowDiagram() {
  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Default Address Protection
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Without App - Left */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-100">
          <div className="flex items-center gap-2 mb-6">
            <X className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-semibold text-red-600">Without Our App</h3>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Step 1</p>
                <p className="font-medium">Default address is <span className="text-blue-600 font-bold">A</span> (Your home)</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 2 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Step 2</p>
                <p className="font-medium">You ship a gift to <span className="text-purple-600 font-bold">B</span> (Friend&apos;s address)</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 3 */}
            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Step 3</p>
                <p className="font-medium text-red-700">Shopify changes default to <span className="font-bold">B</span></p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Result */}
            <div className="p-4 bg-red-100 rounded-xl border-2 border-red-300">
              <p className="text-center font-semibold text-red-700">
                Default address is now wrong!
              </p>
              <p className="text-center text-sm text-red-600 mt-1">
                Future orders may ship to the wrong place
              </p>
            </div>
          </div>
        </div>

        {/* With App - Right */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100">
          <div className="flex items-center gap-2 mb-6">
            <Check className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-semibold text-green-600">With Our App</h3>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Step 1</p>
                <p className="font-medium">Default address is <span className="text-blue-600 font-bold">A</span> (Your home)</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 2 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Step 2</p>
                <p className="font-medium">You ship a gift to <span className="text-purple-600 font-bold">B</span> (Friend&apos;s address)</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 3 */}
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Step 3</p>
                <p className="font-medium text-green-700">App detects change &amp; reverts to <span className="font-bold">A</span></p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Result */}
            <div className="p-4 bg-green-100 rounded-xl border-2 border-green-300">
              <p className="text-center font-semibold text-green-700">
                Default address stays correct!
              </p>
              <p className="text-center text-sm text-green-600 mt-1">
                Your home address remains protected
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3 text-center">What We Do</h3>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <X className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">We don&apos;t change order addresses</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">We protect your default address</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="w-12 h-12 bg-[#00A87B]/10 rounded-lg flex items-center justify-center mb-4 text-[#00A87B]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#202223] mb-2">{title}</h3>
      <p className="text-[#6D7175] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  yearlyPrice?: string;
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  yearlyPrice,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl p-6 ${
        highlighted
          ? 'bg-gradient-to-br from-[#00A87B] to-[#008060] text-white shadow-lg scale-105'
          : 'bg-white border border-gray-200'
      }`}
    >
      <h3
        className={`text-xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-[#202223]'}`}
      >
        {name}
      </h3>
      <div className="mb-4">
        <span
          className={`text-3xl font-bold ${highlighted ? 'text-white' : 'text-[#202223]'}`}
        >
          {price}
        </span>
        <span className={`text-sm ${highlighted ? 'text-white/80' : 'text-[#6D7175]'}`}>
          /{period}
        </span>
        {yearlyPrice && (
          <p className={`text-xs mt-1 ${highlighted ? 'text-white/70' : 'text-[#6D7175]'}`}>
            or {yearlyPrice}/year (save 17%)
          </p>
        )}
      </div>
      <p className={`text-sm mb-4 ${highlighted ? 'text-white/90' : 'text-[#6D7175]'}`}>
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                highlighted ? 'text-white' : 'text-[#00A87B]'
              }`}
            />
            <span className={highlighted ? 'text-white/90' : 'text-[#202223]'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DefaultAddressLockPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F6F6F7] to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src="/resources/default_address_lock.png"
              alt="Default Address Lock"
              className="w-full h-full object-contain rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202223] mb-4">
            Default Address Lock
          </h1>
          <p className="text-xl text-[#6D7175] mb-6 max-w-2xl mx-auto">
            Prevent Shopify from overwriting your customers&apos; default addresses when they
            ship orders to different locations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              disabled
              className="bg-[#C9CCCF] text-white px-8 py-4 rounded-lg text-lg font-semibold cursor-not-allowed"
            >
              Coming Soon
            </button>
            <a
              href="mailto:sean.gemify@gmail.com?subject=Default Address Lock Beta Interest"
              className="bg-white border-2 border-[#00A87B] text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00A87B] hover:text-white transition-colors no-underline"
            >
              Join Beta Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            The Problem
          </h2>
          <p className="text-center text-[#6D7175] mb-12 max-w-2xl mx-auto">
            Since 2015, Shopify has automatically changed customers&apos; default addresses
            whenever they place an order with a different shipping address. This causes
            major headaches for merchants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Gift Stores
              </h3>
              <p className="text-red-600 text-sm">
                Customers who send gifts to friends and family find their default address
                constantly changing to gift recipients&apos; addresses.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                B2B Merchants
              </h3>
              <p className="text-red-600 text-sm">
                Business buyers who ship to their clients end up with incorrect default
                addresses, disrupting future orders.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                CRM-Integrated Shops
              </h3>
              <p className="text-red-600 text-sm">
                Stores relying on accurate customer data for marketing or fulfillment face
                data integrity issues.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Subscription Businesses
              </h3>
              <p className="text-red-600 text-sm">
                One-time gift shipments can override the subscription delivery address,
                causing recurring shipments to go to the wrong place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagram */}
      <AddressFlowDiagram />

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            How It Works
          </h2>
          <p className="text-center text-[#6D7175] mb-12 max-w-2xl mx-auto">
            Our app intelligently monitors address changes and automatically restores the
            original default address when Shopify tries to overwrite it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Smart Detection"
              description="Distinguishes between order-triggered changes and intentional manual updates. Manual changes are preserved."
            />
            <FeatureCard
              icon={<Home className="w-6 h-6" />}
              title="Automatic Restoration"
              description="When Shopify overwrites a default address after an order, we automatically restore the original."
            />
            <FeatureCard
              icon={<Check className="w-6 h-6" />}
              title="Privacy-First"
              description="We only store address IDs, never actual address content. Your customer data stays secure in Shopify."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            Simple, Order-Based Pricing
          </h2>
          <p className="text-center text-[#6D7175] mb-12 max-w-2xl mx-auto">
            Pay only for what you use. Our pricing scales with your order volume.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <PricingCard
              name="Free"
              price="$0"
              period="month"
              description="Perfect for small stores"
              features={['Up to 30 orders/month', 'Basic protection', 'Email support']}
            />
            <PricingCard
              name="Basic"
              price="$4.99"
              period="month"
              description="For growing businesses"
              features={['Up to 100 orders/month', 'Full protection', 'Priority support']}
              yearlyPrice="$49.90"
            />
            <PricingCard
              name="Growth"
              price="$24.99"
              period="month"
              description="For established stores"
              features={['Up to 500 orders/month', 'Full protection', 'Priority support']}
              highlighted
              yearlyPrice="$249.90"
            />
            <PricingCard
              name="Enterprise"
              price="$99"
              period="month"
              description="For high-volume merchants"
              features={['Unlimited orders', 'Full protection', 'Dedicated support']}
              yearlyPrice="$990"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#00A87B] to-[#008060]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be the First to Know
          </h2>
          <p className="text-white/90 mb-8">
            Default Address Lock is coming soon. Join our beta waitlist to get early access
            and exclusive launch pricing.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:sean.gemify@gmail.com?subject=Default Address Lock Beta Interest"
              className="bg-white text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-shadow no-underline"
            >
              Join Beta Waitlist
            </a>
            <Link
              to="/faq#default-address-lock-app"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
