// pages/privacy.js
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-l from-black via-gray-700 to-black min-h-screen">
      <Head>
        <title>Privacy Policy - Stumpline</title>
        <meta name="description" content="Privacy Policy for Stumpline cricket live score website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Stumpline (the "Website"). Stumpline is committed to protecting your privacy and ensuring
              you have a positive experience on our website. This Privacy Policy outlines our practices regarding
              the collection and use of your personal information when you use our website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700">
              We collect various types of information when you visit our website, including:
              <ul className="list-disc list-inside">
                <li>Personal information such as your name, email address, and phone number when you subscribe to our newsletter.</li>
                <li>Usage information such as your IP address, browser type, and operating system when you browse our website.</li>
                <li>Cookies and similar technologies to enhance your experience and analyze usage patterns.</li>
              </ul>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the information we collect for various purposes, including:
              <ul className="list-disc list-inside">
                <li>Providing and personalizing our services to improve your experience.</li>
                <li>Communicating with you, including sending newsletters and promotional offers.</li>
                <li>Analyzing and improving our website's performance and functionality.</li>
              </ul>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700">
              We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this Privacy Policy or as required by law.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Security of Your Information</h2>
            <p className="text-gray-700">
              We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
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
