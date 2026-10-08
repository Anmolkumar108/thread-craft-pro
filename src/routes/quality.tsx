import { createFileRoute } from '@tanstack/react-router';
import { QualityPage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/quality')({head:()=>pageHead('Quality Assurance','A quality-focused approach to thread consistency, material inspection and finishing.'),component:QualityPage});
