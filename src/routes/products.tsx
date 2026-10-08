import { createFileRoute } from '@tanstack/react-router';
import { ProductsPage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/products')({head:()=>pageHead('Thread Products','Explore our illustrative B2B thread catalogue, applications and custom thread solutions.'),component:ProductsPage});
