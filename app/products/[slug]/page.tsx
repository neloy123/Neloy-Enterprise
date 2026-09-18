import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft">
          <img src={product.image} alt={product.name} className="h-[520px] w-full object-cover" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900">{product.name}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>

          <div className="mt-8 space-y-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Common materials</span>
              <span className="font-semibold text-slate-900">{product.materials.join(', ')}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Typical use</span>
              <span className="font-semibold text-slate-900">{product.usage}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Price range</span>
              <span className="font-semibold text-slate-900">{product.price}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/configure" className="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">
              Configure This Product
            </Link>
            <a href="https://wa.me/8801722884496?text=Hello%20Neloy%20Enterprise%2C%20I%20want%20a%20quote%20for%20this%20product%20-%20${encodeURIComponent(product.name)}" target="_blank" rel="noreferrer" className="rounded-full border border-emerald-500 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-500/20">
              Request on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
