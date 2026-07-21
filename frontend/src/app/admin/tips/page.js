'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, clearAuth, apiRequest } from '@/lib/auth';

export default function AdminTipsPage() {
  const router = useRouter();
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin/login');
      return;
    }
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const data = await apiRequest('/tips');
      setTips(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-neutral-600">Loading tips...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white shadow-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <h1 className="font-semibold text-primary-900">Anonymous Tips</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="/admin/dashboard" className="text-sm text-neutral-600 hover:text-primary-500">Dashboard</a>
            <a href="/admin/volunteers" className="text-sm text-neutral-600 hover:text-primary-500">Volunteers</a>
            <button onClick={() => { clearAuth(); router.push('/admin/login'); }} className="text-sm text-red-600 hover:text-red-700">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-neutral-500 mb-6">
          These tips are submitted anonymously. No identifying information is collected with submissions. Review privately and take appropriate action.
        </p>

        {tips.length === 0 ? (
          <div className="text-center py-12 text-neutral-500">
            <p className="text-lg">No tips received yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-neutral-400">
                    {new Date(tip.createdAt).toLocaleString('en-CA')}
                  </span>
                  {tip.category && (
                    <span className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded text-xs font-medium">
                      {tip.category.replace(/_/g, ' ')}
                    </span>
                  )}
                </div>
                <p className="text-neutral-800 whitespace-pre-wrap text-sm leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
