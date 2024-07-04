// pages/refund-policy.js
import Head from 'next/head';

export default function RefundPolicy() {
  return (
    <div className="bg-gradient-to-l from-black via-gray-700 to-black min-h-screen">
      <Head>
        <title>Refund Policy - Stumpline</title>
        <meta name="description" content="Refund Policy for Stumpline cricket live score website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Refund Policy</h1>

          <section className="mb-6">
            <p className="text-gray-700">
              We currently do not offer refunds for any services provided on our cricket live score website, Stumpline.
              As our website provides live score updates and information, we do not sell products or services that require refundable transactions.
              Please contact us if you have any questions or concerns regarding the use of our website or the information provided on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Refund Policy, please contact us at:
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
