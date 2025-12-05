import { Link } from 'react-router-dom';
import { Filter, Trash2, AlertTriangle, Check, History, FileText, Shield } from 'lucide-react';
import { Layout } from '../components/layout';

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
      <p className="text-[#616569] text-sm leading-relaxed">{description}</p>
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
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
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
        <span className={`text-sm ${highlighted ? 'text-white/80' : 'text-[#616569]'}`}>
          /{period}
        </span>
      </div>
      <p className={`text-sm mb-4 ${highlighted ? 'text-white/90' : 'text-[#616569]'}`}>
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

export function BulkDeleteOrdersPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F6F6F7] to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src="/resources/bulk_delete_orders.png"
              alt="Bulk Delete Orders"
              className="w-full h-full object-contain rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202223] mb-4">
            Bulk Delete Orders
          </h1>
          <p className="text-xl text-[#616569] mb-6 max-w-2xl mx-auto">
            Clean up your Shopify store by bulk deleting test orders, old data, or unwanted
            orders with powerful filters and automatic cancellation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://apps.shopify.com/bulk-delete-orders"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A87B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#008060] hover:shadow-lg transition-all no-underline"
            >
              Install Free
            </a>
            <Link
              to="/#contact"
              className="bg-white border-2 border-[#00A87B] text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00A87B] hover:text-white transition-colors no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            The Problem
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            Shopify doesn&apos;t provide a native way to bulk delete orders. Manually deleting
            hundreds or thousands of orders one by one is time-consuming and error-prone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Test Orders Cluttering Data
              </h3>
              <p className="text-red-600 text-sm">
                Development and testing leave behind fake orders that pollute your analytics
                and make it hard to see real business performance.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Migration Cleanup
              </h3>
              <p className="text-red-600 text-sm">
                After migrating from another platform, you may have imported orders that
                you no longer need and want to clean up.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Duplicate Orders
              </h3>
              <p className="text-red-600 text-sm">
                System glitches or integration issues can create duplicate orders that
                need to be cleaned up efficiently.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                GDPR / Privacy Compliance
              </h3>
              <p className="text-red-600 text-sm">
                Privacy regulations may require you to delete old customer data, including
                order records, after a certain period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            How It Works
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            Our app makes bulk order deletion simple, safe, and trackable. Filter orders
            precisely, then delete them with a single click.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Filter className="w-6 h-6" />}
              title="Powerful Filters"
              description="Filter orders by date range, status, tags, customer, financial status, and more. Target exactly the orders you want to delete."
            />
            <FeatureCard
              icon={<Trash2 className="w-6 h-6" />}
              title="Auto-Cancel & Delete"
              description="Orders are automatically cancelled before deletion - no manual steps required. Fulfilled orders are handled gracefully."
            />
            <FeatureCard
              icon={<History className="w-6 h-6" />}
              title="Job History"
              description="Track all deletion jobs with detailed logs. Export reports for compliance and audit purposes."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Export Reports"
              description="Generate detailed reports of deleted orders for your records. Perfect for compliance documentation and audit trails."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Safe & Reversible Preview"
              description="Preview orders before deletion. See exactly what will be deleted and confirm before proceeding."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            Simple Pricing
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            Start for free and upgrade as your needs grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <PricingCard
              name="Free"
              price="$0"
              period="month"
              description="Try it out"
              features={['Delete up to 50 orders', 'Basic filters', 'Email support']}
            />
            <PricingCard
              name="Pro"
              price="$9.99"
              period="month"
              description="For active stores"
              features={['Unlimited deletions', 'All filters', 'Job history', 'Priority support']}
              highlighted
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              period="month"
              description="For large operations"
              features={['Volume discounts', 'API access', 'Dedicated support', 'Custom filters']}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#00A87B] to-[#008060]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Clean Up Your Store?
          </h2>
          <p className="text-white/90 mb-8">
            Install Bulk Delete Orders today and save hours of manual work. Free plan
            available to get started.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://apps.shopify.com/bulk-delete-orders"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-shadow no-underline"
            >
              Install Free on Shopify
            </a>
            <Link
              to="/faq"
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
