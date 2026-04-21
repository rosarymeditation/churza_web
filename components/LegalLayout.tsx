export default function LegalLayout({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl mb-12 text-gold">{title}</h1>
            <div className="grid md:grid-cols-[200px_1fr] gap-16">
                <aside className="hidden md:block sticky top-32 h-fit">
                    <nav className="flex flex-col gap-4 text-sm text-muted">
                        <div className="font-bold text-cream mb-2">Sections</div>
                        <a href="#overview" className="hover:text-gold">Overview</a>
                        <a href="#data" className="hover:text-gold">Data Protection</a>
                        <a href="#rights" className="hover:text-gold">Your Rights</a>
                        <a href="#contact" className="hover:text-gold">Contact</a>
                    </nav>
                </aside>
                <article className="prose prose-invert max-w-none 
          prose-headings:font-display prose-headings:text-gold prose-h2:text-2xl prose-h2:mt-12
          prose-p:text-muted prose-p:leading-relaxed prose-li:text-muted">
                    {children}
                </article>
            </div>
        </div>
    );
}