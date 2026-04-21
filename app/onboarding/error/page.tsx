export const metadata = {
    title: 'Onboarding Issue | Churza',
    robots: { index: false, follow: false },
};

export default function OnboardingError() {
    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
                {/* Error Icon */}
                <div className="mx-auto w-20 h-20 bg-error/10 border border-error/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <h1 className="font-display text-3xl text-cream">Setup Incomplete</h1>
                    <p className="text-muted leading-relaxed">
                        We couldn't finish connecting your account to Stripe. This may happen if the window was closed early or information was missing.
                    </p>
                </div>

                <div className="p-4 bg-navy-card border border-white/5 rounded-xl text-sm text-hint">
                    Please navigate back to the **Admin Settings** in your Churza mobile app to restart the connection process.
                </div>

                <div className="pt-12 font-display text-sm tracking-[3px] text-gold/30 uppercase">
                    Churza
                </div>
            </div>
        </div>
    );
}