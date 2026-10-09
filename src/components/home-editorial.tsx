import { Link } from '@tanstack/react-router';
import { useCms, photo } from '@/lib/cms';
import { Icon, Picture } from './controls';

export function CollectionNavigation() {
  const { data } = useCms();
  const categories = data.categories.filter(item => item.visible).sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
  if (!categories.length) return null;
  return <section className="collection-navigation" aria-label="Thread collections"><div className="container collection-navigation-inner">
    <Link to="/products" className="collection-heading"><span className="tag">Our collections</span><span>Find your thread <Icon name="arrow"/></span></Link>
    <div className="collection-links">{categories.map(category => <Link key={category.id} to="/products" search={{category:category.title}}>{category.title}<Icon name="chevron"/></Link>)}</div>
  </div></section>;
}

export function PartnershipSection() {
  const { data } = useCms();
  const pillars = [
    ['Consistent Quality', data.about.consistentQuality],
    ['Reliable Supply', data.about.reliableSupply],
    ['B2B Focus', data.about.b2bFocus],
    ['Customer Support', data.about.customerSupport],
  ];
  return <section className="section partnership-section"><div className="container partnership-layout">
    <div className="partnership-intro"><div className="eyebrow">Why MM Thread</div><h2>A Partner for Your Next Production Run.</h2><Picture src={photo('manufacturing',2)} alt="Garment cutting and sewing — illustrative textile production, not a verified MM Thread facility"/><Link to="/contact" className="btn btn-text">Discuss Your Requirements<Icon name="arrow"/></Link></div>
    <div className="partnership-pillars">{pillars.map(([title, description], index) => <article key={title}><span className="partnership-number">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}<Link to="/about" className="btn btn-text">Discover Our Approach<Icon name="arrow"/></Link></div>
  </div></section>;
}