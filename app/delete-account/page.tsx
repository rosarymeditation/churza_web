export default function DeleteAccount() {
    return (
        <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
            <h1 className="font-display text-4xl mb-8">How to delete your Churza account</h1>
            <p className="text-muted mb-12">We value your privacy. If you wish to leave the platform, please follow these steps.</p>

            <div className="space-y-8 mb-16">
                {[
                    "Open the Churza app on your device",
                    "Tap the 'More' tab in the bottom navigation",
                    "Tap on 'Settings'",
                    "Scroll to the bottom and tap 'Delete account'",
                    "Confirm the permanent deletion when prompted"
                ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-start">
                        <div className="w-8 h-8 rounded-full bg-navy-elevated border border-gold flex-shrink-0 flex items-center justify-center font-bold text-gold">{i + 1}</div>
                        <div className="text-lg text-cream pt-0.5">{step}</div>
                    </div>
                ))}
            </div>

            <div className="bg-error/10 border border-error/20 p-6 rounded-2xl mb-8">
                <h3 className="text-error font-bold mb-2">What is deleted?</h3>
                <ul className="text-sm text-muted space-y-2">
                    <li>✓ Your user profile and personal information</li>
                    <li>✓ Membership records for all joined churches</li>
                    <li>✓ All active prayer requests</li>
                </ul>
            </div>

            <div className="bg-navy-card border border-white/5 p-6 rounded-2xl">
                <h3 className="text-gold font-bold mb-2">Data Retention</h3>
                <p className="text-xs text-muted">
                    Under UK Tax Law and financial regulations, giving/financial records are retained for 7 years.
                    Stripe transaction data is maintained as required by payment processing regulations.
                </p>
            </div>
        </div>
    );
}