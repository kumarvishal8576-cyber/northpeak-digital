import { Palette, Code2, Smartphone, TrendingUp, PenTool, BarChart3 } from 'lucide-react';
import './Services.css';

const services = [
  { icon: Palette, title: 'Brand strategy', text: 'Positioning, voice and identity systems built on research, not vibes.' },
  { icon: Code2, title: 'Web design & build', text: 'Marketing sites and web apps, hand-built for speed and clarity.' },
  { icon: Smartphone, title: 'Product & app development', text: "iOS, Android and cross-platform builds, tightly scoped so launches don't slip." },
  { icon: TrendingUp, title: 'SEO & organic growth', text: 'Technical audits and content architecture aimed at compounding traffic.' },
  { icon: PenTool, title: 'Content & copywriting', text: "Words that carry the brand's voice across the site, product and campaigns." },
  { icon: BarChart3, title: 'Analytics & optimization', text: 'Instrumentation and ongoing testing so decisions are backed by data.' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Survey / Services</div>
          <h2>Six disciplines. One route to the top.</h2>
          <p>We keep the team small and senior — every engagement gets people who've made the climb before.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <s.icon className="service-icon" size={26} strokeWidth={1.5} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}