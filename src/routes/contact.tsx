import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/contact')({head:()=>pageHead('Contact & Business Enquiries','Contact MM Thread in Kolhapur at 072184 36062 or support@mmthread.com for B2B thread requirements.'),component:ContactPage});
