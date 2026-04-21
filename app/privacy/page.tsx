import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Churza",
  description:
    "How Churza collects, uses and protects your personal data. Full GDPR and UK GDPR compliance for church members, pastors and administrators.",
  alternates: { canonical: "https://churza.org/privacy" },
  openGraph: {
    title: "Privacy Policy | Churza",
    description:
      "How Churza collects, uses and protects your personal data. Full GDPR and UK GDPR compliance.",
    url: "https://churza.org/privacy",
    siteName: "Churza",
  },
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "who-we-are", label: "Who we are" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-we-use", label: "How we use your data" },
  { id: "processors", label: "Third-party processors" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your rights" },
  { id: "cookies", label: "Cookies" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

// ── Reusable components ────────────────────────────────────

function InfoTable({ rows }: { rows: { label: string; value: React.ReactNode }[] }) {
  return (
    <div className="not-prose my-6 rounded-xl border border-white/5 overflow-hidden">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex gap-4 px-5 py-3.5 text-sm ${i < rows.length - 1 ? "border-b border-white/[0.04]" : ""
            }`}
        >
          <span className="text-hint min-w-[150px] shrink-0">{row.label}</span>
          <span className="text-cream">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-white/5">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gold/5">
            {headers.map((h) => (
              <th
                key={h}
                className="px-5 py-3.5 text-left text-xs font-semibold tracking-widest uppercase text-gold whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/[0.04] hover:bg-white/[0.015] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-muted align-top leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProcessorCard({
  name,
  badge,
  description,
  href,
  linkLabel,
}: {
  name: string;
  badge: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-cream">{name}</span>
        <span className="text-xs text-gold bg-gold/10 border border-gold/20 rounded-full px-2.5 py-0.5">
          {badge}
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed mb-3">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gold hover:underline"
      >
        {linkLabel} ↗
      </a>
    </div>
  );
}

function RightItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
      <span className="text-gold text-lg shrink-0 mt-0.5">{number}</span>
      <div>
        <p className="font-semibold text-cream mb-1">{title}</p>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ContactTable({
  rows,
}: {
  rows: { label: string; value: React.ReactNode }[];
}) {
  return (
    <div className="not-prose my-6 rounded-xl border border-white/5 overflow-hidden">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex justify-between items-center gap-4 px-5 py-3.5 text-sm ${i < rows.length - 1 ? "border-b border-white/[0.04]" : ""
            }`}
        >
          <span className="text-hint">{row.label}</span>
          <span className="text-cream text-right">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use and protect your personal data"
      lastUpdated="21 April 2026"
      toc={toc}
    >

      {/* Overview */}
      <section id="overview">
        <p>
          Churza is built on trust. Churches trust us with their members&apos; personal
          information, giving records and community data. We take that responsibility
          seriously and are committed to being transparent about how your information
          is collected, used and protected.
        </p>
        <p>
          This Privacy Policy applies to the Churza mobile application (iOS and
          Android), the Churza website at{" "}
          <a href="https://churza.org">churza.org</a>, and all associated services
          operated by Softnergy Limited.
        </p>
        <p>
          By using Churza, you agree to the collection and use of information in
          accordance with this policy. If you do not agree, please discontinue use
          of the app and contact us to delete your account.
        </p>
      </section>

      {/* Who we are */}
      <section id="who-we-are">
        <h2>1. Who we are</h2>
        <p>
          Churza is operated by <strong>Softnergy Limited</strong>, a company
          registered in Scotland, United Kingdom.
        </p>
        <InfoTable
          rows={[
            { label: "Company", value: "Softnergy Limited" },
            { label: "Registered in", value: "Scotland, United Kingdom" },
            { label: "Data controller", value: "Softnergy Limited" },
            {
              label: "Email",
              value: (
                <a href="mailto:support@churza.org" className="text-gold hover:underline">
                  support@churza.org
                </a>
              ),
            },
            { label: "Applicable law", value: "UK GDPR, Data Protection Act 2018" },
          ]}
        />
        <p>
          As the data controller, we determine the purposes and means of processing
          your personal data. Where we use third-party services to process data on
          our behalf, those providers act as data processors and are bound by
          contractual obligations to protect your information.
        </p>
      </section>

      {/* What we collect */}
      <section id="what-we-collect">
        <h2>2. What we collect</h2>
        <p>
          We only collect data that is necessary to provide the Churza service.
          What we collect depends on whether you are a church administrator,
          pastor, or member.
        </p>

        <h3>2.1 Account information</h3>
        <p>
          When you register for Churza, we collect your first name, last name,
          email address and optionally your phone number. If an administrator
          creates your account on your behalf, they supply this information and
          you receive a temporary password by email.
        </p>

        <h3>2.2 Church membership data</h3>
        <p>
          We record your membership of a church, including your role (member,
          worker, deacon, cell leader, pastor or admin), your membership number,
          the date you joined, and your cell group assignment.
        </p>

        <h3>2.3 Giving and financial records</h3>
        <p>
          When you give online, Stripe processes your payment. Churza records the
          amount, currency, giving type (tithe, offering, seed, etc.), date and
          method (online or cash). Churza never stores your full card number, bank
          account details or sort code — that data is held exclusively by Stripe,
          which is PCI DSS Level 1 certified.
        </p>

        <h3>2.4 Attendance records</h3>
        <p>
          When you check in to a church service using the Churza app, we record the
          date, time, service type and that you were present. This data is used to
          produce attendance reports for your church administrator.
        </p>

        <h3>2.5 Prayer requests</h3>
        <p>
          If you submit a prayer request to the church prayer wall, we store the
          request text, category, whether you chose to make it anonymous, and
          whether it has been marked as answered. Anonymous prayer requests do not
          display your name to other members.
        </p>

        <h3>2.6 Cell group messages</h3>
        <p>
          Messages sent within your church cell group chat are stored on our servers
          to provide the messaging service. Voice messages and files are stored on
          Cloudinary. Messages you delete are marked as deleted and are no longer
          visible to other members.
        </p>

        <h3>2.7 Device and push notification data</h3>
        <p>
          We store a push notification token generated by OneSignal for your device.
          This token is used to deliver notifications such as announcements, event
          reminders and cell group messages. It is removed from our database when
          you log out or delete your account.
        </p>

        <h3>2.8 Technical data</h3>
        <p>
          Our servers automatically log your IP address, device type, operating
          system version and app version when you make API requests. This data is
          used exclusively for security monitoring, bug diagnosis and performance
          optimisation, and is retained for no more than 90 days.
        </p>
      </section>

      {/* How we use */}
      <section id="how-we-use">
        <h2>3. How we use your data</h2>

        <DataTable
          headers={["Purpose", "Legal basis"]}
          rows={[
            ["Providing the Churza app and its core features", "Contract performance"],
            ["Processing online giving through Stripe", "Contract performance"],
            ["Sending transactional emails (password reset, welcome)", "Contract performance"],
            ["Delivering push notifications you have opted into", "Consent"],
            ["Generating Gift Aid reports for UK churches", "Legal obligation"],
            ["Retaining financial records for 7 years", "Legal obligation (UK tax law)"],
            ["Security monitoring and fraud prevention", "Legitimate interests"],
            ["Improving the app based on usage patterns", "Legitimate interests"],
          ]}
        />

        <p>
          We do not sell your personal data to third parties. We do not use your
          data for advertising. We do not share your data with any party outside
          of the processors listed in Section 4.
        </p>
      </section>

      {/* Processors */}
      <section id="processors">
        <h2>4. Third-party processors</h2>
        <p>
          We use the following third-party services to operate Churza. Each provider
          has signed a Data Processing Agreement (DPA) with us and is contractually
          obligated to process your data only as instructed.
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          <ProcessorCard
            name="Stripe"
            badge="Payments"
            description="Processes online giving, holds church Stripe Connect accounts, and handles KYC verification for churches. PCI DSS Level 1 certified."
            href="https://stripe.com/gb/privacy"
            linkLabel="Stripe Privacy Policy"
          />
          <ProcessorCard
            name="MongoDB Atlas"
            badge="Database"
            description="Hosts the Churza database. Data is encrypted at rest using AES-256 and in transit using TLS 1.3. Servers located in the EU (Ireland)."
            href="https://www.mongodb.com/legal/privacy-policy"
            linkLabel="MongoDB Privacy Policy"
          />
          <ProcessorCard
            name="Cloudinary"
            badge="Media storage"
            description="Stores sermon audio files, voice messages and profile photos uploaded through the Churza app. Files are served over HTTPS."
            href="https://cloudinary.com/privacy"
            linkLabel="Cloudinary Privacy Policy"
          />
          <ProcessorCard
            name="OneSignal"
            badge="Push notifications"
            description="Delivers push notifications to your device. OneSignal receives your device push token and notification content only when a notification is sent."
            href="https://onesignal.com/privacy_policy"
            linkLabel="OneSignal Privacy Policy"
          />
          <ProcessorCard
            name="Hostinger"
            badge="Email delivery"
            description="Sends transactional emails including welcome emails, password reset codes, and membership approval notifications via SMTP."
            href="https://www.hostinger.com/privacy-policy"
            linkLabel="Hostinger Privacy Policy"
          />
          <ProcessorCard
            name="Render"
            badge="Server hosting"
            description="Hosts the Churza API server. API requests and server logs are processed on Render infrastructure located in the United States (Oregon)."
            href="https://render.com/privacy"
            linkLabel="Render Privacy Policy"
          />
        </div>
      </section>

      {/* Retention */}
      <section id="retention">
        <h2>5. Data retention</h2>
        <p>
          We retain your data only for as long as necessary to provide the Churza
          service and comply with legal obligations.
        </p>

        <DataTable
          headers={["Data type", "Retention period", "Reason"]}
          rows={[
            ["Account and profile data", "Until account deletion", "Service provision"],
            ["Church membership records", "Until account deletion", "Service provision"],
            ["Financial and giving records", "7 years from transaction date", "UK tax law (HMRC)"],
            ["Attendance records", "3 years", "Church reporting"],
            ["Prayer requests", "Until deleted by user or account deletion", "User content"],
            ["Cell group messages", "Until account deletion", "Service provision"],
            ["Push notification tokens", "Until logout or account deletion", "Notification delivery"],
            ["Server logs", "90 days", "Security monitoring"],
          ]}
        />

        <p>
          When you delete your account, your personal profile, membership records,
          prayer requests, cell group messages and push tokens are permanently
          deleted. Financial records are retained for the legally required 7-year
          period and then permanently deleted.
        </p>
      </section>

      {/* Security */}
      <section id="security">
        <h2>6. Security</h2>
        <p>
          We implement industry-standard technical and organisational measures to
          protect your data:
        </p>
        <ul>
          <li>All data in transit is encrypted using TLS 1.3 between the Churza app, our API server, and our database.</li>
          <li>All data at rest in MongoDB Atlas is encrypted using AES-256.</li>
          <li>Passwords are hashed using bcrypt with a cost factor of 12 before being stored. Churza staff cannot read your password.</li>
          <li>Payment card data and bank details are never stored on Churza servers — processed and stored exclusively by Stripe.</li>
          <li>Authentication uses JSON Web Tokens (JWT) with a 30-day expiry. Logging out removes your push token from our servers.</li>
          <li>Access to production databases is restricted to authorised personnel only, using multi-factor authentication.</li>
          <li>Our API implements rate limiting to protect against brute-force attacks on login and password reset endpoints.</li>
        </ul>
        <p>
          No system is 100% secure. If you discover a security vulnerability in
          Churza, please disclose it responsibly by emailing{" "}
          <a href="mailto:support@churza.org">support@churza.org</a>.
        </p>
      </section>

      {/* Rights */}
      <section id="rights">
        <h2>7. Your rights under UK GDPR</h2>
        <p>
          As a UK or EU resident, you have the following rights over your personal
          data. You can exercise any of these rights by contacting us at{" "}
          <a href="mailto:support@churza.org">support@churza.org</a>. We will
          respond within 30 days.
        </p>

        <div className="not-prose my-6 flex flex-col gap-3">
          <RightItem
            number="①"
            title="Right to access"
            description="Request a copy of all personal data we hold about you, including your giving history, attendance records and membership information."
          />
          <RightItem
            number="②"
            title="Right to rectification"
            description="Correct any inaccurate or incomplete personal data we hold. You can update most information directly in the app under your profile settings."
          />
          <RightItem
            number="③"
            title="Right to erasure"
            description={<>Request deletion of your account and personal data. Financial records must be retained for 7 years under UK tax law but all other data is permanently deleted. See our <a href="/delete-account" className="text-gold hover:underline">account deletion guide</a>.</>}
          />
          <RightItem
            number="④"
            title="Right to data portability"
            description="Request your giving history and personal data in a machine-readable format (JSON or CSV) for transfer to another service."
          />
          <RightItem
            number="⑤"
            title="Right to restrict processing"
            description="Ask us to stop processing your data in certain circumstances, for example while you dispute its accuracy."
          />
          <RightItem
            number="⑥"
            title="Right to object"
            description="Object to processing based on legitimate interests, such as usage analytics. We will cease that processing unless we can demonstrate compelling legitimate grounds."
          />
        </div>

        <p>
          If you are unhappy with how we have handled your data or your rights
          request, you have the right to lodge a complaint with the{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
            Information Commissioner&apos;s Office (ICO)
          </a>{" "}
          in the United Kingdom.
        </p>
      </section>

      {/* Cookies */}
      <section id="cookies">
        <h2>8. Cookies</h2>
        <p>
          The Churza mobile app does not use cookies. The Churza website
          (churza.org) uses only essential, functional cookies necessary for the
          site to operate. We do not use advertising cookies, tracking pixels, or
          third-party analytics cookies.
        </p>
        <p>
          For full details, see our <a href="/cookies">Cookie Policy</a>.
        </p>
      </section>

      {/* Children */}
      <section id="children">
        <h2>9. Children</h2>
        <p>
          Churza is not directed at children under the age of 13. We do not
          knowingly collect personal data from children under 13. If you believe a
          child under 13 has provided personal data to Churza, please contact us at{" "}
          <a href="mailto:support@churza.org">support@churza.org</a> and we will
          delete that data promptly.
        </p>
        <p>
          Users aged 13–17 may use Churza only with the consent of a parent or
          guardian. Church administrators are responsible for ensuring appropriate
          parental consent is obtained for any minor members they register via the
          admin-created account feature.
        </p>
      </section>

      {/* Changes */}
      <section id="changes">
        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will notify you via a push notification in the Churza
          app and update the &ldquo;Last updated&rdquo; date at the top of this
          page. We encourage you to review this policy periodically.
        </p>
        <p>
          Continuing to use Churza after a policy update constitutes acceptance of
          the new terms. If you do not agree, you may delete your account by
          following our <a href="/delete-account">account deletion guide</a>.
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>11. Contact us</h2>
        <p>
          For any questions about this Privacy Policy, to exercise your data rights,
          or to report a concern about how we handle your data, please contact us:
        </p>
        <ContactTable
          rows={[
            {
              label: "Email",
              value: (
                <a href="mailto:support@churza.org" className="text-gold hover:underline">
                  support@churza.org
                </a>
              ),
            },
            { label: "Company", value: "Softnergy Limited" },
            { label: "Registered", value: "Scotland, United Kingdom" },
            {
              label: "ICO complaints",
              value: (
                <a
                  href="https://ico.org.uk/make-a-complaint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  ico.org.uk ↗
                </a>
              ),
            },
          ]}
        />
        <p>
          We aim to respond to all privacy-related enquiries within 5 business days,
          and to all formal data rights requests within 30 days as required by
          UK GDPR.
        </p>
      </section>

    </LegalLayout>
  );
}