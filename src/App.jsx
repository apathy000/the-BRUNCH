import { useState, useEffect, useRef } from "react";
import "./App.css";

const NAV_LINKS = ["Menu", "About", "Gallery", "Reviews", "Contact"];

const REVIEWS = [
  { name: "Ani M.", rating: 5, text: "The coziest place with incredibly attentive staff. We stayed for hours and nobody rushed us — that's rare.", avatar: "A" },
  { name: "David K.", rating: 5, text: "Best lemon tart I've ever had. The presentation alone is worth coming for — it looked almost too beautiful to eat.", avatar: "D" },
  { name: "Nare S.", rating: 5, text: "Crispy thin pizzas, perfectly brewed coffee, and the warmest atmosphere. This is our family's go-to place now.", avatar: "N" },
  { name: "Armen G.", rating: 5, text: "Fast service, generous portions, and the breakfast plating is like something from a magazine. Absolutely stellar.", avatar: "A" },
  { name: "Mariam T.", rating: 5, text: "We've been back four times this month. The atmosphere just pulls you in. The staff remembers your name.", avatar: "M" },
  { name: "Sona V.", rating: 4, text: "Incredible coffee and desserts. The cappuccino foam art was perfect. The interior is stunning — very photogenic.", avatar: "S" },
];

const MENU_ITEMS = [
  { category: "Breakfasts", emoji: "🍳", items: [
    { name: "The BRUNCH Classic", desc: "Eggs benedict, prosciutto, hollandaise, toasted brioche", price: "3,200" },
    { name: "Avocado Sunrise", desc: "Sourdough, smashed avocado, poached eggs, microgreens", price: "2,800" },
    { name: "Shakshuka Royale", desc: "Spiced tomato, feta, slow-poached eggs, warm flatbread", price: "2,600" },
  ]},
  { category: "Thin Pizzas", emoji: "🍕", items: [
    { name: "Margherita Naturale", desc: "San Marzano tomato, buffalo mozzarella, fresh basil", price: "3,800" },
    { name: "Truffle & Mushroom", desc: "Wild mushrooms, truffle oil, gruyère, rosemary", price: "4,200" },
    { name: "Fig & Prosciutto", desc: "Caramelized fig, cured prosciutto, arugula, ricotta", price: "4,400" },
  ]},
  { category: "Coffee", emoji: "☕", items: [
    { name: "Single Origin Pour Over", desc: "Ethiopian Yirgacheffe, light roast, floral notes", price: "1,200" },
    { name: "Signature Latte", desc: "House blend espresso, oat milk, vanilla, latte art", price: "1,400" },
    { name: "Cold Brew Tonic", desc: "18-hour brew, tonic water, citrus, served over ice", price: "1,600" },
  ]},
  { category: "Desserts", emoji: "🍋", items: [
    { name: "Legendary Lemon Tart", desc: "French-style lemon curd, torched meringue, buttery crust", price: "1,800" },
    { name: "Tiramisu del Giorno", desc: "Mascarpone, espresso-soaked ladyfingers, cocoa dust", price: "2,000" },
    { name: "Honey Panna Cotta", desc: "Armenian wildflower honey, vanilla bean, berry coulis", price: "1,600" },
  ]},
];

