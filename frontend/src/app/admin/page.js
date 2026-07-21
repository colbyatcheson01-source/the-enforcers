'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/admin/dashboard');
    } else {
      router.push('/admin/login');
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-neutral-600">Redirecting...</div>
    </div>
  );
}
