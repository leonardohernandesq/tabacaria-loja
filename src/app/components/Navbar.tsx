import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center justify-between py-2 px-8 z-50 bg-slate-800 text-gray-300">
            <Link href="/" className="uppercase font-bold text-md h-12 flex items-center">
                Tabacaria Online
            </Link>

            <div className="flex items-center">
                <Link href="/cart" className="uppercase font-bold text-md h-12 flex items-center">
                    <span className="ml-2">Carrinho</span>
                </Link>
            </div>
        </nav>
    )
}
