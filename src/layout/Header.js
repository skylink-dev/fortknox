'use client';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import api from '@/lib/axios';

const actionLinks = [
    {
        href: '#',
        label: 'Login',
        className: 'text-red-600 hover:text-red-700 font-medium',
    },
    {
        href: '#',
        label: 'Download',
        className:
            'bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition',
    },
];

export default function Header() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [navLinks, setNavLinks] = useState([]);
    const searchInputRef = useRef(null);

    const toggleSearch = () => {
        setSearchVisible((prev) => !prev);
        setTimeout(() => {
            if (!searchVisible && searchInputRef.current) {
                searchInputRef.current.focus();
            }
        }, 100);
    };

    useEffect(() => {
        api.get('/menus/')
            .then((response) => {
                const headerMenu = response.data.find(menu => menu.slug === 'header');
                if (headerMenu?.submenus?.length) {
                    setNavLinks(headerMenu.submenus.map(item => ({
                        href: item.url,
                        label: item.name,
                    })));
                }
            })
            .catch((error) => {
                console.error('Error fetching menu:', error);
            });
    }, []);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <Link href="/" className="flex items-center space-x-2" id="header-logo-link">
                    <Image src="/assets/fortnox_logo.png" alt="Logo" width={200} height={70} style={{ width: '150px' }} />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    id="nav-toggle"
                    type="button"
                    className="xl:hidden w-10 h-8 grid place-content-center text-black hover:text-red-600"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <div className="space-y-1">
                        <div className="h-0.5 w-6 bg-current"></div>
                        <div className="h-0.5 w-6 bg-current"></div>
                    </div>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center space-x-6 uppercase" id="main-nav">
                    {navLinks.map((link, i) => (
                        <Link key={i} href={link.href} className="font-medium hover:text-red-600">
                            {link.label}
                        </Link>
                    ))}

                    {/* Search */}
                    <form id="search-form" className="relative flex items-center">
                        <input
                            id="search-input"
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search"
                            className={`${searchVisible ? 'block' : 'hidden'
                                } border px-3 py-1 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300`}
                        />
                        <button type="button" id="search-toggle" onClick={toggleSearch} className="text-gray-500 ml-2">
                            <svg viewBox="0 0 16 16" width="20" height="20">
                                <path
                                    d="M11.623 11.623 15 15l-3.377-3.377a6.223 6.223 0 1 1-8.8-8.8 6.223 6.223 0 0 1 8.8 8.8Z"
                                    stroke="currentColor"
                                    fill="transparent"
                                ></path>
                            </svg>
                        </button>
                    </form>

                    {actionLinks.map((action, i) => (
                        <Link key={i} href={action.href} className={action.className}>
                            {action.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Nav */}
            <div id="mobile-nav" className="xl:hidden hidden px-4 pb-4">
                <form id="mobile-search" className="mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-red-500"
                    />
                </form>

                {actionLinks.map((action, i) => (
                    <Link
                        key={i}
                        href={action.href}
                        className={`block ${i === 0
                            ? 'text-red-600 text-center mb-2'
                            : 'bg-red-600 text-white px-4 py-2 rounded mb-2 text-center'
                            }`}
                    >
                        {action.label}
                    </Link>
                ))}
            </div>
        </header>
    );
}
