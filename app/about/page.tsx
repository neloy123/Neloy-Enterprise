export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">About us</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-slate-900">Custom manufacturing for real spaces.</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Neloy Enterprise is a Bangladesh-based manufacturing and custom-design company focused on practical products for homes, shops and offices. We combine aluminium, glass, mirror and board materials to create useful products that fit the customer’s space, requirement and budget.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We focus on durable, functional and modern design solutions that improve daily use while remaining attractive and professional.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
            alt="Manufacturer workshop"
            className="h-full min-h-[500px] w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
