import Link from 'next/link';

export default function ConfigurePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">Configurator</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900">Configure your product</h1>
      </div>

      <div className="grid gap-8 rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Product type</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Sliding Window', 'Sliding Door', 'Glass Partition', 'Custom Shelf'].map((item) => (
                <button key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:bg-brand-50">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Width (ft)</label>
              <input type="number" defaultValue={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Height (ft)</label>
              <input type="number" defaultValue={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Material</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Aluminium', 'Glass', 'Mirror', 'Melamine Board', 'Hardboard', 'Chipboard'].map((material) => (
                <button key={material} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:bg-brand-50">
                  {material}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Finish / style</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Standard Finish', 'Premium Finish', 'Matte Silver', 'Wood Look'].map((style) => (
                <button key={style} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:bg-brand-50">
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[26px] bg-slate-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Estimated quote</p>
          <div className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-slate-900">৳ 18,500</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">Exact pricing depends on dimensions, material, finish and installation requirements.</p>
          <div className="mt-8 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Type</span><span className="font-semibold">Sliding Window</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Size</span><span className="font-semibold">4ft x 4ft</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Material</span><span className="font-semibold">Aluminium</span></div>
          </div>
          <Link href="/contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
            Request a Quote
          </Link>
          <a href="https://wa.me/8801722884496?text=Hello%20Neloy%20Enterprise%2C%20I%20want%20to%20request%20a%20quote." target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-emerald-500 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500/20">
            Send via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
