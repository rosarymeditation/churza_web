export const metadata = {
    title: 'Onboarding Successful | Churza',
    robots: { index: false, follow: false }, // Prevent search engines from indexing
};

export default function OnboardingSuccess() {
    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
                {/* Success Icon */}
                <div className="mx-auto w-20 h-20 bg-success/10 border border-success/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <h1 className="font-display text-3xl text-gold">Verification Complete</h1>
                    <p className="text-muted leading-relaxed">
                        Your church is now connected to Stripe. You can now accept tithes and offerings directly into your bank account.
                    </p>
                </div>

                <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-hint text-sm">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        Return to the Churza app to continue
                    </div>
                </div>

                {/* Branding placeholder without a link */}
                <div className="pt-12 font-display text-sm tracking-[3px] text-gold/30 uppercase">
                    Churza
                </div>
            </div>
        </div>
    );
}