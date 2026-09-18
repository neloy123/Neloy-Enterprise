export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">NE</div>
            <div>
              <div className="text-lg font-bold tracking-[0.2em] text-slate-900">NELOY</div>
              <div className="text-[10px] uppercase tracking-[0.42em] text-slate-500">Enterprise</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Custom manufacturing for home, shop and office spaces across Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><a href="/shop" className="hover:text-brand-700">Shop</a></li>
            <li><a href="/configure" className="hover:text-brand-700">Configure</a></li>
            <li><a href="/about" className="hover:text-brand-700">About</a></li>
            <li><a href="/contact" className="hover:text-brand-700">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>01722884496</li>
            <li>Netrakona, Bangladesh</li>
            <li>Custom manufacturing services</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-slate-600 lg:px-10">
          <span>© 2026 Neloy Enterprise</span>
          <span>Custom Manufacturing for Home, Shop & Office</span>
        </div>
      </div>
    </footer>
  );
}
