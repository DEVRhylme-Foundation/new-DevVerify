
import { Github, Linkedin, Mail, Twitter, CheckCircle2 } from 'lucide-react';
import { mockCertificates } from '../Certificates'; // Import mock data

export function CertificateResult({
    certificateId,
    onGoBack,
  }: {
    certificateId: string;
    onGoBack: () => void;
  }) {
    const certificate = mockCertificates.find((cert) => cert.id === certificateId);
  
    if (!certificate) {
      return (
        <div className="flex flex-col items-center justify-center p-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
            <p className="text-red-700">Certificate not found. Please try again.</p>
            <button
              onClick={onGoBack}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      );
    }
  
    return (
      <div className="w-full max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-40 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400">
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-white animate-pulse" />
              <span className="ml-2 text-white font-bold text-lg">Verified Certificate</span>
            </div>
          </div>
          <div className="relative px-8 pb-8">
            <div className="absolute -top-16 left-8">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src={certificate.photo || 'https://via.placeholder.com/150'}
                  alt={certificate.candidateName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-20 mt-4">
              <h1 className="text-2xl font-bold text-gray-900">{certificate.candidateName}</h1>
              <p className="text-gray-500">{certificate.collegeName}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-sm text-gray-500">Certificate Type</p>
                  <p className="font-medium text-gray-900">{certificate.certificateType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Certificate ID</p>
                  <p className="font-medium text-gray-900">#{certificate.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Issue Date</p>
                  <p className="font-medium text-gray-900">{certificate.issuedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Internship Duration</p>
                  <p className="font-medium text-gray-900">
                    {certificate.internshipDuration.start} → {certificate.internshipDuration.end}
                  </p>
                </div>
              </div>
              {/* Step 3: Add Social Links Section */}
<div className="mt-6 border-t pt-4">
  <h2 className="text-sm font-medium text-gray-500 mb-4">Social Links</h2>
  <div className="flex space-x-4">
    {certificate.socials.github && (
      <a
        href={certificate.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      >
        <Github className="w-5 h-5 text-gray-600" />
      </a>
    )}
    {certificate.socials.linkedin && (
      <a
        href={certificate.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      >
        <Linkedin className="w-5 h-5 text-gray-600" />
      </a>
    )}
    {certificate.socials.twitter && (
      <a
        href={certificate.socials.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      >
        <Twitter className="w-5 h-5 text-gray-600" />
      </a>
    )}
    {certificate.socials.email && (
      <a
        href={certificate.socials.email}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      >
        <Mail className="w-5 h-5 text-gray-600" />
      </a>
    )}
  </div>
</div>
              <div className="mt-6">
                <button
                  onClick={onGoBack}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }