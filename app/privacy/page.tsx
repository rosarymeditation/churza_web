import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p id="overview">Last updated: April 2026. Softnergy Limited ("we", "us", or "our") operates Churza.</p>

      <h2 id="data">Data We Collect</h2>
      <p>We collect information necessary to provide church management services:</p>
      <ul>
        <li>Identity Data: Name, email address, phone number.</li>
        <li>Church Data: Membership status, attendance records.</li>
        <li>Financial Data: Giving history (processed via Stripe).</li>
        <li>Technical Data: IP address, push notification tokens.</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>We use trusted partners to ensure service reliability:</p>
      <ul>
        <li><strong>Stripe:</strong> Payment processing and financial security.</li>
        <li><strong>OneSignal:</strong> Delivering push notifications.</li>
        <li><strong>Cloudinary:</strong> Media and sermon storage.</li>
        <li><strong>MongoDB Atlas:</strong> Secure cloud database storage.</li>
      </ul>

      <h2 id="rights">Your GDPR Rights</h2>
      <p>Under UK and EU GDPR, you have the following rights:</p>
      <ul>
        <li>Right to access your personal data.</li>
        <li>Right to rectification of inaccurate data.</li>
        <li>Right to erasure ("right to be forgotten").</li>
        <li>Right to data portability.</li>
      </ul>

      <h2 id="contact">Contact Us</h2>
      <p>Email: support@churza.app</p>
    </LegalLayout>
  );
}