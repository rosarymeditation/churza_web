"use client";
import { useState } from 'react';

export default function Support() {
    const faqs = [
        { q: "How do I create a church on Churza?", a: "Download the app, select 'I am a Pastor', and follow the onboarding steps to register your church branch." },
        { q: "How do members join my church?", a: "Once your church is created, share the unique 6-digit join code with your congregation." },
        { q: "How does Gift Aid work on Churza?", a: "For UK churches, members can toggle Gift Aid on. We generate HMRC-compliant reports for your admin team." },
        { q: "How do I delete my account?", a: "Go to Settings > Account > Delete Account within the mobile app." }
    ];

    return (
        <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
            <h1 className="font-display text-5xl text-center mb-12">How can we help?</h1>

            <div className="mb-16 relative">
                <input
                    type="text"
                    placeholder="Search for help..."
                    className="w-full bg-navy-card border border-white/10 rounded-2xl p-5 text-cream focus:border-gold outline-none transition-all"
                />
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <details key={i} className="group bg-navy-card border border-white/5 rounded-xl overflow-hidden">
                        <summary className="p-6 cursor-pointer font-bold flex justify-between items-center group-open:text-gold">
                            {faq.q}
                            <span className="transition-transform group-open:rotate-180">↓</span>
                        </summary>
                        <div className="px-6 pb-6 text-muted text-sm leading-relaxed">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-gold/5 border border-gold/20 text-center">
                <h3 className="font-display text-2xl mb-4">Still need help?</h3>
                <p className="text-muted mb-6">Our team is ready to assist your church transition.</p>
                <a href="mailto:support@churza.app" className="gold-btn">Email support@churza.app</a>
            </div>
        </div>
    );
}