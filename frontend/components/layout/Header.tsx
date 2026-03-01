"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/60 backdrop-blur-xl"
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-heading font-medium tracking-tight text-black">
                        MatruKavach AI
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-10 font-medium text-black">
                    <Link href="/asha" className="hover:text-gray-500 transition-colors">ASHA Portal</Link>
                    <Link href="/doctor" className="hover:text-gray-500 transition-colors">Doctor Portal</Link>
                    <Link href="/admin" className="hover:text-gray-500 transition-colors">Admin</Link>
                </nav>

                <button
                    className="md:hidden p-2 text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-200"
                    >
                        <nav className="flex flex-col px-4 py-4 gap-4 font-medium text-black shadow-lg">
                            <Link href="/asha" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-gray-500 transition-colors">ASHA Portal</Link>
                            <Link href="/doctor" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-gray-500 transition-colors">Doctor Portal</Link>
                            <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-gray-500 transition-colors">Admin</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
