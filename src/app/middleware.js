// src/middleware.js
import { NextResponse } from 'next/server';
import { verifyIdToken } from 'firebase-admin/auth';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import serviceAccount from './path/to/serviceAccountKey.json'; // Path to your service account key JSON

// Initialize Firebase Admin SDK
const app = initializeApp({
  credential: cert(serviceAccount),
});

export async function middleware(req) {
  const token = req.cookies.get('authToken');
  if (!token) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }

  try {
    await verifyIdToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }
}

export const config = {
  matcher: ['/adminpanel'],
};
