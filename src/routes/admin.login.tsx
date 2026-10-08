import { createFileRoute } from '@tanstack/react-router';
import { AdminLogin } from '@/components/admin';
import { pageHead } from '@/lib/cms';
export const Route=createFileRoute('/admin/login')({head:()=>({meta:[...pageHead('Demo Admin Login','MM Thread demo website content management.').meta,{name:'robots',content:'noindex'}]}),component:AdminLogin});
