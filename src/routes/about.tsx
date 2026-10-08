import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/about')({head:()=>pageHead('About MM Thread','Meet your professional thread and textile solutions partner in Kolhapur, Maharashtra.'),component:AboutPage});
