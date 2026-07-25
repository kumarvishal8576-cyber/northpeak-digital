import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="eyebrow">Digital product studio — est. 2018</div>
        <h1>We take digital products to <em>base camp, ridge, and summit.</em></h1>
        <p className="lead">
          NorthPeak Digital plans the route, builds the terrain, and gets your product
          to altitude — brand, web, product and growth work for teams who don't want a slow climb.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Start a project →</a>
          <a href="#results" className="btn btn-ghost">See the results</a>
        </div>
        <div className="hero-stats">
          <div><div className="stat-num">62</div><div className="stat-label">Products shipped</div></div>
          <div><div className="stat-num">4.9m</div><div className="stat-label">Users reached</div></div>
          <div><div className="stat-num">6wk</div><div className="stat-label">Avg. time to launch</div></div>
        </div>
      </div>
    </section>
  );
}