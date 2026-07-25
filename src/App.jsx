import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import Pricing from './components/Pricing';
import ContactForm from './components/Contactform';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <Pricing />
        <section id="contact">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Base camp / Contact</div>
              <h2>Tell us about the climb ahead.</h2>
              <p>Share a few details and we'll come back with a scoped plan within two business days.</p>
            </div>
            <div className="contact-layout">
              <div className="contact-info">
                <div className="info-row"><span className="info-label">Email</span><span>hello@northpeak.digital</span></div>
                <div className="info-row"><span className="info-label">Phone</span><span>+1 (415) 555-0132</span></div>
                <div className="info-row"><span className="info-label">Studio</span><span>412 Ridgeline Ave, Suite 3<br />Portland, OR 97209</span></div>
                <div className="info-row"><span className="info-label">Hours</span><span>Mon – Fri, 9am – 6pm PT</span></div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
