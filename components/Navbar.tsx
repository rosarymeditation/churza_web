"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-display text-2xl font-bold text-gold tracking-[3px]">
                    CHURZA
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#features" className="nav-link">Features</Link>
                    <Link href="/#pricing" className="nav-link">Pricing</Link>
                    <Link href="/support" className="nav-link">Support</Link>
                    <Link href="https://onelink.to/498suf" className="gold-btn text-sm px-5 py-2.5">Download App</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-navy z-50 flex flex-col p-8 md:hidden">
                    <button className="self-end text-gold mb-8" onClick={() => setMobileMenuOpen(false)}>Close</button>
                    <div className="flex flex-col gap-6 text-2xl font-display">
                        <Link href="/#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                        <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                        <Link href="/support" onClick={() => setMobileMenuOpen(false)}>Support</Link>
                        <Link href="https://onelink.to/498suf" className="gold-btn text-center mt-4">Download App</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}