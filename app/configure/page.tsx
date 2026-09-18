"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { products } from '@/lib/products';

const materialMultiplier: Record<string, number> = {
  Aluminium: 1,
  Glass: 1.15,
  Mirror: 1.2,
  'Melamine Board': 1.05,
  Hardboard: 0.95,
  Chipboard: 0.9
};

const finishMultiplier: Record<string, number> = {
  'Standard Finish': 1,
  'Premium Finish': 1.2,
  'Matte Silver': 1.18,
  'Wood Look': 1.22,
  'Clear Glass': 1.1,
  'Tinted Glass': 1.18,
  'Frosted Glass': 1.24,
  'Plain Mirror': 1.1,
  'Decorative Mirror': 1.22
};

const sizePresets = [
  { label: 'Small', multiplier: 0.9 },
  { label: 'Medium', multiplier: 1 },
  { label: 'Large', multiplier: 1.25 }
];

function formatBDT(value: number) {
  return `৳ ${Math.round(value).toLocaleString('en-BD')}`;
}

export default function ConfigurePage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(products[0].slug);
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);
  const [selectedMaterial, setSelectedMaterial] = useState(products[0].materials[0]);
  const [selectedFinish, setSelectedFinish] = useState('Standard Finish');
  const [selectedPreset, setSelectedPreset] = useState('Medium');

  const selectedProduct = products.find((product) => product.slug === selectedProductSlug) ?? products[0];

  const materialOptions = selectedProduct.materials;
  const finishOptions = useMemo(() => {
    if (selectedMaterial === 'Glass') return ['Clear Glass', 'Tinted Glass', 'Frosted Glass'];
    if (selectedMaterial === 'Mirror') return ['Plain Mirror', 'Decorative Mirror'];
    return ['Standard Finish', 'Premium Finish', 'Matte Silver', 'Wood Look'];
  }, [selectedMaterial]);

  const quote = useMemo(() => {
    const cleanWidth = Math.max(1, Number(width) || 1);
    const cleanHeight = Math.max(1, Number(height) || 1);
    const area = cleanWidth * cleanHeight;
    const presetFactor = sizePresets.find((preset) => preset.label === selectedPreset)?.multiplier ?? 1;
    const base = selectedProduct.basePrice ?? 1000;
    const materialFactor = materialMultiplier[selectedMaterial] ?? 1;
    const finishFactor = finishMultiplier[selectedFinish] ?? 1;
    const installation = 500;
    const total = base * area * presetFactor * materialFactor * finishFactor + installation;

    return {
      total,
      area,
      materialFactor,
      finishFactor,
      presetFactor
    };
  }, [width, height, selectedMaterial, selectedFinish, selectedPreset, selectedProduct]);

  const WhatsAppText = encodeURIComponent(
    `Hello Neloy Enterprise, I want a quote for a custom product.\n\nProduct: ${selectedProduct.name}\nDimensions: ${width}ft x ${height}ft\nMaterial: ${selectedMaterial}\nFinish: ${selectedFinish}\nEstimated Price: ${formatBDT(quote.total)}`
  );

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
              {products.map((product) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => {
                    setSelectedProductSlug(product.slug);
                    setSelectedMaterial(product.materials[0]);
                    setSelectedFinish(product.materials[0] === 'Glass' ? 'Clear Glass' : product.materials[0] === 'Mirror' ? 'Plain Mirror' : 'Standard Finish');
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    selectedProduct.slug === product.slug
                      ? 'border-brand-600 bg-brand-50 text-brand-800'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-500 hover:bg-brand-50'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Width (ft)</label>
              <input
                type="number"
                min={1}
                step={0.1}
                value={width}
                onChange={(e) => setWidth(Math.max(1, Number(e.target.value) || 1))}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Height (ft)</label>
              <input
                type="number"
                min={1}
                step={0.1}
                value={height}
                onChange={(e) => setHeight(Math.max(1, Number(e.target.value) || 1))}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Size profile</label>
            <div className="grid gap-3 sm:grid-cols-3">
              {sizePresets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setSelectedPreset(preset.label)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    selectedPreset === preset.label
                      ? 'border-brand-600 bg-brand-50 text-brand-800'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-500 hover:bg-brand-50'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Material</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {materialOptions.map((material) => (
                <button
                  key={material}
                  type="button"
                  onClick={() => {
                    setSelectedMaterial(material);
                    const nextFinish =
                      material === 'Glass'
                        ? 'Clear Glass'
                        : material === 'Mirror'
                          ? 'Plain Mirror'
                          : 'Standard Finish';
                    setSelectedFinish(nextFinish);
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    selectedMaterial === material
                      ? 'border-brand-600 bg-brand-50 text-brand-800'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-500 hover:bg-brand-50'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Finish / style</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {finishOptions.map((finish) => (
                <button
                  key={finish}
                  type="button"
                  onClick={() => setSelectedFinish(finish)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    selectedFinish === finish
                      ? 'border-brand-600 bg-brand-50 text-brand-800'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-500 hover:bg-brand-50'
                  }`}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[26px] bg-slate-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Estimated quote</p>
          <div className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-slate-900">{formatBDT(quote.total)}</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">Exact pricing depends on dimensions, material, finish and installation requirements.</p>
          <div className="mt-8 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Type</span><span className="font-semibold">{selectedProduct.name}</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Size</span><span className="font-semibold">{width}ft x {height}ft</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Material</span><span className="font-semibold">{selectedMaterial}</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"><span>Finish</span><span className="font-semibold">{selectedFinish}</span></div>
          </div>
          <a
            href={`https://wa.me/8801722884496?text=${WhatsAppText}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Request a Quote
          </a>
          <a
            href={`https://wa.me/8801722884496?text=${WhatsAppText}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-emerald-500 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500/20"
          >
            Send via WhatsApp
          </a>
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-xs leading-6 text-slate-600">
            <div>Estimated area: {quote.area.toFixed(1)} sq ft</div>
            <div>Material factor: {quote.materialFactor.toFixed(2)}x</div>
            <div>Finish factor: {quote.finishFactor.toFixed(2)}x</div>
            <div>Profile factor: {quote.presetFactor.toFixed(2)}x</div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-600">
        Need a custom quote? <Link href="/contact" className="font-semibold text-brand-700">Contact Neloy Enterprise</Link>
      </div>
    </main>
  );
}
