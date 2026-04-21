import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Churza",
  description:
    "The legal agreement between you and Softnergy Limited governing your use of the Churza church management app.",
  alternates: { canonical: "https://churza.org/terms" },
  openGraph: {
    title: "Terms of Service | Churza",
    description:
      "The legal agreement between you and Softnergy Limited governing your use of the Churza church management app.",
    url: "https://churza.org/terms",
    siteName: "Churza",
  },
};

const toc = [
  { id: "introduction", label: "Introduction" },
  { id: "eligibility", label: "Eligibility" },
  { id: "accounts", label: "Accounts" },
  { id: "church-admins", label: "Church administrators" },
  { id: "giving", label: "Giving & payments" },
  { id: "conduct", label: "Acceptable use" },
  { id: "content", label: "Your content" },
  { id: "privacy", label: "Privacy" },
  { id: "availability", label: "Service availability" },
  { id: "liability", label: "Limitation of liability" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact" },
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
          <span className="text-hint min-w-[160px] shrink-0">{row.label}</span>
          <span className="text-cream">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 p-5 bg-gold/5 border border-gold/15 rounded-xl">
      <p className="text-sm text-muted leading-relaxed">{children}</p>
    </div>
  );
}

function ContactTable({ rows }: { rows: { label: string; value: React.ReactNode }[] }) {
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

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The legal agreement governing your use of Churza"
      lastUpdated="21 April 2026"
      toc={toc}
    >

      {/* Introduction */}
      <section id="introduction">
        <p>
          Churza is operated by <strong>Softnergy Limited</strong> (Company
          Number: SC619146), registered in Scotland, United Kingdom. These Terms
          of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement
          between you and Softnergy Limited governing your use of the Churza
          mobile application (iOS and Android) and the Churza website at{" "}
          <a href="https://churza.org">churza.org</a>.
        </p>
        <p>
          Please read these Terms carefully before downloading, installing, or
          using Churza. By creating an account or using the app, you agree to be
          bound by these Terms in full. If you do not agree, you must not use
          Churza.
        </p>

        <InfoTable
          rows={[
            { label: "Company", value: "Softnergy Limited" },
            { label: "Company number", value: "SC619146" },
            { label: "Registered in", value: "Scotland, United Kingdom" },
            { label: "App", value: "Churza — Church Management Platform" },
            {
              label: "Contact",
              value: (
                <a href="mailto:support@churza.org" className="text-gold hover:underline">
                  support@churza.org
                </a>
              ),
            },
          ]}
        />
      </section>

      {/* Eligibility */}
      <section id="eligibility">
        <h2>1. Eligibility</h2>
        <p>To use Churza, you must:</p>
        <ul>
          <li>Be at least <strong>13 years of age</strong>. Users aged 13–17 require the consent of a parent or guardian.</li>
          <li>Have the legal capacity to enter into a binding agreement in your country of residence.</li>
          <li>Not have been previously suspended or permanently removed from Churza by Softnergy Limited.</li>
          <li>Provide accurate, truthful, and complete information during registration and keep it up to date.</li>
        </ul>
        <p>
          Churza is designed for use by church communities. Church administrator
          accounts may only be created by individuals who have authority to act on
          behalf of their church or ministry.
        </p>
      </section>

      {/* Accounts */}
      <section id="accounts">
        <h2>2. Accounts</h2>

        <h3>2.1 Account creation</h3>
        <p>
          You may create a Churza account by registering directly in the app, or
          a church administrator may create an account on your behalf. In either
          case, you are responsible for all activity that occurs under your account.
        </p>

        <h3>2.2 Account security</h3>
        <p>
          You are responsible for maintaining the confidentiality of your password.
          You must notify us immediately at{" "}
          <a href="mailto:support@churza.org">support@churza.org</a> if you
          suspect unauthorised access to your account. We are not liable for any
          loss resulting from unauthorised use of your account.
        </p>

        <h3>2.3 Account deletion</h3>
        <p>
          You may delete your account at any time from within the app under Settings.
          Upon deletion, your personal data is permanently removed, except for
          financial records which must be retained for 7 years under UK tax law.
          See our{" "}
          <a href="/delete-account">account deletion guide</a> for step-by-step
          instructions.
        </p>

        <h3>2.4 Admin-created accounts</h3>
        <p>
          Church administrators may create accounts on behalf of members who do
          not have access to a smartphone. These accounts are created with a
          temporary password and the member receives their login credentials by
          email. The member is responsible for changing their password on first
          login.
        </p>
      </section>

      {/* Church admins */}
      <section id="church-admins">
        <h2>3. Church administrators</h2>
        <p>
          If you register or manage a church on Churza, you accept additional
          responsibilities:
        </p>
        <ul>
          <li>
            You confirm that you have authority to act on behalf of the church or
            ministry, and that the church is a legitimate religious organisation.
          </li>
          <li>
            You are responsible for ensuring that all members you add or approve
            have consented to their data being processed through Churza.
          </li>
          <li>
            You must not misuse administrative privileges, including impersonating
            members, altering financial records without authorisation, or accessing
            member data for purposes outside of church management.
          </li>
          <li>
            You are responsible for the conduct of your church&apos;s members within
            the Churza platform and for enforcing appropriate community standards.
          </li>
          <li>
            You must obtain appropriate parental consent before creating accounts
            for members under the age of 18.
          </li>
        </ul>
      </section>

      {/* Giving & payments */}
      <section id="giving">
        <h2>4. Giving &amp; payments</h2>

        <h3>4.1 Online giving</h3>
        <p>
          Churza enables members to give tithes and offerings online through
          Stripe. By making an online gift, you authorise the charge to your
          payment method for the amount specified. All payments are processed
          securely by Stripe — Churza never stores your full card number or
          bank account details.
        </p>

        <h3>4.2 Platform fee</h3>
        <p>
          A platform fee of <strong>1.5%</strong> is deducted from each online
          transaction and retained by Softnergy Limited. An additional Stripe
          processing fee (typically 1.5% + 20p for UK cards) is also deducted.
          The total deducted is approximately 3% + 20p per transaction. The
          church receives the remainder.
        </p>

        <WarningBox>
          Example: On a £100 gift, the church receives approximately £96.80.
          The exact amount may vary depending on the card type and currency.
        </WarningBox>

        <h3>4.3 Cash recording</h3>
        <p>
          Church administrators may record cash giving on behalf of members.
          Cash records are stored against the member&apos;s profile for the
          purposes of giving reports and Gift Aid declarations. Members should
          review their giving history in the app to confirm accuracy.
        </p>

        <h3>4.4 Gift Aid</h3>
        <p>
          Churza generates HMRC-compliant Gift Aid reports for UK-registered
          churches. By marking a giving record as Gift Aid eligible, the member
          confirms they are a UK taxpayer and have paid sufficient income tax or
          capital gains tax to cover the Gift Aid claimed. Members are responsible
          for the accuracy of their Gift Aid declarations.
        </p>

        <h3>4.5 Refunds</h3>
        <p>
          All transactions are final. Refunds are not provided except as required
          by applicable UK law. If you believe a transaction was processed in
          error, contact{" "}
          <a href="mailto:support@churza.org">support@churza.org</a> within 14
          days of the transaction date.
        </p>

        <h3>4.6 Stripe Connect</h3>
        <p>
          Churches that wish to receive online giving must connect a Stripe
          account. By connecting a Stripe account, the church agrees to Stripe&apos;s{" "}
          <a href="https://stripe.com/gb/legal" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="https://stripe.com/gb/connect-account/legal" target="_blank" rel="noopener noreferrer">
            Connected Account Agreement
          </a>
          . Stripe is responsible for KYC verification and fund disbursement.
        </p>
      </section>

      {/* Acceptable use */}
      <section id="conduct">
        <h2>5. Acceptable use</h2>
        <p>You agree not to use Churza to:</p>
        <ul>
          <li>Create fake accounts, impersonate any person, or misrepresent your identity or affiliation.</li>
          <li>Harass, threaten, bully, or intimidate other members or church staff.</li>
          <li>Send unsolicited messages, spam, or promotional content to other members.</li>
          <li>Upload or share content that is offensive, defamatory, obscene, or unlawful.</li>
          <li>Solicit money from other members or use the platform for commercial activity without our written consent.</li>
          <li>Attempt to gain unauthorised access to other accounts, the Churza API, or our servers.</li>
          <li>Reverse engineer, scrape, copy, or redistribute any part of the Churza platform.</li>
          <li>Use Churza in any way that violates applicable laws or regulations in your jurisdiction.</li>
        </ul>
        <p>
          Violations may result in account suspension, permanent termination, and,
          where legally required, reporting to the appropriate authorities.
          Softnergy Limited reserves the right to remove any content and suspend
          or terminate any account at its sole discretion.
        </p>
      </section>

      {/* Content */}
      <section id="content">
        <h2>6. Your content</h2>
        <p>
          You retain ownership of any content you submit to Churza, including
          prayer requests, messages, profile information, and media uploads. By
          submitting content, you grant Softnergy Limited a non-exclusive,
          royalty-free, worldwide licence to store, process, and display that
          content solely for the purpose of providing the Churza service.
        </p>
        <p>
          You are solely responsible for the content you submit. You confirm that
          you have the right to submit any content you post and that it does not
          infringe the intellectual property rights or privacy of any third party.
        </p>
        <p>
          Softnergy Limited does not monitor all content but reserves the right
          to remove content that violates these Terms or applicable law.
        </p>
      </section>

      {/* Privacy */}
      <section id="privacy">
        <h2>7. Privacy</h2>
        <p>
          Your use of Churza is subject to our{" "}
          <a href="/privacy">Privacy Policy</a>, which is incorporated into these
          Terms by reference. The Privacy Policy explains how we collect, use, and
          protect your personal data in accordance with UK GDPR and the Data
          Protection Act 2018.
        </p>
        <p>
          By using Churza, you consent to the data practices described in our
          Privacy Policy. You may exercise your rights under UK GDPR at any time
          by contacting{" "}
          <a href="mailto:support@churza.org">support@churza.org</a>.
        </p>
      </section>

      {/* Availability */}
      <section id="availability">
        <h2>8. Service availability</h2>
        <p>
          Churza is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. We do not warrant that the app will be
          uninterrupted, error-free, or free from viruses or other harmful
          components.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of
          Churza at any time, with or without notice. We will endeavour to
          provide advance notice of any planned maintenance that may affect
          service availability.
        </p>
        <p>
          We are not liable for any loss or damage arising from your inability
          to access Churza, including during periods of planned or unplanned
          downtime.
        </p>
      </section>

      {/* Liability */}
      <section id="liability">
        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Softnergy Limited
          shall not be liable for any indirect, incidental, special, consequential,
          or punitive damages arising from your use of or inability to use Churza,
          including but not limited to loss of data, loss of revenue, or loss of
          goodwill.
        </p>
        <p>
          Our total aggregate liability to you for any claim arising out of or in
          connection with these Terms or your use of Churza shall not exceed the
          greater of (a) £100 or (b) the total amount you paid to Softnergy
          Limited in the twelve months preceding the claim.
        </p>
        <p>
          Nothing in these Terms excludes or limits our liability for death or
          personal injury caused by negligence, fraud or fraudulent
          misrepresentation, or any other liability that cannot be excluded or
          limited under applicable law.
        </p>
      </section>

      {/* Governing law */}
      <section id="governing-law">
        <h2>10. Governing law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of Scotland and, where applicable, England and Wales. Any disputes
          arising out of or in connection with these Terms shall be subject to
          the exclusive jurisdiction of the Scottish courts.
        </p>
        <p>
          Before initiating any formal legal proceedings, we encourage you to
          contact us at{" "}
          <a href="mailto:support@churza.org">support@churza.org</a> to seek an
          informal resolution. We aim to resolve disputes within 14 business days.
        </p>
      </section>

      {/* Changes */}
      <section id="changes">
        <h2>11. Changes to these terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. When we make
          material changes, we will notify you via push notification in the Churza
          app and update the &ldquo;Last updated&rdquo; date at the top of this
          page.
        </p>
        <p>
          Your continued use of Churza after changes have been posted constitutes
          your acceptance of the updated Terms. If you do not agree with any
          changes, you must stop using Churza and may delete your account by
          following our{" "}
          <a href="/delete-account">account deletion guide</a>.
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>12. Contact</h2>
        <p>
          If you have any questions about these Terms or wish to report a
          violation, please contact us:
        </p>
        <ContactTable
          rows={[
            { label: "Company", value: "Softnergy Limited" },
            { label: "Company number", value: "SC619146" },
            { label: "Registered in", value: "Scotland, United Kingdom" },
            {
              label: "General support",
              value: (
                <a href="mailto:support@churza.org" className="text-gold hover:underline">
                  support@churza.org
                </a>
              ),
            },
            {
              label: "Legal enquiries",
              value: (
                <a href="mailto:legal@softnergy.co.uk" className="text-gold hover:underline">
                  legal@softnergy.co.uk
                </a>
              ),
            },
          ]}
        />
        <p>
          We aim to respond to all legal enquiries within 5 business days.
        </p>
      </section>

    </LegalLayout>
  );
}
