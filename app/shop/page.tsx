import Link from 'next/link';
import { products } from '@/lib/products';

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">Shop</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900">Custom product catalogue</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Explore the core products we manufacture for homes, shops and offices across Bangladesh.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.slug} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
            <div className="p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{product.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">{product.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.summary}</p>
              <div className="mt-5 flex gap-3">
                <Link href={`/products/${product.slug}`} className="flex-1 rounded-full bg-brand-700 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-800">
                  View Details
                </Link>
                <Link href="/configure" className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-slate-300">
                  Configure
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
