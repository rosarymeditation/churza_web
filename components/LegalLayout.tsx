import React from "react";

interface TocItem {
    id: string;
    label: string;
}

interface LegalLayoutProps {
    title: string;
    subtitle?: string;
    lastUpdated?: string;
    toc?: TocItem[];
    children: React.ReactNode;
}

export default function LegalLayout({
    title,
    subtitle,
    lastUpdated,
    toc = [],
    children,
}: LegalLayoutProps) {
    const defaultToc: TocItem[] = [
        { id: "overview", label: "Overview" },
        { id: "data", label: "Data Protection" },
        { id: "rights", label: "Your Rights" },
        { id: "contact", label: "Contact" },
    ];

    const links = toc.length > 0 ? toc : defaultToc;

    return (
        <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto">

            {/* Header */}
            <div className="mb-12">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/30 rounded-full px-3 py-1 mb-6">
                    Legal
                </span>
                <h1 className="font-display text-4xl md:text-6xl text-gold mb-4">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-muted text-lg leading-relaxed mb-4">
                        {subtitle}
                    </p>
                )}
                {lastUpdated && (
                    <div className="flex items-center gap-2 flex-wrap text-sm text-hint">
                        <span>Last updated: {lastUpdated}</span>
                        <span className="opacity-40">·</span>
                        <span>Softnergy Limited</span>
                        <span className="opacity-40">·</span>
                        <span>Scotland, UK</span>
                    </div>
                )}
            </div>

            {/* Body grid */}
            <div className="grid md:grid-cols-[220px_1fr] gap-16">

                {/* TOC sidebar */}
                <aside className="hidden md:block sticky top-32 h-fit">
                    <nav className="flex flex-col gap-1 text-sm">
                        <div className="text-xs font-bold tracking-widest uppercase text-hint mb-4">
                            Contents
                        </div>
                        {links.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-muted hover:text-gold transition-colors py-1.5 pl-3 border-l border-white/5 hover:border-gold/40"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact box */}
                    <div className="mt-8 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <p className="text-xs text-hint mb-1">Questions?</p>
                        <a
                            href="mailto:support@churza.org"
                            className="text-sm text-gold hover:underline"
                        >
                            support@churza.org
                        </a>
                    </div>
                </aside>

                {/* Article */}
                <article className="prose prose-invert max-w-none prose-headings:font-display prose-h2:text-gold prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gold/10 prose-h3:text-cream prose-h3:text-base prose-h3:mt-8 prose-h3:mb-2 prose-p:text-muted prose-p:leading-relaxed prose-p:text-[15px] prose-li:text-muted prose-li:text-[15px] prose-li:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-cream prose-strong:font-semibold prose-table:text-sm prose-thead:bg-gold/5 prose-th:text-gold prose-th:font-semibold prose-th:text-xs prose-th:tracking-wide prose-th:uppercase prose-td:text-muted prose-td:align-top prose-td:leading-relaxed prose-tr:border-white/5">

                    {children}

                    {/* Footer strip */}
                    <div className="not-prose mt-16 p-8 bg-gold/5 border border-gold/15 rounded-2xl">
                        <div className="flex items-center justify-between gap-6 flex-wrap">
                            <div>
                                <p className="font-display text-xl text-cream mb-1">
                                    Still have questions?
                                </p>
                                <p className="text-sm text-muted">
                                    Our team responds within 5 business days.
                                </p>
                            </div>
                            <a
                                href="mailto:support@churza.org"
                                className="inline-flex items-center bg-gold text-navy font-bold text-sm px-6 py-3 rounded-lg hover:bg-gold-light transition-colors whitespace-nowrap"
                            >
                                Contact us →
                            </a>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    );
}