const FEATURES = [
  { icon: "✦", title: "Legendary Breakfasts", desc: "Large portions, beautiful plating, and comforting flavors that make mornings worth waking up for." },
  { icon: "◈", title: "Thin & Crispy Pizza", desc: "Italian-inspired texture, fresh ingredients, and that perfect char — made with genuine care." },
  { icon: "◉", title: "Specialty Coffee", desc: "Single-origin beans, precision brewing, and latte art that makes every cup a small ceremony." },
  { icon: "❋", title: "Artisan Desserts", desc: "The lemon tart alone has brought people back. Our pastry selection changes seasonally." },
  { icon: "◇", title: "Warm Hospitality", desc: "Friendly staff who remember you. Service that feels personal, never rushed, never corporate." },
  { icon: "○", title: "Cozy Atmosphere", desc: "Natural light, warm textures, and a pace of life that encourages you to stay a little longer." },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__logo" onClick={() => scrollTo("hero")}>
          <span className="nav__logo-text">THE</span>
          <span className="nav__logo-accent">BRUNCH</span>
        </div>
        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {NAV_LINKS.map(l => (
            <li key={l}><button onClick={() => scrollTo(l.toLowerCase())}>{l}</button></li>
          ))}
        </ul>
        <button className="nav__cta" onClick={() => scrollTo("contact")}>Book a Table</button>
        <button className="nav__burger" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ── STICKY CTA ── */}
      <a className={`sticky-cta ${scrolled ? "sticky-cta--visible" : ""}`} onClick={() => scrollTo("contact")}>
        Reserve a Spot
      </a>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero__bg">
          <div className="hero__overlay" />
          <div className="hero__particles">
            {[...Array(6)].map((_, i) => <div key={i} className={`particle particle--${i}`} />)}
          </div>
        </div>
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="star">★</span> 4.5 · 200+ guests · Yerevan's favorite brunch
          </div>
          <h1 className="hero__headline reveal">
            More Than Brunch —<br />
            <em>It's Your Favorite<br />Part of the Day.</em>
          </h1>
          <p className="hero__sub reveal">
            Handcrafted breakfasts, thin crispy pizzas, specialty coffee, and the kind of warmth
            that keeps guests coming back again and again.
          </p>
          <div className="hero__ctas reveal">
            <button className="btn btn--primary" onClick={() => scrollTo("contact")}>Book a Table</button>
            <button className="btn btn--ghost" onClick={() => scrollTo("menu")}>Explore Menu</button>
          </div>
          <div className="hero__proof reveal">
            <div className="proof-pill">🏅 Family Friendly</div>
            <div className="proof-pill">☕ Specialty Coffee</div>
            <div className="proof-pill">✦ Returning Guests Daily</div>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="container">
          {[
            ["200+", "Google Reviews"],
            ["4.5★", "Average Rating"],
            ["Daily", "Returning Guests"],
            ["100%", "Handcrafted Menu"],
          ].map(([num, label]) => (
            <div className="stat reveal" key={label}>
              <span className="stat__num">{num}</span>
              <span className="stat__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="menu" className="features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">The Experience</span>
            <h2>Everything We Do, We Do With Care</h2>
            <p>From the first coffee pour to the last dessert bite — every detail is intentional.</p>
          </div>
          <div className="features__grid">
            {FEATURES.map((f, i) => (
              <div className="feature-card reveal" key={f.title} style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="feature-card__icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Gallery</span>
            <h2>Every Dish Tells a Story</h2>
          </div>
          <div className="gallery__grid">
            {[
              { label: "Breakfast Plates", size: "tall", color: "#C8A882" },
              { label: "Coffee Art", size: "normal", color: "#8B6F47" },
              { label: "Desserts", size: "normal", color: "#D4A96A" },
              { label: "Pizza", size: "wide", color: "#B07D5A" },
              { label: "Interior", size: "normal", color: "#9E8060" },
              { label: "Table Setup", size: "tall", color: "#C4956A" },
              { label: "Happy Guests", size: "normal", color: "#A07850" },
            ].map((item, i) => (
              <div className={`gallery__item gallery__item--${item.size} reveal`} key={i}
                style={{ background: item.color, animationDelay: `${i * 0.06}s` }}>
                <div className="gallery__item-inner">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="gallery__note reveal">📸 Real photos coming from The BRUNCH kitchen</p>
        </div>
      </section>

      {/* ── MENU PREVIEW ── */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Our Menu</span>
            <h2>Made Fresh, Every Morning</h2>
            <p>A menu built around quality ingredients and recipes that genuinely excite us.</p>
          </div>
          <div className="menu-tabs reveal">
            {MENU_ITEMS.map((cat, i) => (
              <button key={cat.category} className={`menu-tab ${activeMenu === i ? "menu-tab--active" : ""}`}
                onClick={() => setActiveMenu(i)}>
                {cat.emoji} {cat.category}
              </button>
            ))}
          </div>
          <div className="menu-items">
            {MENU_ITEMS[activeMenu].items.map((item, i) => (
              <div className="menu-item reveal" key={item.name} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="menu-item__info">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
                <span className="menu-item__price">֏ {item.price}</span>
              </div>
            ))}
          </div>
          <div className="menu-cta reveal">
            <button className="btn btn--outline" onClick={() => scrollTo("contact")}>
              See Full Menu — Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about">
        <div className="container about__layout">
          <div className="about__visual reveal">
            <div className="about__img-block">
              <div className="about__img-main" />
              <div className="about__img-accent">
                <span>"The place everyone comes back to."</span>
              </div>
            </div>
          </div>
          <div className="about__text reveal">
            <span className="section-tag">Our Story</span>
            <h2>Built Around Comfort, Flavor & Connection</h2>
            <p>The BRUNCH was born from a simple belief: mornings should feel special. Not rushed. Not ordinary. Special.</p>
            <p>We built a place where breakfasts are generous, coffee is brewed with care, and the staff actually knows your name. Where conversations last longer because nobody's in a hurry to move you along.</p>
            <p>Every dish on our menu was chosen because it genuinely excites us — from the perfectly crisped pizza bases to the lemon tart that people talk about for weeks after their first bite.</p>
            <p>Located in the heart of Yerevan, The BRUNCH is for anyone who believes that the best part of the day deserves the best table in the room.</p>
            <button className="btn btn--primary" onClick={() => scrollTo("contact")}>Come Visit Us</button>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="reviews">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Guest Reviews</span>
            <h2>What Our Guests Are Saying</h2>
            <p>Written by real guests. We share them exactly as they felt.</p>
          </div>
          <div className="reviews__grid">
            {REVIEWS.map((r, i) => (
              <div className="review-card reveal" key={r.name} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="review-card__stars">{"★".repeat(r.rating)}</div>
                <p className="review-card__text">"{r.text}"</p>
                <div className="review-card__author">
                  <div className="review-card__avatar">{r.avatar}</div>
                  <span>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-us">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why The BRUNCH</span>
            <h2>More Than a Café. An Experience.</h2>
          </div>
          <div className="why-us__grid">
            {[
              ["Fast & Attentive Service", "No long waits. Friendly faces. Staff who genuinely care."],
              ["Consistent Quality", "Every visit feels as good as the first — that's the standard."],
              ["Generous Portions", "We don't believe in tiny plates. Leave full and happy."],
              ["Premium Coffee Program", "Sourced, roasted, and brewed to barista standards."],
              ["Family Friendly", "A space where everyone — kids included — feels welcome."],
              ["Memorable Desserts", "The kind that you think about on the drive home."],
            ].map(([title, desc], i) => (
              <div className="why-card reveal" key={title} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="why-card__num">0{i + 1}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="contact" className="booking">
        <div className="container booking__layout">
          <div className="booking__info reveal">
            <span className="section-tag">Find Us</span>
            <h2>Your Next Favorite Breakfast Starts Here.</h2>
            <div className="booking__details">
              <div className="booking__detail">
                <span className="booking__detail-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Yerevan, Armenia</p>
                </div>
              </div>
              <div className="booking__detail">
                <span className="booking__detail-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Mon–Sun: 9:00 – 22:00</p>
                </div>
              </div>
              <div className="booking__detail">
                <span className="booking__detail-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+374 XX XXX XXX</p>
                </div>
              </div>
            </div>
            <div className="booking__social">
              <a className="social-btn" href="#" aria-label="Instagram">Instagram</a>
              <a className="social-btn social-btn--whatsapp" href="#" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
          <div className="booking__form-wrap reveal">
            <h3>Reserve a Table</h3>
            <div className="booking__form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Ani Petrosyan" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+374 XX XXX XXX" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Guests</label>
                  <select>
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3–4 guests</option>
                    <option>5+ guests</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Special Requests</label>
                <textarea placeholder="Dietary needs, occasions, preferences..." rows={3} />
              </div>
              <button className="btn btn--primary btn--full">
                Confirm Reservation ✦
              </button>
              <p className="form-note">We'll confirm your booking within 30 minutes by phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer__layout">
          <div className="footer__brand">
            <div className="footer__logo">
              <span>THE</span><em>BRUNCH</em>
            </div>
            <p className="footer__tagline">Made for slow mornings<br />and great conversations.</p>
          </div>
          <div className="footer__links">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
          </div>
          <div className="footer__contact">
            <p>Yerevan, Armenia</p>
            <p>+374 XX XXX XXX</p>
            <p>info@thebrunch.am</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2025 The BRUNCH · All rights reserved · Made with ☕ in Yerevan</p>
        </div>
      </footer>
    </div>
  );
}
