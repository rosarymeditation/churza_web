import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Church Management for the Diaspora | Churza',
  description: 'Giving, attendance, cell groups, sermons, prayer and member management for African Pentecostal churches.',
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Churza",
    "url": "https://churza.org",
    "logo": "https://churza.org/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@churza.org",
      "contactType": "customer support"
    }
  };

  const features = [
    { title: "Online Giving", desc: "Tithe and offerings via Stripe. Members give in seconds." },
    { title: "Cash Recording", desc: "Record Sunday offering manually with full audit trail." },
    { title: "Cell Groups", desc: "Real-time group chat with voice messages and file sharing." },
    { title: "Attendance", desc: "One-tap check-in. Pastor opens a session, members tap once." },
    { title: "Live Streaming", desc: "YouTube live embedded. Members watch inside the app." },
    { title: "Sermons", desc: "Audio uploads and video links. Full sermon library." },
    { title: "Prayer Wall", desc: "Members post requests, congregation prays together." },
    { title: "Announcements", desc: "Pinned broadcasts to all members instantly." },
    { title: "Events & RSVP", desc: "Upcoming events with one-tap RSVP." },
    { title: "Membership Card", desc: "Digital card with membership number and QR code." },
    { title: "Gift Aid Reports", desc: "HMRC-compliant Gift Aid reporting for UK churches." },
    { title: "Push Notifications", desc: "Instant alerts for sermons, events, giving." },
  ];

  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SECTION 2: HERO */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#C9A84C10_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

        <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
          Built for the diaspora church
        </div>

        <h1 className="font-display text-5xl md:text-7xl max-w-4xl mb-8 animate-fade-in stagger-1">
          One app for your <span className="text-gold">entire</span> church community
        </h1>

        <p className="text-muted text-lg md:text-xl max-w-2xl mb-12 animate-fade-in stagger-2">
          Giving, attendance, cell groups, sermons, prayer and member management — all in one platform built for African Pentecostal churches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
          <button className="gold-btn gap-3">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-2.02 1.1-3.15-1.03.04-2.28.67-3.02 1.52-.66.76-1.24 1.9-.1 3.07.13.01.18.01.13.01 1.05 0 2.21-.61 2.89-1.45z" /></svg>
            Download on iOS
          </button>
          <button className="outline-btn gap-3">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M3.23 21L12 3l8.77 18H3.23z" /></svg>
            Get it on Android
          </button>
        </div>

        {/* Hero Phone Placeholder */}
        <div className="mt-20 relative mx-auto w-72 h-[580px] rounded-[3rem] border-8 border-navy-elevated bg-navy-card shadow-2xl animate-fade-in stagger-3 flex items-center justify-center overflow-hidden">
          <div className="text-6xl font-display text-gold opacity-20">C</div>
          <div className="absolute top-0 w-1/3 h-6 bg-navy-elevated rounded-b-2xl"></div>
        </div>
      </section>

      {/* SECTION 3: SOCIAL PROOF */}
      <section className="py-12 border-y border-white/5 bg-navy-elevated/30">
        <div className="text-center mb-6 text-hint text-sm font-medium">
          Trusted by churches across UK 🇬🇧 USA 🇺🇸 CANADA 🇨🇦 NIGERIA 🇳🇬 GHANA 🇬🇭
        </div>
        <div className="relative overflow-hidden whitespace-nowrap">
          <div className="marquee-content gap-12 text-muted font-display text-lg">
            <span>RCCG</span> <span>·</span> <span>Winners Chapel</span> <span>·</span> <span>Christ Embassy</span> <span>·</span> <span>CAC</span> <span>·</span> <span>MFM</span> <span>·</span> <span>DOMI</span> <span>·</span> <span>House on the Rock</span>
            {/* Repeat for seamless loop */}
            <span>RCCG</span> <span>·</span> <span>Winners Chapel</span> <span>·</span> <span>Christ Embassy</span> <span>·</span> <span>CAC</span> <span>·</span> <span>MFM</span> <span>·</span> <span>DOMI</span> <span>·</span> <span>House on the Rock</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURES GRID */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Everything your church needs</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="card-navy group">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-display text-xl mb-3">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-32 bg-navy-elevated/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="absolute top-6 left-0 w-full h-0.5 bg-white/5 hidden md:block"></div>
            {[
              { step: "01", title: "Pastor creates the church", desc: "Generates a unique 6-digit join code instantly." },
              { step: "02", title: "Members download & join", desc: "Members enter the code to connect with your branch." },
              { step: "03", title: "Everyone stays connected", desc: "Giving, groups, sermons, and prayer in one place." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-12 h-12 rounded-full bg-gold text-navy font-bold flex items-center justify-center mx-auto mb-6 outline outline-8 outline-navy">
                  {i + 1}
                </div>
                <h4 className="font-display text-xl mb-4">{s.title}</h4>
                <p className="text-muted text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO IT'S FOR */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-navy-card border border-white/5">
            <h3 className="font-display text-3xl mb-8 text-gold">For Pastors & Admins</h3>
            <ul className="space-y-4">
              {["Full member directory with search", "Approve membership requests", "Record cash offerings manually", "View Giving & Gift Aid reports", "Manage Sunday check-in", "Create cell groups"].map((item, i) => (
                <li key={i} className="flex gap-4 text-muted">
                  <span className="text-gold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-3xl bg-navy-elevated border border-gold/20">
            <h3 className="font-display text-3xl mb-8 text-cream">For Members</h3>
            <ul className="space-y-4">
              {["Give tithes & offerings online", "One-tap Sunday check-in", "Chat with your cell group", "Watch sermons & streams", "Submit prayer requests", "Digital membership card"].map((item, i) => (
                <li key={i} className="flex gap-4 text-cream/80">
                  <span className="text-gold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: PRICING */}
      <section id="pricing" className="py-32 px-6 bg-navy-elevated/40">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl mb-4">Simple, transparent fees</h2>
          <p className="text-muted">No monthly subscription during beta. Pay only when members give online.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="card-navy border-gold/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold text-navy text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">Popular</div>
            <h4 className="text-gold font-bold mb-2 uppercase tracking-widest text-xs">Online Giving</h4>
            <div className="text-4xl font-display mb-6">1.5% <span className="text-lg text-muted">+ Stripe</span></div>
            <ul className="space-y-4 mb-8 text-sm text-muted">
              <li>• Stripe-powered, bank-grade security</li>
              <li>• Payouts in 2–7 days</li>
              <li>• Full transaction history in admin</li>
            </ul>
            <button className="gold-btn w-full">Start accepting gifts</button>
          </div>
          <div className="card-navy">
            <h4 className="text-muted font-bold mb-2 uppercase tracking-widest text-xs">Cash Recording</h4>
            <div className="text-4xl font-display mb-6">Free <span className="text-lg text-muted">forever</span></div>
            <ul className="space-y-4 mb-8 text-sm text-muted">
              <li>• Record any cash amount manually</li>
              <li>• Assign to any member or anonymous</li>
              <li>• Included in Gift Aid reports</li>
            </ul>
            <button className="outline-btn w-full">Learn more</button>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA BANNER */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-gold-gradient p-12 md:p-20 text-center text-navy">
          <h2 className="font-display text-4xl md:text-5xl mb-8 font-bold">Ready to bring your church into one place?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy text-cream px-8 py-4 rounded-xl font-bold hover:bg-navy-elevated transition-colors">App Store</button>
            <button className="bg-navy text-cream px-8 py-4 rounded-xl font-bold hover:bg-navy-elevated transition-colors">Play Store</button>
          </div>
        </div>
      </section>
    </div>
  );
}