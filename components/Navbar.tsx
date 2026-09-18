import Link from 'next/link';

export function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/configure', label: 'Configure' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">NE</div>
          <div>
            <div className="text-lg font-bold tracking-[0.2em] text-slate-900">NELOY</div>
            <div className="text-[10px] uppercase tracking-[0.42em] text-slate-500">Enterprise</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/8801722884496"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-emerald-500 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 md:inline-flex"
          >
            WhatsApp
          </a>
          <Link href="/configure" className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800">
            Configure
          </Link>
        </div>
      </div>
    </header>
  );
}
