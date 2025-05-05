import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { CertificateResult } from '../components/CertificateResult';
import { mockCertificates } from '../Certificates'; // Import mock data

function VerifyPage() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [certificateId, setCertificateId] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotFound(false);

    // Simulate API call to check certificate
    setTimeout(() => {
      const isValid = mockCertificates.some((cert) => cert.id === code);
      if (isValid) {
        setCertificateId(code);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        {certificateId ? (
          <CertificateResult
          certificateId={certificateId}
          onGoBack={() => setCertificateId(null)}
        />
        ) : (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-600 dark:text-indigo-400">
            DevVerify
          </h1>
          <p className="text-center text-gray-500 mb-4">
            Enter your certificate code to verify its authenticity.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter certificate code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </form>
          {notFound && (
            <div className="mt-4 text-red-600 text-center">
              Employee not found. Please check the certificate code.
            </div>
          )}
        </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default VerifyPage;