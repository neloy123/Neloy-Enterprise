export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900">Talk to Neloy Enterprise</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-900">Neloy Enterprise</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p><span className="font-semibold text-slate-900">Address:</span> Netrakona Sadar, Dakshin Bishiuara, Netrakona, Bangladesh</p>
            <p><span className="font-semibold text-slate-900">Phone:</span> 01722884496</p>
            <p><span className="font-semibold text-slate-900">WhatsApp:</span> 01722884496</p>
            <p><span className="font-semibold text-slate-900">Business:</span> Custom manufacturing for home, shop and office spaces</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+8801722884496" className="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">Call Now</a>
            <a href="https://wa.me/8801722884496" target="_blank" rel="noreferrer" className="rounded-full border border-emerald-500 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-500/20">WhatsApp</a>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-soft">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Your name</label>
              <input type="text" placeholder="Full name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Phone number</label>
              <input type="tel" placeholder="Your phone number" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Product interest</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500">
                <option>Windows</option>
                <option>Doors</option>
                <option>Glass & Mirror</option>
                <option>Partitions</option>
                <option>Shelves & Storage</option>
                <option>Board Furniture</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
              <textarea rows={5} placeholder="Tell us about your requirements" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500" />
            </div>
            <button type="button" className="w-full rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">Send Inquiry</button>
          </form>
        </div>
      </div>
    </main>
  );
}
