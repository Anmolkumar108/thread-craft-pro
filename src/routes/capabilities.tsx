import { createFileRoute } from '@tanstack/react-router';
import { CapabilitiesPage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/capabilities')({head:()=>pageHead('Our Capabilities','Explore thread selection, product development, quality control and professional B2B supply.'),component:CapabilitiesPage});
