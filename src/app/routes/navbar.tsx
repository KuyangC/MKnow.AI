"use client";
import Link from 'next/link';
import { useState } from 'react';
import LoginModal from './login_modal';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <nav className="bg-indigo-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-white">
                            M-Knows.AI
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-bold">
                            Home
                        </Link>
                        <Link href="/product" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-bold">
                            About
                        </Link>
                        <Link href="/solusi" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-bold">
                            Product
                        </Link>
                        <Link href="/testimoni" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-bold">
                            Testimonial
                        </Link>
                        <Link href="/kontak" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-bold">
                            Contact
                        </Link>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Coba Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    );
}