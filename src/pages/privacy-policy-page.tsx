import { Layout } from '../components/layout';

interface HighlightBoxProps {
  children: React.ReactNode;
}

function HighlightBox({ children }: HighlightBoxProps) {
  return (
    <div className="bg-[#F6F6F7] border-l-4 border-[#00A87B] py-4 px-5 my-6 rounded">
      {children}
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-white my-10 p-12 rounded-xl shadow-sm md:p-8 md:my-6">
          <h1 className="text-4xl font-bold mb-4 text-[#202223] md:text-3xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#6D7175] mb-8 pb-6 border-b border-[#E1E3E5]">
            Last Updated: November 27, 2025
          </p>

          <p className="mb-4 text-[#202223]">
            At Gemify (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we take your
            privacy seriously. This Privacy Policy explains how our Shopify applications,
            including Bulk Delete Orders and Default Address Lock (collectively, &quot;our
            Apps&quot;), collect, use, store, and protect your information when you use our
            services.
          </p>

          <HighlightBox>
            <p className="mb-2">
              <strong className="font-semibold text-[#202223]">Key Points:</strong>
            </p>
            <ul className="list-disc pl-6 mb-0">
              <li className="mb-2 text-[#202223]">
                We only collect the minimum data necessary to provide our services
              </li>
              <li className="mb-2 text-[#202223]">
                We do not sell or share your data with third parties for marketing purposes
              </li>
              <li className="mb-2 text-[#202223]">
                You have full control over your data and can request deletion at any time
              </li>
              <li className="text-[#202223]">
                We comply with GDPR, CPRA, and other applicable privacy laws
              </li>
            </ul>
          </HighlightBox>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            1. Information We Collect
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            1.1 Information Collected Through Shopify APIs
          </h3>
          <p className="mb-4 text-[#202223]">
            When you install and use our Apps, we access the following information through
            Shopify&apos;s APIs:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Store Information:</strong> Store name,
              store domain, store owner email, and store timezone
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Order Data:</strong> Order details including
              order numbers, dates, statuses, financial status, and fulfillment status (for
              Bulk Delete Orders app)
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Customer Data:</strong> Customer IDs and
              address IDs only (for Default Address Lock app) - we never store personal
              information such as names, addresses, or contact details
            </li>
            <li className="text-[#202223]">
              <strong className="font-semibold">API Access Tokens:</strong> Tokens necessary
              to authenticate and communicate with your Shopify store
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            1.2 Information Collected Directly From Merchants
          </h3>
          <p className="mb-4 text-[#202223]">
            We may collect the following information directly from you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Contact Information:</strong> Email address,
              name (if provided through support requests or forms)
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Usage Data:</strong> Information about how
              you interact with our Apps, including features used and settings configured
            </li>
            <li className="text-[#202223]">
              <strong className="font-semibold">Support Communications:</strong> Messages,
              feedback, and other communications you send to us
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            1.3 Information Collected From Merchants&apos; Customers
          </h3>
          <p className="mb-4 text-[#202223]">
            Our Apps are designed to minimize the collection of end-customer data:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Bulk Delete Orders:</strong> We do not
              directly access or store customer personal information (such as names,
              addresses, or payment details). Order data accessed through Shopify&apos;s
              APIs may contain references to customers, but we do not separately store or
              process customer personal data.
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Default Address Lock:</strong> Privacy-first
              design - we only store customer IDs and address IDs to enable the address
              locking functionality. We never store personal information (names, addresses,
              phone numbers, etc.). All personal data remains securely within Shopify.
            </li>
            <li className="text-[#202223]">
              We do not use cookies or tracking technologies on customer-facing storefronts
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            1.4 Automatically Collected Information
          </h3>
          <p className="mb-4 text-[#202223]">
            We automatically collect certain technical information when you use our Apps:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Log Data:</strong> IP addresses, browser
              type, operating system, access times, and error logs
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Device Information:</strong> Device type and
              unique identifiers
            </li>
            <li className="text-[#202223]">
              <strong className="font-semibold">App Performance Data:</strong> Information
              about app performance, errors, and crashes
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 text-[#202223]">
            We use the information we collect for the following purposes:
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            2.1 To Provide and Maintain Our Services
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              To operate our Apps and provide the features you request
            </li>
            <li className="mb-2 text-[#202223]">
              To process order deletions and other operations (for Bulk Delete Orders app)
            </li>
            <li className="mb-2 text-[#202223]">
              To manage customer address locking preferences (for Default Address Lock app)
            </li>
            <li className="mb-2 text-[#202223]">
              To authenticate your store and maintain secure access
            </li>
            <li className="text-[#202223]">
              To monitor and improve app performance and reliability
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            2.2 To Communicate With You
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              To respond to your support requests and inquiries
            </li>
            <li className="mb-2 text-[#202223]">
              To send important notifications about our Apps (e.g., security updates,
              service changes)
            </li>
            <li className="text-[#202223]">
              To provide updates about new features or improvements (only if you&apos;ve
              opted in)
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            2.3 To Improve Our Services
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              To analyze usage patterns and identify areas for improvement
            </li>
            <li className="mb-2 text-[#202223]">To troubleshoot issues and fix bugs</li>
            <li className="text-[#202223]">To develop new features based on user needs</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            2.4 To Ensure Security and Compliance
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              To detect and prevent fraud, abuse, and security incidents
            </li>
            <li className="mb-2 text-[#202223]">
              To comply with legal obligations and enforce our Terms of Service
            </li>
            <li className="text-[#202223]">
              To respond to data subject requests as required by privacy laws
            </li>
          </ul>

          <p className="mb-4 text-[#202223]">
            <strong className="font-semibold">We do not use your information for:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              Marketing or advertising campaigns (unless you explicitly opt in)
            </li>
            <li className="mb-2 text-[#202223]">
              Selling or sharing your data with third parties for their marketing purposes
            </li>
            <li className="text-[#202223]">
              Automated decision-making that has legal or significant effects on merchants
              or customers
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            3. Data Retention
          </h2>
          <p className="mb-4 text-[#202223]">
            We retain your data only for as long as necessary to provide our services and
            fulfill the purposes outlined in this Privacy Policy:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Active Stores:</strong> While you have our
              Apps installed and actively use our services, we retain the data necessary to
              operate the Apps
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">After App Uninstallation:</strong> When you
              uninstall our Apps, we retain minimal data (store ID and access tokens) for 30
              days to facilitate potential reinstallation. After 30 days, all data except
              aggregate usage statistics is permanently deleted
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Support Communications:</strong> Support
              emails and communications are retained for 2 years to help resolve ongoing
              issues and improve our services
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Log Data:</strong> Server logs and error
              logs are retained for 90 days for security and debugging purposes
            </li>
            <li className="text-[#202223]">
              <strong className="font-semibold">Compliance Data:</strong> We retain data as
              required by law or regulation (e.g., financial records for tax purposes)
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            4. Data Storage and Security
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            4.1 Where We Store Your Data
          </h3>
          <p className="mb-4 text-[#202223]">
            Gemify is established in Vietnam. Your data is stored on secure servers provided
            by trusted cloud infrastructure providers located in the United States.
          </p>
          <p className="mb-4 text-[#202223]">
            If you are located in the European Economic Area (EEA), United Kingdom, or other
            jurisdictions with data transfer restrictions, please note that your data may be
            transferred to and processed in countries outside your jurisdiction. We ensure
            such transfers comply with applicable laws through appropriate safeguards,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              Standard Contractual Clauses approved by the European Commission
            </li>
            <li className="mb-2 text-[#202223]">
              Adherence to the EU-U.S. Data Privacy Framework (if applicable)
            </li>
            <li className="text-[#202223]">
              Implementation of additional security measures and contractual protections
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            4.2 How We Protect Your Data
          </h3>
          <p className="mb-4 text-[#202223]">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Encryption:</strong> All data is encrypted
              in transit (TLS 1.2+) and at rest (AES-256)
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Access Controls:</strong> Strict access
              controls ensure only authorized personnel can access your data
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Authentication:</strong> We use secure
              authentication methods including OAuth 2.0 for Shopify API access
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Regular Security Audits:</strong> We conduct
              regular security assessments and vulnerability scans
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Monitoring:</strong> We continuously monitor
              our systems for suspicious activity and security threats
            </li>
            <li className="text-[#202223]">
              <strong className="font-semibold">Secure Development:</strong> We follow
              secure coding practices and conduct code reviews
            </li>
          </ul>
          <p className="mb-4 text-[#202223]">
            While we take reasonable measures to protect your data, no method of
            transmission or storage is 100% secure. If you have concerns about the security
            of your data, please contact us at{' '}
            <a
              href="mailto:sean.gemify@gmail.com"
              className="text-[#00A87B] no-underline hover:underline"
            >
              sean.gemify@gmail.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            5. Data Sharing and Disclosure
          </h2>
          <p className="mb-4 text-[#202223]">
            We do not sell, rent, or trade your personal information. We may share your
            information only in the following limited circumstances:
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            5.1 Service Providers
          </h3>
          <p className="mb-4 text-[#202223]">
            We may share data with trusted third-party service providers who help us operate
            our Apps, such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              Cloud hosting providers (e.g., AWS, Google Cloud)
            </li>
            <li className="mb-2 text-[#202223]">Error tracking and analytics services</li>
            <li className="text-[#202223]">Customer support tools</li>
          </ul>
          <p className="mb-4 text-[#202223]">
            These service providers are contractually obligated to protect your data and use
            it only for the purposes we specify.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            5.2 Legal Requirements
          </h3>
          <p className="mb-4 text-[#202223]">
            We may disclose your information if required to do so by law or in response to
            valid requests by public authorities, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              To comply with legal obligations (e.g., court orders, subpoenas)
            </li>
            <li className="mb-2 text-[#202223]">
              To protect our rights, property, or safety, or that of our users or the public
            </li>
            <li className="text-[#202223]">
              To detect, prevent, or address fraud, security, or technical issues
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            5.3 Business Transfers
          </h3>
          <p className="mb-4 text-[#202223]">
            If Gemify is involved in a merger, acquisition, or sale of assets, your
            information may be transferred as part of that transaction. We will notify you
            via email and/or a prominent notice on our website before your information
            becomes subject to a different privacy policy.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            6. Your Rights and Choices
          </h2>
          <p className="mb-4 text-[#202223]">
            Depending on your location, you may have the following rights regarding your
            personal data:
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            6.1 Access and Portability
          </h3>
          <p className="mb-4 text-[#202223]">
            You have the right to request a copy of the personal data we hold about you. You
            can also request that we provide your data in a portable format.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">6.2 Correction</h3>
          <p className="mb-4 text-[#202223]">
            You have the right to request that we correct any inaccurate or incomplete
            personal data.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">6.3 Deletion</h3>
          <p className="mb-4 text-[#202223]">
            You have the right to request deletion of your personal data. You can delete
            your data by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              Uninstalling our Apps from your Shopify store (data will be automatically
              deleted within 30 days)
            </li>
            <li className="text-[#202223]">
              Contacting us at{' '}
              <a
                href="mailto:sean.gemify@gmail.com"
                className="text-[#00A87B] no-underline hover:underline"
              >
                sean.gemify@gmail.com
              </a>{' '}
              to request immediate deletion
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            6.4 Restriction and Objection
          </h3>
          <p className="mb-4 text-[#202223]">
            You have the right to restrict or object to certain processing of your personal
            data.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            6.5 Opt-Out of Marketing
          </h3>
          <p className="mb-4 text-[#202223]">
            You can opt out of marketing communications at any time by clicking the
            &quot;unsubscribe&quot; link in any marketing email or contacting us.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            6.6 Withdraw Consent
          </h3>
          <p className="mb-4 text-[#202223]">
            Where we rely on your consent to process your data, you have the right to
            withdraw that consent at any time.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            6.7 How to Exercise Your Rights
          </h3>
          <p className="mb-4 text-[#202223]">
            To exercise any of these rights, please contact us at{' '}
            <a
              href="mailto:sean.gemify@gmail.com"
              className="text-[#00A87B] no-underline hover:underline"
            >
              sean.gemify@gmail.com
            </a>
            . We will respond to your request within 30 days.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            7. Compliance with Privacy Laws
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            7.1 GDPR (European Economic Area)
          </h3>
          <p className="mb-4 text-[#202223]">
            If you are in the EEA, we process your data in accordance with the General Data
            Protection Regulation (GDPR). Our legal basis for processing your data includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Contractual Necessity:</strong> To provide
              our Apps and fulfill our contract with you
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Legitimate Interests:</strong> To improve
              our services, ensure security, and provide support
            </li>
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Consent:</strong> Where you have explicitly
              consented to specific processing activities
            </li>
            <li className="text-[#202223]">
              <strong className="font-semibold">Legal Obligations:</strong> To comply with
              applicable laws
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            7.2 CPRA (California)
          </h3>
          <p className="mb-4 text-[#202223]">
            If you are a California resident, you have additional rights under the
            California Privacy Rights Act (CPRA), including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              Right to know what personal information we collect and how it&apos;s used
            </li>
            <li className="mb-2 text-[#202223]">
              Right to delete your personal information
            </li>
            <li className="mb-2 text-[#202223]">
              Right to opt-out of the sale or sharing of your personal information (note: we
              do not sell or share personal information)
            </li>
            <li className="mb-2 text-[#202223]">
              Right to correct inaccurate personal information
            </li>
            <li className="mb-2 text-[#202223]">
              Right to limit the use of sensitive personal information
            </li>
            <li className="text-[#202223]">
              Right to non-discrimination for exercising your privacy rights
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            7.3 Other Jurisdictions
          </h3>
          <p className="mb-4 text-[#202223]">
            We comply with privacy laws in other jurisdictions where we operate, including
            the UK GDPR, Colorado Privacy Act, Virginia Consumer Data Protection Act, and
            other applicable laws.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            8. Shopify Mandatory Webhooks
          </h2>
          <p className="mb-4 text-[#202223]">
            As a Shopify app developer, we subscribe to mandatory compliance webhooks to
            handle data subject requests:
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            8.1 Customer Data Request
          </h3>
          <p className="mb-4 text-[#202223]">
            When a customer requests their data from a merchant, we will provide any data we
            have collected about that customer (if any).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            8.2 Customer Data Deletion
          </h3>
          <p className="mb-4 text-[#202223]">
            When a customer requests deletion of their data, we will permanently delete any
            personal data we have collected about that customer within 30 days.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">
            8.3 Shop Data Deletion
          </h3>
          <p className="mb-4 text-[#202223]">
            When a merchant uninstalls our Apps or closes their Shopify store, we will
            delete all associated data within 30 days (as outlined in Section 3).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            9. Marketing and Advertising
          </h2>
          <p className="mb-4 text-[#202223]">
            We do not currently run marketing or advertising campaigns using customer data.
            If we introduce marketing features in the future:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              We will provide clear opt-in mechanisms and obtain explicit consent
            </li>
            <li className="mb-2 text-[#202223]">
              We will respect customer consent preferences and marketing opt-out requests
            </li>
            <li className="text-[#202223]">
              We will comply with applicable marketing laws, including CAN-SPAM, CASL, and
              GDPR
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            10. Children&apos;s Privacy
          </h2>
          <p className="mb-4 text-[#202223]">
            Our Apps are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children. If you believe we have
            inadvertently collected information from a child, please contact us immediately,
            and we will take steps to delete such information.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            11. International Data Transfers
          </h2>
          <p className="mb-4 text-[#202223]">
            We operate globally and may transfer your data to countries outside your
            jurisdiction. When we do so, we ensure appropriate safeguards are in place,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              Standard Contractual Clauses (SCCs) approved by relevant authorities
            </li>
            <li className="mb-2 text-[#202223]">
              Adequacy decisions by the European Commission or other regulatory bodies
            </li>
            <li className="text-[#202223]">
              Additional technical and organizational security measures
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            12. Third-Party Links
          </h2>
          <p className="mb-4 text-[#202223]">
            Our Apps or website may contain links to third-party websites or services. We
            are not responsible for the privacy practices of these third parties. We
            encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            13. Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-[#202223]">
            We may update this Privacy Policy from time to time to reflect changes in our
            practices, legal requirements, or for other operational reasons. When we make
            significant changes, we will:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              Update the &quot;Last Updated&quot; date at the top of this policy
            </li>
            <li className="mb-2 text-[#202223]">
              Notify you via email (if you&apos;ve provided your email address)
            </li>
            <li className="text-[#202223]">Display a prominent notice within our Apps</li>
          </ul>
          <p className="mb-4 text-[#202223]">
            Your continued use of our Apps after the changes take effect constitutes your
            acceptance of the revised Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            14. Data Protection Officer
          </h2>
          <p className="mb-4 text-[#202223]">
            If you have questions about how we handle your personal data or wish to exercise
            your privacy rights, you can contact our Data Protection Officer at:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2 text-[#202223]">
              <strong className="font-semibold">Email:</strong>{' '}
              <a
                href="mailto:sean.gemify@gmail.com"
                className="text-[#00A87B] no-underline hover:underline"
              >
                sean.gemify@gmail.com
              </a>
            </li>
            <li className="text-[#202223]">
              <strong className="font-semibold">Subject Line:</strong> &quot;Privacy
              Inquiry&quot; or &quot;Data Protection Request&quot;
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">15. Contact Us</h2>
          <p className="mb-4 text-[#202223]">
            If you have any questions, concerns, or requests regarding this Privacy Policy
            or our data practices, please contact us:
          </p>

          <HighlightBox>
            <p className="mb-0">
              <strong className="font-semibold text-[#202223]">Gemify</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:sean.gemify@gmail.com"
                className="text-[#00A87B] no-underline hover:underline"
              >
                sean.gemify@gmail.com
              </a>
              <br />
              Website:{' '}
              <a
                href="https://gemify-ecom.github.io"
                className="text-[#00A87B] no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://gemify-ecom.github.io
              </a>
            </p>
          </HighlightBox>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">
            16. Complaints and Regulatory Authorities
          </h2>
          <p className="mb-4 text-[#202223]">
            If you believe we have not handled your personal data appropriately, you have
            the right to lodge a complaint with your local data protection authority. For
            EEA residents, a list of data protection authorities is available at{' '}
            <a
              href="https://edpb.europa.eu/about-edpb/board/members_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A87B] no-underline hover:underline"
            >
              https://edpb.europa.eu
            </a>
            .
          </p>

          <hr className="my-10 border-0 border-t border-[#E1E3E5]" />

          <p className="text-sm text-[#6D7175] italic">
            This Privacy Policy was last updated on November 27, 2025. By using our Apps,
            you acknowledge that you have read, understood, and agree to be bound by this
            Privacy Policy.
          </p>
        </div>
      </div>
    </Layout>
  );
}
