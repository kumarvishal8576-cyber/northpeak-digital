import './Results.css';

const stats = [
  { num: '+184%', lbl: 'Avg. organic traffic lift, 6 months' },
  { num: '2.1s', lbl: 'Avg. page load after rebuild' },
  { num: '97', lbl: 'Avg. Lighthouse performance score' },
  { num: '31', lbl: 'Client engagements, last 18 months' },
];

const testimonials = [
  { quote: 'They scoped the project tighter than we asked for, then hit every date in it.', who: 'Founder, DTC skincare brand' },
  { quote: 'First team that actually explained why our old site was slow instead of just rebuilding it.', who: 'Head of Marketing, B2B SaaS' },
  { quote: 'Senior people end to end. No hand-off to a junior team halfway through.', who: 'COO, logistics startup' },
];

export default function Results() {
  return (
    <section id="results">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Field report / Results</div>
          <h2>What the climb has looked like for clients.</h2>
        </div>
        <div className="results-top">
          {stats.map((s) => (
            <div className="result-tile" key={s.lbl}>
              <span className="num">{s.num}</span>
              <span className="lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
        <div className="testimonials">
          {testimonials.map((t) => (
            <div className="testimonial" key={t.who}>
              <blockquote>"{t.quote}"</blockquote>
              <div style={{ marginTop: 12, color: '#8FA0A8', fontSize: 13 }}>— {t.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}