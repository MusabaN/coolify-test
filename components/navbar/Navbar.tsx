'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const logo = theme === 'dark' ? '/kunstgress_white.svg' : '/kunstgress_black.svg';

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-4 relative">
            <div className="logo">
                <Link href="/">
                    <Image src={logo} alt="Logo" width={120} height={24} />
                </Link>
            </div>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:text-gray-600"
            >
                {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </button>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link href="/" className="mr-4 hover:text-gray-600">Home</Link>
                <Link href="/about" className="mr-4 hover:text-gray-600">About</Link>
                <Link href="/contact" className="mr-4 hover:text-gray-600">Contact</Link>
            </div>
            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
