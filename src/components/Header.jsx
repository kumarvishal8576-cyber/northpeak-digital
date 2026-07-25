import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a href="#top" className="brand"><span className="mark">▲</span> NorthPeak Digital</a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">Start a project</a>
      </div>
    </header>
  );
}