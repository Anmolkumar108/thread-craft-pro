import { createFileRoute } from '@tanstack/react-router';
import { ProcessPage } from '@/components/public-pages';
import { pageHead } from '@/lib/cms';
export const Route = createFileRoute('/process')({head:()=>pageHead('Our Process','A thoughtful thread product journey from requirement and material selection to inspection and dispatch.'),component:ProcessPage});
