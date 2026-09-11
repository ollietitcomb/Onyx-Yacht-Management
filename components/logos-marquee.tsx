'use client';

export function LogosMarquee() {
  // Placeholder for marina/partner logos
  const partners = [
    'Agapi Boating',
    'Premier Marinas',
    'Pinmar',
    'Awk Marine',
  ];

  return (
    <section className="border-y border-neutral-200 bg-fog py-12">
      <div className="container-custom">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
          Trusted Partners & Accreditations
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner}
              className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-ink"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
