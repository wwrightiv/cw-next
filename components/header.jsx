'use client';
import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import { useLivestream } from '../context/LivestreamContext';
import { useRouter } from 'next/navigation';

const navItems = [
    { linkText: 'Home', href: '/' },
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
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
            {event && (
              <button
                onClick={() => router.push && router.push('/live')}
                className="absolute right-0 top-0 mt-4 mr-2 px-5 py-2 rounded-full bg-red-600 text-white font-semibold shadow-lg text-sm transition hover:bg-red-700"
                style={{ zIndex: 10 }}
              >
                Meeting in Progress
              </button>
            )}
        </nav>
    );
}
