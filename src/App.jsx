import { useState, useEffect } from "react";
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
  { category: "Breakfast", emoji: "🍳", items: [
    { name: "English Breakfast", desc: "Toast, mixed salad, village potatoes, tomato, sausage, bacon, feta cheese and 2 eggs of your choice", price: "3,700" },
    { name: "The Brunch Bowl", desc: "Boiled egg, sautéed spinach, avocado, ricotta, cherry tomatoes and quinoa", price: "3,900" },
    { name: "Breakfast with Smoked Salmon", desc: "Smoked salmon, guacamole, omelette, salad and crusty bread", price: "4,400" },
    { name: "Oatmeal Brûlée", desc: "Oatmeal, milk, berries, stracciatella — the perfect slow morning", price: "2,300" },
    { name: "Porridge with Berries & Meringue", desc: "Warm porridge with seasonal berries and house meringue", price: "2,400" },
    { name: "Cottage Cheese Balls", desc: "Classic syrniki with berry jam and sour cream", price: "3,100" },
  ]},
  { category: "Pizza", emoji: "🍕", items: [
    { name: "Margharita", desc: "Classic tomato base, fresh mozzarella, basil", price: "3,500" },
    { name: "Pepperoni", desc: "Spicy pepperoni, tomato sauce, mozzarella", price: "3,900" },
    { name: "Ham & Mushroom", desc: "Ham, mushrooms, mozzarella, tomato base", price: "3,600" },
    { name: "Spinach Feta", desc: "Spinach, feta cheese, white sauce, walnuts", price: "3,900" },
    { name: "Prosciutto & Arugula", desc: "Prosciutto, fresh arugula, parmesan, tomato base", price: "5,800" },
    { name: "Signature Quattro Formaggi", desc: "Four-cheese blend on a golden crispy base", price: "4,800" },
  ]},
  { category: "Salads", emoji: "🥗", items: [
    { name: "Burrata & Avocado", desc: "Burrata, avocado, cherry tomatoes, spinach pesto, basil", price: "5,900" },
    { name: "Caesar with Chicken", desc: "Classic caesar, grilled chicken breast", price: "3,500" },
    { name: "Barbados Salad", desc: "Marble beef, marinated onion, bell pepper, avocado, mix salad, ranch sauce", price: "4,800" },
    { name: "Salmon & Quinoa", desc: "Salmon and quinoa salad", price: "4,900" },
    { name: "Detox Salad", desc: "Green apple, quinoa, mix salad, avocado", price: "3,200" },
    { name: "Ranch with Shrimps & Bacon", desc: "Ranch dressing, shrimps, bacon and sweet corn", price: "4,400" },
  ]},
  { category: "Main Courses", emoji: "🥩", items: [
    { name: "Ribeye Steak", desc: "Premium cut ribeye steak", price: "16,900" },
    { name: "Fillet Mignon", desc: "Tender fillet mignon with mashed potatoes and truffle sauce", price: "9,600" },
    { name: "Sous Vide Chicken", desc: "Chicken breast with creamy spinach, cashew nuts and basil oil", price: "3,800" },
    { name: "Grilled Salmon with Asparagus", desc: "Salmon fillet grilled, served with fresh asparagus", price: "10,600" },
    { name: "Texas Leg", desc: "Chicken thigh, BBQ sauce, village-style potatoes", price: "3,800" },
    { name: "Seafood Fried Rice", desc: "Rice with mussels, shrimps, seafood", price: "5,500" },
  ]},
  { category: "Sandwiches", emoji: "🥪", items: [
    { name: "Steak Sandwich", desc: "Beef tenderloin, caramelized onions, gouda, tomatoes, mixed salad", price: "5,600" },
    { name: "Philly Cheese Sandwich", desc: "Beef, mushrooms, onions, mozzarella, caramelized onions, baguette", price: "5,400" },
    { name: "Open Sandwich — Salmon & Avocado", desc: "Salmon, avocado, spinach, creamy cheese and basil oil", price: "4,500" },
    { name: "Beef Burger", desc: "Beef burger with village potatoes", price: "3,900" },
    { name: "Chicken Burger", desc: "Chicken burger with french fries", price: "3,600" },
    { name: "Croissant — Smoked Salmon & Avocado", desc: "Buttery croissant filled with smoked salmon and avocado", price: "4,600" },
  ]},
  { category: "Snacks", emoji: "🍤", items: [
    { name: "Bruschetta with Prawns & Guacamole", desc: "Prawns, guacamole and cherry tomatoes on crispy bread", price: "4,600" },
    { name: "Feta in Forno", desc: "Baked feta with cherry tomatoes", price: "2,900" },
    { name: "Mozzarella Sticks", desc: "Golden mozzarella sticks with ranch sauce", price: "2,500" },
    { name: "Shrimp Tempura", desc: "Crispy shrimp tempura with sweet-chili sauce", price: "3,900" },
    { name: "Chicken Yakitori", desc: "Chicken breast, peanut sauce, sesame seeds and rice", price: "3,500" },
    { name: "Spring Roll with Vegetables", desc: "Fresh spring rolls with vegetables", price: "2,900" },
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
          <img src="/logo.jpg" alt="The Brunch Cafe & Kitchen" className="nav__logo-img" />
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
              { label: "Happy Guests", size: "tall", color: "#C8A882" },
              { label: "Desserts", size: "normal", color: "#D4A96A" },
              { label: "Pizza", size: "normal", color: "#B07D5A" },
              { label: "Interior", size: "tall", color: "#9E8060" },
              { label: "Coffee Art", size: "normal", color: "#C4956A" },
              { label: "Breakfast Plates", size: "normal", color: "#A07850" },
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
          <div className="menu-items" key={activeMenu}>
            {MENU_ITEMS[activeMenu].items.map((item, i) => (
              <div className="menu-item menu-item--animate" key={item.name} style={{ animationDelay: `${i * 0.07}s` }}>
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
              Reserve a Table
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

      {/* ── CONTACT / VISIT US ── */}
      <section id="contact" className="visit">
        <div className="container">
          <div className="visit__layout">

            {/* Left — info */}
            <div className="visit__info reveal">
              <span className="section-tag">Come Find Us</span>
              <h2>A Table Is Waiting<br /><em>Just for You.</em></h2>
              <p className="visit__desc">
                Whether it's a slow solo morning, a family gathering, or a date — 
                The BRUNCH has a seat with your name on it.
              </p>

              <div className="visit__details">
                <div className="visit__detail">
                  <div className="visit__detail-icon">📍</div>
                  <div>
                    <strong>Location</strong>
                    <p>Yerevan, Armenia</p>
                  </div>
                </div>
                <div className="visit__detail">
                  <div className="visit__detail-icon">🕐</div>
                  <div>
                    <strong>Hours</strong>
                    <p>Mon – Sun: 10:00 – 22:00</p>
                    <p className="visit__hours-note">Breakfast served until 16:00</p>
                  </div>
                </div>
                <div className="visit__detail">
                  <div className="visit__detail-icon">📞</div>
                  <div>
                    <strong>Reservations</strong>
                    <p>+374 XX XXX XXX</p>
                  </div>
                </div>
              </div>

              <div className="visit__actions">
                <a className="btn btn--primary" href="tel:+374XXXXXXXX">Call to Reserve</a>
                <a className="btn btn--whatsapp" href="https://wa.me/374XXXXXXXX" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right — visual card */}
            <div className="visit__card reveal">
              <div className="visit__card-inner">
                <div className="visit__card-logo">
                  <img src="/logo.jpg" alt="The Brunch" />
                </div>
                <div className="visit__card-tag">Café & Kitchen</div>
                <blockquote className="visit__card-quote">
                  "Made for slow mornings and great conversations."
                </blockquote>
                <div className="visit__card-divider" />
                <div className="visit__card-stats">
                  <div>
                    <span className="visit__card-stat-num">200+</span>
                    <span className="visit__card-stat-label">Happy Guests</span>
                  </div>
                  <div>
                    <span className="visit__card-stat-num">4.5★</span>
                    <span className="visit__card-stat-label">Google Rating</span>
                  </div>
                  <div>
                    <span className="visit__card-stat-num">6+</span>
                    <span className="visit__card-stat-label">Menu Sections</span>
                  </div>
                </div>
                <button className="visit__card-cta" onClick={() => window.location.href = 'tel:+374XXXXXXXX'}>
                  Make a Reservation ✦
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer__layout">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.jpg" alt="The Brunch" className="footer__logo-img" />
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
            <p>Mon–Sun: 10:00 – 22:00</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2025 The BRUNCH Café & Kitchen · All rights reserved · Made with ☕ in Yerevan</p>
        </div>
      </footer>
    </div>
  );
}
