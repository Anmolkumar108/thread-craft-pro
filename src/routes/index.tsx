import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/')({head:()=>pageHead('Premium Thread & Textile Solutions','MM Thread provides quality-focused thread and textile solutions for garment, apparel and B2B manufacturing requirements in Kolhapur, Maharashtra.'),component:HomePage});
