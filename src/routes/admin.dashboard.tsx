import { createFileRoute } from '@tanstack/react-router';
import { AdminDashboard } from '@/components/admin';
import { pageHead } from '@/lib/cms';
export const Route=createFileRoute('/admin/dashboard')({head:()=>({meta:[...pageHead('Demo Admin Dashboard','MM Thread demo website content management.').meta,{name:'robots',content:'noindex'}]}),component:AdminDashboard});
