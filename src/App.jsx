import React, { useState } from 'react'
import { Menu, X, Phone, MessageCircle, MapPin, Footprints, ShoppingBag, Wrench, Layers, Store, Luggage, Briefcase, Backpack, Scissors, Gem } from 'lucide-react'
import shopSign from './assets/oms-bags-footwear-shop-sign-santhosapuram.webp'
import shelves from './assets/shoe-shelves-bags-footwear-santhosapuram.webp'
import { BUSINESS as B, FOOTWEAR, BAGS, REPAIRS, MORE } from './config.js'

const NAV = [['Home', '#home'], ['Footwear', '#footwear'], ['Bags', '#bags'], ['Repair Services', '#repair'], ['About Us', '#about'], ['Contact', '#contact']]
const Btn = ({ href, kind = 'primary', children, ...p }) => <a className={`btn ${kind}`} href={href} {...p}>{children}</a>

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a className="brand" href="#home" aria-label={`${B.name} home`}><span className="mark">OMS</span><span>Bags &amp; Footwear</span></a>
      <nav className={open ? 'links open' : 'links'} aria-label="Main">
        {NAV.map(([n, h]) => <a key={n} href={h} onClick={() => setOpen(false)}>{n}</a>)}
        <Btn href="#contact" onClick={() => setOpen(false)}>Contact Us</Btn>
      </nav>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Step Into Style. Carry Your World.</h1>
        <p>Discover everyday footwear, stylish bags and dependable repair services – all under one roof at O.M.S Bags &amp; Footwear.</p>
        <div className="row"><Btn href="#footwear">Explore Our Collection</Btn><Btn href="#contact" kind="ghost">Contact Our Shop</Btn></div>
        <p className="small">Bags shop and footwear shop in Santhosapuram, Tambaram.</p>
      </div>
      <figure className="hero-photo"><img src={shopSign} width="1000" height="450" fetchpriority="high" alt="O.M.S Bags & Footwear shop signboard on Vengaivasal Main Road, Santhosapuram, Tambaram" /></figure>
      </section>
  )
}

const Cat = ({ icon: I, t, d, h }) => <a className="cat" href={h}><I size={40} /><h3>{t}</h3><p>{d}</p></a>
const Card = ({ icon: I, t, d, tone, img }) => <article className={`card ${tone}`}><div className="ph">{img ? <img src={img} alt={`${t} at O.M.S Bags & Footwear, Tambaram`} loading="lazy" /> : <I size={44} />}</div><h3>{t}</h3><p>{d}</p></article>

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="sec">
          <h2>Shop by Category</h2>
          <div className="grid3">
            <Cat icon={Footprints} h="#footwear" t="Footwear" d="Everyday and formal footwear for different occasions." />
            <Cat icon={ShoppingBag} h="#bags" t="Bags" d="Explore school bags, travel bags and everyday carrying essentials." />
            <Cat icon={Wrench} h="#repair" t="Repair Services" d="Dependable repair and maintenance support for bags and luggage." />
          </div>
        </section>
        <section id="footwear" className="sec cream">
          <h2>Footwear Collection</h2><p className="lead">Footwear shop in Tambaram for every day, every occasion.</p>
          <div className="grid3">{FOOTWEAR.map(x => <Card key={x.t} icon={Footprints} tone="blue" {...x} />)}</div>
        <h3 className="sub">More From Our Shelves</h3>
          <div className="grid4 more">{MORE.map(m => <figure key={m.t}><div className="ph"><img src={m.img} alt={m.alt} loading="lazy" /></div><figcaption>{m.t}</figcaption></figure>)}</div>
        </section>
        <section id="bags" className="sec">
          <h2>Bags Collection</h2><p className="lead">School bags and travel bags in Tambaram, plus everyday carriers.</p>
          <div className="grid4">{BAGS.map((x, i) => <Card key={x.t} icon={[Backpack, Luggage, Briefcase, ShoppingBag][i]} tone="orange" {...x} />)}</div>
        </section>
        <section id="repair" className="sec navy">
          <h2>Give Your Bags a Second Life.</h2>
          <p className="lead">From everyday bags to travel luggage, get repair and maintenance assistance for your bags and related leather or fabric items.</p>
          <ul className="grid3 plain">{REPAIRS.map((r, i) => <li key={r}>{React.createElement([Scissors, Luggage, Gem][i], { size: 30 })}<span>{r}</span></li>)}</ul>
          <Btn href={`${B.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about repairs.')}`} target="_blank" rel="noopener noreferrer">Enquire About Repairs</Btn>
        </section>
        <section className="sec">
          <h2>Why Choose Us?</h2>
          <div className="grid4">
            {[[Layers, 'Multiple Product Categories'], [Footprints, 'Footwear and Bag Solutions'], [Wrench, 'Bag and Luggage Repair Services'], [Store, 'Convenient Local Shop']].map(([I, t]) => <div className="why" key={t}><I size={32} /><h3>{t}</h3></div>)}
          </div>
        </section>
        <section id="tour" className="sec">
          <h2>Inside Our Shop</h2><p className="lead">Take a look around our Santhosapuram, Tambaram store.</p>
          <div className="tour">
            <video controls playsInline preload="none" poster="/shop-tour-poster.jpg" width="640" height="360" aria-label="Video tour of O.M.S Bags & Footwear shop"><source src="/shop-tour-video.mp4" type="video/mp4" />Your browser does not support video playback.</video>
          </div>
        </section>
        <section id="about" className="sec cream about">
          <img className="about-photo" src={shelves} width="900" height="405" loading="lazy" alt="Shelves stacked with footwear boxes at O.M.S Bags & Footwear, Santhosapuram, Tambaram" />
          <div><h2>Your Local Destination for Bags &amp; Footwear.</h2>
            <p>O.M.S Bags &amp; Footwear serves customers in the Santhosapuram and surrounding Tambaram areas with footwear, bags and repair-related services.</p></div>
        </section>
        <section id="contact" className="sec">
          <h2>Contact and Location</h2>
          <div className="contact">
            <div className="ccard glass">
              <h3>{B.name}</h3>
              <address><MapPin size={18} /> {B.address.map(l => <span key={l}>{l}<br /></span>)}</address>
              <p><Phone size={18} /> <a href={B.tel}>{B.phoneDisplay}</a></p>
              <div className="row"><Btn href={B.tel}><Phone size={18} />Call Now</Btn>
                <Btn href={B.whatsapp} target="_blank" rel="noopener noreferrer" kind="wa"><MessageCircle size={18} />WhatsApp</Btn>
                <Btn href={B.directions} target="_blank" rel="noopener noreferrer" kind="ghostd"><MapPin size={18} />Directions</Btn></div>
            </div>
            <iframe title="Map: O.M.S Bags & Footwear, Santhosapuram, Tambaram" src={B.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
      </main>
      <footer className="foot">
        <div><strong>{B.name}</strong><p>Bags, footwear and repair services in Santhosapuram, Tambaram.</p></div>
        <div><strong>Quick links</strong>{NAV.map(([n, h]) => <a key={n} href={h}>{n}</a>)}</div>
        <div><strong>Services</strong><span>Footwear</span><span>Bags</span><span>Bag &amp; luggage repair</span></div>
        <div><strong>Visit</strong><span>{B.address.join(' ')}</span><a href={B.tel}>{B.phoneDisplay}</a><a href={B.whatsapp}>WhatsApp</a><a href={B.directions}>Directions</a></div>
        <p className="copy">© {new Date().getFullYear()} {B.name}. All rights reserved.</p>
      </footer>
    </>
  )
}
