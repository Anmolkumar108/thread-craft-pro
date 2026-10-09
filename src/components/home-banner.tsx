import { Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { photo, useCms } from '@/lib/cms';
import homeVideo from '@/assets/home-video.mp4.asset.json';
import { Button, Icon, Picture } from './controls';

export function HomeBanner() {
  const { data } = useCms();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStart = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const slides = [
    { video: homeVideo.url, image: data.hero.image, alt: 'Industrial thread and textile manufacturing in motion — illustrative footage, not a verified MM Thread facility', label: 'Textile manufacturing in motion' },
    { image: photo('manufacturing',1), alt: 'Weaving looms producing broad fabric sheets — illustrative textile manufacturing', label: 'Textile weaving' },
    { image: photo('manufacturing',2), alt: 'Garment workshop with fabric cutting and industrial sewing — illustrative textile production', label: 'Textile and apparel production' },
  ];
  function move(direction: number) { setActive(current => (current + direction + slides.length) % slides.length); }
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || data.hero.visible === 'false') return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(current => (current + 1) % 3);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, active, data.hero.visible]);
  if (data.hero.visible === 'false') return null;
  return <section className="hero" aria-label="MM Thread banner slideshow" aria-roledescription="carousel"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onTouchStart={event => { touchStart.current = event.touches[0]?.clientX ?? null; }}
    onTouchEnd={event => { const end = event.changedTouches[0]?.clientX; if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 50) move(end < touchStart.current ? 1 : -1); touchStart.current = null; }}>
    <div className="hero-slides">{slides.map((slide, index) => <div key={index} className={`hero-slide ${active === index ? 'is-active' : ''}`} aria-hidden={active !== index} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}><Picture src={slide.image} alt={slide.alt} eager/></div>)}</div>
    <div className="container hero-content reveal">
      <div className="eyebrow">Thread & Textile Solutions · Kolhapur, India</div>
      <h1>{data.hero.title}</h1>
      <div className="hero-subtitle">{data.hero.subtitle === 'Precision in Every Thread' ? <>Precision in Every <span>Thread.</span></> : data.hero.subtitle}</div>
      <p>{data.hero.description}</p>
      <div className="hero-actions"><Link to="/products" className="btn btn-primary">{data.hero.primaryCta}<Icon name="arrow"/></Link><Link to="/contact" className="btn btn-outline">{data.hero.secondaryCta}<Icon name="arrow"/></Link></div>
    </div>
    <div className="container hero-bottom">
      <a href="#our-story" className="scroll-label"><span className="scroll-line"/>Scroll to discover</a>
      <div className="banner-controls">
        <div className="banner-caption"><span>{slides[active]?.label}</span><span className="banner-count">0{active + 1} / 0{slides.length}</span></div>
        <Button variant="outline" className="banner-arrow banner-prev" aria-label="Previous slide" onClick={() => move(-1)}><Icon name="chevron"/></Button>
        <div className="banner-dots">{slides.map((slide, index) => <Button key={slide.label} variant="text" className={`banner-dot ${active === index ? 'is-active' : ''}`} aria-label={`Go to slide ${index + 1}`} aria-pressed={active === index} onClick={() => setActive(index)}><span/></Button>)}</div>
        <Button variant="outline" className="banner-arrow" aria-label="Next slide" onClick={() => move(1)}><Icon name="chevron"/></Button>
        <Button variant="outline" className="banner-arrow" aria-label={paused || reducedMotion ? 'Play slideshow' : 'Pause slideshow'} onClick={() => { if (paused || reducedMotion) { setReducedMotion(false); setPaused(false); } else setPaused(true); }}>{paused || reducedMotion ? '▶' : 'Ⅱ'}</Button>
      </div>
    </div>
  </section>;
}