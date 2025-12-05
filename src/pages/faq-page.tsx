import { Link } from 'react-router-dom';
import { Layout } from '../components/layout';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="mb-6 p-6 bg-[#F6F6F7] rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-lg font-semibold mb-3 text-[#202223] flex items-start gap-3">
        <span className="text-[#00A87B] font-bold shrink-0">Q:</span>
        <span>{question}</span>
      </div>
      <div className="text-base text-[#202223] leading-relaxed pl-8">{answer}</div>
    </div>
  );
}

interface FaqSectionProps {
  title: string;
  children: React.ReactNode;
}

function FaqSection({ title, children }: FaqSectionProps) {
  return (
    <div className="mb-12 last:mb-0">
      <h2 className="text-2xl font-bold mb-6 text-[#202223] pb-3 border-b-2 border-[#00A87B]">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function FaqPage() {
  return (
    <Layout>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-white my-10 p-12 rounded-xl shadow-sm md:p-8 md:my-6">
          <h1 className="text-4xl font-bold mb-4 text-[#202223] text-center md:text-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#6D7175] mb-12 text-center pb-8 border-b border-[#E1E3E5]">
            Find answers to common questions about Gemify and our apps. Can&apos;t find
            what you&apos;re looking for? Contact us at{' '}
            <a href="mailto:sean.gemify@gmail.com" className="text-[#00A87B] no-underline hover:underline">
              sean.gemify@gmail.com
            </a>
          </p>

          <FaqSection title="General Questions">
            <FaqItem
              question="What is Gemify?"
              answer={
                <p>
                  Gemify is a Shopify app development company focused on creating simple,
                  powerful tools for merchants. We build apps that solve real problems
                  without unnecessary complexity.
                </p>
              }
            />
            <FaqItem
              question="Are your apps safe to use?"
              answer={
                <p>
                  Yes, absolutely. All our apps follow Shopify&apos;s best practices and
                  security guidelines. We use industry-standard encryption, secure
                  authentication, and never share your data with third parties. Your store
                  data is protected at all times.
                </p>
              }
            />
            <FaqItem
              question="How do I get support?"
              answer={
                <p>
                  You can reach our support team by emailing{' '}
                  <a href="mailto:sean.gemify@gmail.com" className="text-[#00A87B] no-underline hover:underline">
                    sean.gemify@gmail.com
                  </a>
                  . We typically respond within 24 hours during business days.
                </p>
              }
            />
            <FaqItem
              question="Do you offer refunds?"
              answer={
                <p>
                  Our apps follow Shopify&apos;s standard refund policy. If you&apos;re not
                  satisfied with any of our apps, please contact us and we&apos;ll work with
                  you to resolve any issues or process a refund if appropriate.
                </p>
              }
            />
          </FaqSection>

          <FaqSection title="Bulk Delete Orders App">
            <FaqItem
              question="What does the Bulk Delete Orders app do?"
              answer={
                <p>
                  Bulk Delete Orders allows you to efficiently delete multiple orders from
                  your Shopify store at once. You can use powerful filters to target
                  specific orders by status, date, tags, or other criteria. The app
                  automatically cancels orders before deletion, saving you time and manual
                  work.
                </p>
              }
            />
            <FaqItem
              question="Is it safe to delete orders?"
              answer={
                <>
                  <p className="mb-3">
                    Yes, but please be careful. The app will automatically cancel orders
                    before deleting them to ensure proper handling. However, once orders are
                    deleted, they cannot be recovered. We recommend:
                  </p>
                  <ul className="list-disc pl-5 mb-0">
                    <li className="mb-2">
                      Using filters carefully to select only the orders you want to delete
                    </li>
                    <li className="mb-2">Starting with a small test batch first</li>
                    <li>Exporting your orders as a backup before bulk deletion</li>
                  </ul>
                </>
              }
            />
            <FaqItem
              question="Can I undo a deletion?"
              answer={
                <p>
                  No, once orders are deleted from Shopify, they cannot be restored through
                  our app or Shopify&apos;s admin. This is why we recommend being very
                  careful with your filters and starting with small test batches.
                </p>
              }
            />
            <FaqItem
              question="What filters are available?"
              answer={
                <>
                  <p className="mb-3">You can filter orders by:</p>
                  <ul className="list-disc pl-5 mb-0">
                    <li className="mb-2">Order status (pending, paid, fulfilled, etc.)</li>
                    <li className="mb-2">
                      Financial status (paid, pending, refunded, etc.)
                    </li>
                    <li className="mb-2">
                      Fulfillment status (unfulfilled, fulfilled, partially fulfilled)
                    </li>
                    <li className="mb-2">Date range (created date, updated date)</li>
                    <li className="mb-2">Order tags</li>
                    <li>And more</li>
                  </ul>
                </>
              }
            />
            <FaqItem
              question="How long does it take to delete orders?"
              answer={
                <p>
                  Deletion speed depends on the number of orders and Shopify&apos;s API rate
                  limits. The app processes deletions in the background, and you can track
                  progress in the Job History section. For large batches, it may take
                  several minutes to hours.
                </p>
              }
            />
            <FaqItem
              question="Can I track deletion jobs?"
              answer={
                <p>
                  Yes! The app includes a Job History feature where you can view all
                  deletion jobs, their status, and export reports for your records.
                </p>
              }
            />
            <FaqItem
              question="Will this affect my Shopify analytics?"
              answer={
                <p>
                  Yes, deleting orders will remove them from your Shopify analytics and
                  reports. The data associated with those orders will no longer appear in
                  your store&apos;s statistics. This is why we recommend carefully
                  considering which orders you want to delete.
                </p>
              }
            />
            <FaqItem
              question="What happens to customer information when I delete orders?"
              answer={
                <p>
                  Deleting an order removes the order record but does not delete the
                  customer account. Customer profiles remain in your store unless you
                  separately delete them through Shopify&apos;s customer management.
                </p>
              }
            />
            <FaqItem
              question="Can I delete draft orders or abandoned checkouts?"
              answer={
                <p>
                  Yes! Bulk Delete Orders supports both regular orders and draft orders. You
                  can bulk delete either type using powerful filters.
                </p>
              }
            />
            <FaqItem
              question="How much does Bulk Delete Orders cost?"
              answer={
                <>
                  <p className="mb-3">We offer simple pricing:</p>
                  <ul className="list-disc pl-5 mb-0">
                    <li className="mb-2">
                      <strong>Free plan:</strong> 50 bulk delete order/draft order operations
                    </li>
                    <li>
                      <strong>Complete plan ($36/year):</strong> Unlimited bulk delete
                      order/draft order operations
                    </li>
                  </ul>
                </>
              }
            />
          </FaqSection>

          <FaqSection title="Default Address Lock App">
            <FaqItem
              question="What does Default Address Lock do?"
              answer={
                <p>
                  Default Address Lock prevents Shopify from automatically overwriting your
                  customers&apos; default addresses when they place orders with different
                  shipping addresses. When a customer ships a gift to someone else, Shopify
                  normally changes their default address to the gift recipient&apos;s
                  address. Our app stops this from happening and keeps their original
                  default address intact.
                </p>
              }
            />
            <FaqItem
              question="Why does Shopify change customer default addresses?"
              answer={
                <>
                  <p className="mb-3">
                    This is a long-standing Shopify behavior (since 2015) where Shopify
                    automatically updates a customer&apos;s default address to match their
                    most recent order&apos;s shipping address. While intended for
                    convenience, it causes problems for:
                  </p>
                  <ul className="list-disc pl-5 mb-0">
                    <li className="mb-2">
                      Gift-focused stores where customers ship to different recipients
                    </li>
                    <li className="mb-2">B2B merchants where buyers ship to their clients</li>
                    <li className="mb-2">
                      Stores with CRM integrations that rely on accurate customer addresses
                    </li>
                    <li>Subscription box businesses</li>
                  </ul>
                </>
              }
            />
            <FaqItem
              question="How does the app detect which changes to block?"
              answer={
                <p>
                  Our smart detection system distinguishes between order-triggered address
                  changes and intentional manual updates. If a customer deliberately updates
                  their address in their account, that change will be preserved. Only
                  automatic overwrites caused by placing orders are reversed.
                </p>
              }
            />
            <FaqItem
              question="Will this affect my customers' ability to update their addresses?"
              answer={
                <p>
                  No. Customers can still manually update their default address at any time
                  through their account. The app only prevents automatic overwrites that
                  happen when orders are placed with different shipping addresses.
                </p>
              }
            />
            <FaqItem
              question="What data does Default Address Lock store?"
              answer={
                <p>
                  We follow a privacy-first approach and only store address IDs. We never
                  store actual address content like street names or cities. This minimal
                  data footprint ensures your customer information stays secure while still
                  providing full protection.
                </p>
              }
            />
            <FaqItem
              question="How much does Default Address Lock cost?"
              answer={
                <>
                  <p className="mb-3">
                    We offer order-based pricing to keep it affordable for stores of all
                    sizes:
                  </p>
                  <ul className="list-disc pl-5 mb-0">
                    <li className="mb-2">
                      <strong>Free:</strong> Up to 30 orders per month
                    </li>
                    <li className="mb-2">
                      <strong>Basic ($4.99/month):</strong> Up to 100 orders per month, or
                      $49.90/year and save 17%
                    </li>
                    <li className="mb-2">
                      <strong>Growth ($24.99/month):</strong> Up to 500 orders per month, or
                      $249.90/year and save 17%
                    </li>
                    <li>
                      <strong>Enterprise ($99/month):</strong> Unlimited orders, or
                      $990/year and save 17%
                    </li>
                  </ul>
                </>
              }
            />
            <FaqItem
              question="When will Default Address Lock be available?"
              answer={
                <p>
                  We&apos;re actively developing Default Address Lock and expect to launch
                  soon. Contact us at{' '}
                  <a href="mailto:sean.gemify@gmail.com" className="text-[#00A87B] no-underline hover:underline">
                    sean.gemify@gmail.com
                  </a>{' '}
                  if you&apos;d like to be notified when it&apos;s available or to join our
                  beta testing program.
                </p>
              }
            />
          </FaqSection>

          <FaqSection title="Pricing & Billing">
            <FaqItem
              question="How much do your apps cost?"
              answer={
                <p>
                  Pricing varies by app. You can view pricing details on each app&apos;s
                  listing page in the Shopify App Store. Most of our apps offer a free trial
                  period so you can test them before committing.
                </p>
              }
            />
            <FaqItem
              question="How am I billed?"
              answer={
                <p>
                  All billing is handled through Shopify. App charges appear on your regular
                  Shopify invoice and follow Shopify&apos;s billing cycle. You can cancel at
                  any time through your Shopify admin.
                </p>
              }
            />
            <FaqItem
              question="Is there a free trial?"
              answer={
                <p>
                  Many of our apps offer a free trial period. Check the specific app listing
                  in the Shopify App Store for trial availability and duration.
                </p>
              }
            />
            <FaqItem
              question="Can I cancel anytime?"
              answer={
                <p>
                  Yes, you can cancel any of our apps at any time through your Shopify
                  admin. Simply uninstall the app and you won&apos;t be charged for the next
                  billing cycle.
                </p>
              }
            />
          </FaqSection>

          <FaqSection title="Privacy & Security">
            <FaqItem
              question="What data do you collect?"
              answer={
                <p>
                  We only collect the minimum data necessary to provide our app services.
                  This typically includes store information and the specific data needed for
                  the app to function (e.g., order data for Bulk Delete Orders). For
                  complete details, please read our{' '}
                  <Link to="/privacy-policy" className="text-[#00A87B] no-underline hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              }
            />
            <FaqItem
              question="Do you sell my data?"
              answer={
                <p>
                  No, never. We do not sell, rent, or trade your data to third parties. Your
                  store data is used solely to provide the app services you&apos;ve
                  installed.
                </p>
              }
            />
            <FaqItem
              question="How is my data protected?"
              answer={
                <>
                  <p className="mb-3">We use industry-standard security measures including:</p>
                  <ul className="list-disc pl-5 mb-0">
                    <li className="mb-2">Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                    <li className="mb-2">Secure authentication via OAuth 2.0</li>
                    <li className="mb-2">Regular security audits</li>
                    <li>Strict access controls</li>
                  </ul>
                </>
              }
            />
            <FaqItem
              question="What happens to my data if I uninstall an app?"
              answer={
                <p>
                  When you uninstall one of our apps, we retain minimal data (store ID and
                  access tokens) for 30 days to facilitate potential reinstallation. After
                  30 days, all your data is permanently deleted from our systems.
                </p>
              }
            />
            <FaqItem
              question="Are you GDPR compliant?"
              answer={
                <p>
                  Yes, we comply with GDPR, CPRA, and other privacy regulations. We
                  subscribe to Shopify&apos;s mandatory compliance webhooks and handle data
                  subject requests appropriately. See our{' '}
                  <Link to="/privacy-policy" className="text-[#00A87B] no-underline hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  for details.
                </p>
              }
            />
          </FaqSection>

          <FaqSection title="Technical Questions">
            <FaqItem
              question="Which Shopify plans are supported?"
              answer={
                <p>
                  Our apps work with all Shopify plans, including Basic, Shopify, Advanced,
                  and Shopify Plus. Some features may vary based on your plan&apos;s API
                  access.
                </p>
              }
            />
            <FaqItem
              question="Do your apps work with Shopify Plus?"
              answer={<p>Yes, all our apps are fully compatible with Shopify Plus stores.</p>}
            />
            <FaqItem
              question="Will your apps slow down my store?"
              answer={
                <p>
                  No, our apps are designed to be lightweight and efficient. They operate
                  primarily on the backend and don&apos;t add any code to your storefront,
                  so there&apos;s no impact on your store&apos;s loading speed.
                </p>
              }
            />
            <FaqItem
              question="Do I need technical knowledge to use your apps?"
              answer={
                <p>
                  No technical knowledge is required. Our apps are designed to be
                  user-friendly and intuitive. If you can use Shopify&apos;s admin, you can
                  use our apps. We also provide support if you need help.
                </p>
              }
            />
            <FaqItem
              question="Can I use multiple Gemify apps together?"
              answer={
                <p>
                  Yes, our apps are designed to work independently and won&apos;t conflict
                  with each other. You can install and use as many Gemify apps as you need.
                </p>
              }
            />
          </FaqSection>

          {/* Contact Box */}
          <div className="bg-gradient-to-br from-[#00A87B] to-[#008060] text-white p-8 rounded-xl text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
            <p className="text-base mb-5 opacity-95">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help!
            </p>
            <a
              href="mailto:sean.gemify@gmail.com"
              className="inline-block bg-white text-[#00A87B] px-8 py-3 rounded-lg no-underline font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
