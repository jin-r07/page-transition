import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-slate-400 flex items-center justify-between px-2 font-mono">
        <h1 className="pl-8 text-4xl">Logo</h1>
        <ul className="flex items-center gap-10 p-6 text-2xl">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
        </ul>
    </nav>
  )
}
