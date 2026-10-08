import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/gallery')({head:()=>pageHead('Textile Gallery','Explore illustrative thread, textile, manufacturing and application photography.'),component:GalleryPage});
