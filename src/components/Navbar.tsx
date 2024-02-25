"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../public/logo.svg'
import LogoWhite from '../../public/logo-white.svg'
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCart } from '@/hooks/useCart'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart } = useCart();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        })
    }, [])

    const user = false;
    return (
        <nav className={`w-full flex items-center justify-center ${isScrolled ? 'bg-[#000000d7] text-white sticky' : 'bg-white text-black' }  top-0 z-50`}>
            <div className={`max-w-7xl w-full flex items-center justify-between py-2 px-8 xl:px-0 ${
                    isScrolled ? 'backdrop-filter backdrop-blur-md py-4' : ''
                }`}>
                <Link href="/" className="uppercase font-bold text-md flex items-center">
                    <Image src={isScrolled ? LogoWhite : Logo} alt="Logo" className={`${isScrolled ? 'h-[70px]': ''}`} />
                </Link>


                <div className="hidden items-center lg:flex">
                    <Link href="/" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:border-[#FDB73C] hover:text-gray-700">Home</Link>
                    <Link href="/cart" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:border-[#FDB73C] hover:text-gray-700">Narguiles</Link>
                    <Link href="/cart" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:border-[#FDB73C] hover:text-gray-700">Essencias</Link>
                    <Link href="/cart" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:border-[#FDB73C] hover:text-gray-700">Acessórios</Link>
                    <Link href="/cart" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:border-[#FDB73C] hover:text-gray-700">Search</Link>
                    <Link href="/cart" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:text-gray-700 relative"><span className='absolute text-xs bg-[#FDB73C] w-5 h-5 flex items-center justify-center rounded-full top-[-8px] left-[-8px] z-50'>{cart?.length}</span><FiShoppingCart className="text-2xl relative" /></Link>
                    {user ? (
                        <Link href="/cart" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:text-gray-700">
                            <FiUser className="text-2xl" />
                        </Link>
                    ) : (
                        <Link href="/cart" className="uppercase font-bold text-md flex items-center ml-4 border-b-4 border-transparent transition-all duration-700 hover:text-gray-700">
                            <FiUser className="text-2xl" />
                        </Link>
                    )}
                </div>

                <FiMenu className="text-2xl flex lg:hidden" />
            </div>
        </nav>
    )
}
