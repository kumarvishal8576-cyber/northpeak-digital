import './Pricing.css';

const tiers = [
  {
    route: 'Route 01', name: 'Basecamp', elev: 'For a single site or landing page',
    price: '$3,200', period: '/ project', note: '2–3 week turnaround',
    features: ['One-page or small marketing site', 'Responsive build, 3 breakpoints', 'Basic on-page SEO setup', '2 rounds of revisions'],
    featured: false,
  },
  {
    route: 'Route 02', name: 'Ridge', elev: 'For a full site or early-stage product',
    price: '$8,900', period: '/ project', note: '5–7 week turnaround',
    features: ['Everything in Basecamp', 'Full multi-page site or MVP build', 'Brand refresh included', 'Analytics + event tracking setup', '4 rounds of revisions'],
    featured: true,
  },
  {
    route: 'Route 03', name: 'Summit', elev: 'For ongoing product & growth work',
    price: 'From $14k', period: '/ month', note: 'Ongoing, monthly retainer',
    features: ['Everything in Ridge', 'Dedicated senior team, embedded', 'Continuous SEO & growth experiments', 'Priority turnaround on requests', 'Monthly reporting & strategy calls'],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Routes / Pricing</div>
          <h2>Three routes up the mountain.</h2>
          <p>Fixed-scope engagements with deliverables written down before we start.</p>
        </div>
        <div className="pricing-grid">
          {tiers.map((t) => (
            <div className={`price-card${t.featured ? ' featured' : ''}`} key={t.name}>
              <div className="price-camp">{t.route}</div>
              <h3>{t.name}</h3>
              <div className="price-elev">{t.elev}</div>
              <div className="price-amount">{t.price} <span>{t.period}</span></div>
              <p className="price-note">{t.note}</p>
              <ul className="price-features">
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className={`btn ${t.featured ? 'btn-primary' : 'btn-ghost'} price-cta`}>
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}