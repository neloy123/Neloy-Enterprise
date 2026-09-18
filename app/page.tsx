import Link from 'next/link';
import { products } from '@/lib/products';

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f7f4ef]">
        <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-700 shadow-sm">
              Custom Manufacturing for Home, Shop & Office
            </div>
            <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
              Made for Your Space.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              আপনার ঘর, দোকান ও অফিসের জন্য প্রয়োজন অনুযায়ী তৈরি করি।
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Neloy Enterprise manufactures custom aluminium, glass, mirror and board products for modern homes, shops and offices across Bangladesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/configure" className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
                Start Designing
              </Link>
              <Link href="/shop" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
                View Products
              </Link>
              <a
                href="https://wa.me/8801722884496"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-500 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500/20"
              >
                WhatsApp / Contact Us
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div><span className="font-semibold text-slate-900">Custom</span> built to fit</div>
              <div><span className="font-semibold text-slate-900">Local</span> manufacturing</div>
              <div><span className="font-semibold text-slate-900">Practical</span> premium design</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-10 h-40 w-40 rounded-full bg-brand-200/40 blur-3xl" />
            <div className="absolute -left-10 bottom-14 h-32 w-32 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Modern custom interior design"
                className="h-[520px] w-full rounded-[20px] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/40 bg-white/80 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Custom build</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">Aluminium + Glass Solutions</h3>
                  </div>
                  <div className="rounded-full bg-brand-700 px-3 py-2 text-xs font-semibold text-white">From ৳ 3,200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">What we manufacture</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Custom solutions for every space</h2>
          </div>
          <Link href="/shop" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 md:inline-flex">
            Explore all products →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="overflow-hidden">
                <img src={product.image} alt={product.name} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{product.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{product.summary}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-brand-700">Configure</span>
                  <span className="text-slate-400 transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1b2c22] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">Three main markets</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Designed for everyday environments</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Home',
                text: 'Modern products that improve bedrooms, living rooms, kitchens and study spaces.',
                image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'
              },
              {
                title: 'Shop',
                text: 'Practical shelves, counters, display fixtures and shop-front solutions.',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80'
              },
              {
                title: 'Office',
                text: 'Partitions, storage and professional workspace upgrades built for productivity.',
                image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'
              }
            ].map((market) => (
              <div key={market.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                <img src={market.image} alt={market.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{market.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{market.text}</p>
                  <button className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/8">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">Configure your product</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Choose the product. Customize the details.</h2>
        </div>

        <div className="grid gap-8 rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Select product</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none ring-0 transition focus:border-brand-500">
                  <option>Aluminium Sliding Window</option>
                  <option>Aluminium Glass Door</option>
                  <option>Glass Partition</option>
                  <option>Custom Mirror</option>
                  <option>Bookshelf</option>
                  <option>Corner Shelf</option>
                  <option>Melamine Board Furniture</option>
                </select>
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
            </div>
          </div>

          <div className="rounded-[26px] bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Estimated price</p>
            <div className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-slate-900">৳ 18,500</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Price is a rough estimate and depends on exact material, finish, size and installation requirements.</p>
            <div className="mt-8 space-y-3 text-sm text-slate-700">
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Product</span><span className="font-semibold">Sliding Window</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Dimension</span><span className="font-semibold">4ft x 4ft</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Material</span><span className="font-semibold">Aluminium</span></div>
            </div>
            <Link href="/contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
              Request a Quote
            </Link>
            <a
              href="https://wa.me/8801722884496?text=Hello%20Neloy%20Enterprise%2C%20I%20want%20to%20request%20a%20quote%20for%20a%20custom%20product."
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-emerald-500 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500/20"
            >
              Send via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slateWarm py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">Manufacturing process</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">How we work</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['01', 'Choose', 'Choose the product that fits your home, shop, or office.'],
              ['02', 'Customize', 'Share dimensions, preferences and material needs.'],
              ['03', 'We Manufacture', 'Our team builds the product according to your specifications.'],
              ['04', 'Delivery & Installation', 'We deliver and install where available.']
            ].map(([step, title, text]) => (
              <div key={step} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-sm font-bold tracking-[0.2em] text-brand-700">{step}</div>
                <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">Why Neloy Enterprise</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Built for real spaces, not generic showroom ideas.</h2>
            <div className="mt-8 space-y-5">
              {[
                ['Custom Made', 'Products are made based on your actual requirements, size and use.'],
                ['Multiple Materials', 'Aluminium, glass, mirror, melamine board, hardboard and chipboard solutions.'],
                ['Local Manufacturing', 'Built for customers in Bangladesh with practical value and dependable execution.'],
                ['One Workshop, Many Solutions', 'Home, shop, office and custom decoration from a single partner.']
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-lg text-brand-700">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
              alt="Manufacturing and interior craftsmanship"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0ea] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">Gallery</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Our recent work</h2>
            </div>
            <button className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-400 md:inline-flex">
              View all projects
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                <img src={image} alt="Project gallery" className="h-72 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
