import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span className="brand" style={{ fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="mark" style={{ color: '#FF6A2B' }}>▲</span> NorthPeak Digital
          </span>
          <span>Digital product studio · Portland, OR</span>
        </div>
        <div>
          <a href="mailto:hello@northpeak.digital">hello@northpeak.digital</a>
        </div>
      </div>
      <div className="wrap footer-credit">
        Built for <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer">Digital Heroes Training Task</a>
        {' '}· Live URL: <span>add your deployed URL here before submitting</span>
      </div>
    </footer>
  );
}