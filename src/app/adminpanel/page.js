// src/app/adminpanel/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase';
import Dashboard from '../components/dashboard';

export default function AdminPanel() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/Login');
    } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if(loading) return <div>Loading Page...</div>

  return (
    <div>
      <Dashboard/>
    </div>
  );
}
