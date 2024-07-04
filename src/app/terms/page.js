// pages/terms.js
import Head from 'next/head';

export default function TermsOfService() {
  return (
    <div className="bg-gradient-to-l from-black via-gray-700 to-black min-h-screen">
      <Head>
        <title>Terms of Service - Stumpline</title>
        <meta name="description" content="Terms of Service for Stumpline cricket live score website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Stumpline (the "Website"). By accessing and using this Website, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our Website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use of the Website</h2>
            <p className="text-gray-700">
              The content of this Website is for your general information and use only. It is subject to change without notice.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700">
              All trademarks reproduced in this Website, which are not the property of, or licensed to the operator, are acknowledged on the Website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700">
              Your use of any information or materials on this Website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this Website meet your specific requirements.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Governing Law</h2>
            <p className="text-gray-700">
              These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Changes to Terms of Service</h2>
            <p className="text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. Please check this page periodically for changes. Your continued use of the Website after any changes to these Terms of Service constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about these Terms of Service, please contact us at:
              <br />
              Email: 
              <br />
              Phone: 
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
