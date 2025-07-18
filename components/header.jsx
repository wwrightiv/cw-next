'use client';
import Image from 'next/image';
import Link from 'next/link';
import MainLogo from 'public/images/logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import { useLivestream } from '../context/LivestreamContext';
import { useRouter } from 'next/navigation';

const navItems = [
    { linkText: 'Live', href: '/live' }
];

// const navItems = [
//     { linkText: 'Home', href: '/' },
//     { linkText: 'Revalidation', href: '/revalidation' },
//     { linkText: 'Image CDN', href: '/image-cdn' },
//     { linkText: 'Edge Function', href: '/edge' },
//     { linkText: 'Blobs', href: '/blobs' },
//     { linkText: 'Classics', href: '/classics' }
// ];

export function Header() {
    const { event } = useLivestream?.() || {};
    const router = useRouter?.() || {};
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24 relative">
            <Link href="/">
                <Image src={MainLogo} width={250} alt="Connect Wellness logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="no-underline text-gray-900 hover:text-blue-500 transition inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {event && (
              <button
                onClick={() => router.push && router.push('/live')}
                className="self-end px-5 py-2 rounded-full bg-red-600 text-white font-semibold shadow-lg text-sm transition hover:bg-red-700"
                style={{ zIndex: 10 }}
              >
                Meeting in Progress
              </button>
            )}
        </nav>
    );
}
