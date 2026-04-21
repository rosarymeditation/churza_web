"use client";

import { useState } from "react";

const categories = [
    {
        id: "getting-started",
        label: "Getting started",
        icon: "⛪",
        faqs: [
            {
                q: "How do I create a church on Churza?",
                a: "Download the Churza app, select 'I am a Pastor or Admin' on the welcome screen, then follow the onboarding steps to register your church. You will receive a unique 6-digit join code that your members can use to join.",
            },
            {
                q: "How do members join my church?",
                a: "Share your church's 6-digit join code with your congregation. Members download Churza, select 'I am a Member', and enter the code. Depending on your settings, membership is either auto-approved or requires your approval.",
            },
            {
                q: "What is the 6-digit church code?",
                a: "It is a unique code automatically generated when you create your church on Churza. Members enter this code to request membership. You can find it in your admin dashboard under Church Settings.",
            },
            {
                q: "Can I have multiple church branches?",
                a: "Yes. Each branch is registered as a separate church with its own code, members, admin panel, and giving account. You can manage each branch independently.",
            },
        ],
    },
    {
        id: "giving",
        label: "Giving & payments",
        icon: "💛",
        faqs: [
            {
                q: "How does online giving work on Churza?",
                a: "Members can give tithes, offerings, seeds, and other types of gifts directly from the Churza app. Payments are processed securely by Stripe and funds are deposited into your church's connected bank account within 2–7 business days.",
            },
            {
                q: "What fees does Churza charge?",
                a: "Churza charges a 1.5% platform fee per online transaction. Stripe also charges a processing fee of approximately 1.5% + 20p for UK cards. In total, approximately 3% + 20p is deducted per gift. For example, on a £100 gift, your church receives approximately £96.80.",
            },
            {
                q: "How do I set up online giving for my church?",
                a: "Go to your admin dashboard, tap Giving, then Connect Stripe. You will be guided through Stripe's onboarding to verify your church's bank account. Once verified, members can give online immediately.",
            },
            {
                q: "How does Gift Aid work on Churza?",
                a: "For UK churches, members can mark their giving as Gift Aid eligible. Churza generates HMRC-compliant Gift Aid reports in your admin panel. Members confirm they are UK taxpayers by enabling the Gift Aid toggle when giving.",
            },
            {
                q: "How do I record cash offerings?",
                a: "In your admin panel, go to Giving and tap 'Record cash'. Select the member (or mark as anonymous), enter the amount, type, and date. Cash gifts appear in your giving reports and can be included in Gift Aid reports.",
            },
            {
                q: "Can members see their giving history?",
                a: "Yes. Members can view their full giving history in the Churza app under the Giving tab. They can see each transaction, type, method, and date.",
            },
        ],
    },
    {
        id: "members",
        label: "Members & roles",
        icon: "👥",
        faqs: [
            {
                q: "What roles are available in Churza?",
                a: "Churza has five roles: Member, Worker, Deacon, Cell Leader, and Pastor/Admin. Each role has different permissions. Admins and Pastors have full access to the admin panel. Cell Leaders can manage their group. Members access the standard app experience.",
            },
            {
                q: "How do I approve a membership request?",
                a: "Go to your admin panel, tap Members, then filter by Pending. Tap a member's name and tap Approve. They will receive a notification that their membership has been approved.",
            },
            {
                q: "Can I create an account for a member who doesn't have a smartphone?",
                a: "Yes. In your admin panel go to Members and tap the + icon. Fill in the member's name and email. Churza will create an account with a temporary password and send them a welcome email with their login credentials.",
            },
            {
                q: "How do I assign a member to a cell group?",
                a: "Go to Cell Groups in your admin panel, open the group, and tap Manage. You can search for members by name and add them to the group. You can also assign a cell leader from this screen.",
            },
        ],
    },
    {
        id: "attendance",
        label: "Attendance",
        icon: "✅",
        faqs: [
            {
                q: "How does attendance check-in work?",
                a: "Before your service starts, go to your admin panel and tap Attendance, then Open check-in. Members will see a check-in banner appear on their home screen. They tap it once to mark their attendance. You can see the live count in real time.",
            },
            {
                q: "How do I close the check-in session?",
                a: "Go to Attendance in your admin panel and tap End check-in. The session closes and no further check-ins are recorded. You can view the attendance report for that session immediately.",
            },
            {
                q: "Can I check in a member manually?",
                a: "Yes. An usher or admin can check in members manually from the attendance screen by searching for the member's name and tapping Check in. This is useful for members without smartphones.",
            },
        ],
    },
    {
        id: "cell-groups",
        label: "Cell groups",
        icon: "💬",
        faqs: [
            {
                q: "How do I create a cell group?",
                a: "In your admin panel, go to Cell Groups and tap the + icon. Give the group a name, assign a cell leader, and add members. Members will be notified they have been added to the group.",
            },
            {
                q: "Can members message each other directly?",
                a: "Churza supports group messaging within cell groups. Direct one-to-one messaging between members outside of a cell group is not currently available.",
            },
            {
                q: "Can members send voice messages?",
                a: "Yes. In the cell group chat, members can tap and hold the microphone icon to record and send a voice message.",
            },
        ],
    },
    {
        id: "account",
        label: "Account & settings",
        icon: "⚙️",
        faqs: [
            {
                q: "How do I reset my password?",
                a: "On the Churza login screen, tap Forgot password. Enter your email address and we will send you a 4-digit reset code. Enter the code, set a new password, and log in.",
            },
            {
                q: "How do I delete my account?",
                a: "Open the Churza app, go to the More tab, tap Settings, scroll to the bottom and tap Delete account. Confirm when prompted. Your profile, membership records and personal data are permanently deleted. Financial records are retained for 7 years as required by UK law.",
            },
            {
                q: "How do I update my profile?",
                a: "Tap the profile icon in the top right of your home screen. Tap Edit profile to update your name, photo, and phone number.",
            },
            {
                q: "How do I turn off push notifications?",
                a: "You can manage notification preferences in your device settings under Churza, or in the Churza app under More > Settings > Notifications.",
            },
        ],
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`border rounded-xl overflow-hidden transition-colors ${open ? "border-gold/20 bg-gold/[0.03]" : "border-white/5 bg-navy-card"
                }`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full p-5 text-left flex justify-between items-start gap-4 cursor-pointer"
            >
                <span className={`font-semibold text-sm leading-relaxed transition-colors ${open ? "text-gold" : "text-cream"}`}>
                    {q}
                </span>
                <span
                    className={`text-gold shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                >
                    ↓
                </span>
            </button>
            {open && (
                <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-white/5 pt-4">
                    {a}
                </div>
            )}
        </div>
    );
}

export default function SupportPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filtered = categories
        .map((cat) => ({
            ...cat,
            faqs: cat.faqs.filter(
                (faq) =>
                    faq.q.toLowerCase().includes(search.toLowerCase()) ||
                    faq.a.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter((cat) =>
            search
                ? cat.faqs.length > 0
                : !activeCategory || cat.id === activeCategory
        );

    const totalResults = filtered.reduce((sum, cat) => sum + cat.faqs.length, 0);

    return (
        <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto min-h-screen">

            {/* Header */}
            <div className="text-center mb-12">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/30 rounded-full px-3 py-1 mb-6">
                    Help centre
                </span>
                <h1 className="font-display text-5xl md:text-6xl text-cream mb-4">
                    How can we help?
                </h1>
                <p className="text-muted text-lg">
                    Everything you need to manage your church on Churza.
                </p>
            </div>

            {/* Search */}
            <div className="mb-10 relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-hint text-lg">
                    🔍
                </span>
                <input
                    type="text"
                    placeholder="Search for help..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-navy-card border border-white/10 rounded-2xl py-4 pl-12 pr-5 text-cream placeholder-hint focus:border-gold outline-none transition-colors text-sm"
                />
                {search && (
                    <button
                        onClick={() => setSearch("")}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-hint hover:text-cream transition-colors text-sm"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Category filter — hidden when searching */}
            {!search && (
                <div className="flex flex-wrap gap-2 mb-10">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${activeCategory === null
                                ? "bg-gold text-navy border-gold"
                                : "border-white/10 text-muted hover:border-gold/30 hover:text-cream"
                            }`}
                    >
                        All topics
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() =>
                                setActiveCategory(activeCategory === cat.id ? null : cat.id)
                            }
                            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${activeCategory === cat.id
                                    ? "bg-gold text-navy border-gold"
                                    : "border-white/10 text-muted hover:border-gold/30 hover:text-cream"
                                }`}
                        >
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Search result count */}
            {search && (
                <p className="text-sm text-hint mb-6">
                    {totalResults === 0
                        ? "No results found."
                        : `${totalResults} result${totalResults === 1 ? "" : "s"} for "${search}"`}
                </p>
            )}

            {/* FAQ sections */}
            <div className="space-y-10">
                {filtered.map((cat) =>
                    cat.faqs.length === 0 ? null : (
                        <div key={cat.id}>
                            {(!activeCategory || search) && (
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-lg">{cat.icon}</span>
                                    <h2 className="font-display text-xl text-cream">
                                        {cat.label}
                                    </h2>
                                    <div className="flex-1 h-px bg-white/5" />
                                    <span className="text-xs text-hint">
                                        {cat.faqs.length} question{cat.faqs.length === 1 ? "" : "s"}
                                    </span>
                                </div>
                            )}
                            <div className="space-y-3">
                                {cat.faqs.map((faq, i) => (
                                    <FaqItem key={i} q={faq.q} a={faq.a} />
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* No results state */}
            {search && totalResults === 0 && (
                <div className="text-center py-16">
                    <p className="text-4xl mb-4">🤔</p>
                    <p className="text-cream font-semibold mb-2">No results found</p>
                    <p className="text-muted text-sm">
                        Try a different search term or browse by category above.
                    </p>
                </div>
            )}

            {/* Contact card */}
            <div className="mt-20 p-8 rounded-3xl bg-gold/5 border border-gold/20 text-center">
                <h3 className="font-display text-2xl text-cream mb-3">
                    Still need help?
                </h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                    Our support team is ready to help your church get the most out of
                    Churza. We aim to respond within 5 business days.
                </p>
                <a
                    href="mailto:support@churza.org"
                    className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-gold-light transition-colors"
                >
                    Email support@churza.org →
                </a>
            </div>

        </div>
    );
}