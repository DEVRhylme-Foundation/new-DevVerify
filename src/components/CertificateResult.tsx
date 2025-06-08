import React from 'react';
import { Github, Linkedin, Mail, Twitter, CheckCircle2 } from 'lucide-react';
import { mockCertificates } from '../Certificates';

// Utility to extract direct image link from Google Drive URL
const getDriveImageUrl = (url: string) => {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

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
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-40 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-white animate-pulse" />
          <span className="ml-2 text-white font-bold text-lg">Verified Certificate</span>
        </div>

        <div className="relative px-4 sm:px-8 pb-8">
          <div className="absolute -top-16 left-4 sm:left-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img
                src={getDriveImageUrl(certificate.photo)}
                alt={certificate.candidateName}
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = '/default-avatar.png')}
                loading="lazy"
              />
            </div>
          </div>

          <div className="pt-20 sm:pt-24">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
              {certificate.candidateName}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{certificate.collegeName }</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <InfoItem label="Certificate Type" value={certificate.certificateType} />
              {certificate.internshipType && (
    <div className="space-y-2">
      <p className="text-sm text-gray-500 dark:text-gray-400">Internship Type</p>
      <p className="font-medium text-gray-900 dark:text-gray-100">{certificate.internshipType}</p>
    </div>
  )}
              <InfoItem label="Certificate ID" value={`#${certificate.id}`} />
              <InfoItem label="Issue Date" value={certificate.issuedDate} />
              <InfoItem
                label="Internship Duration"
                value={`${certificate.internshipDuration.start} → ${certificate.internshipDuration.end}`}
              />
            </div>

            <div className="mt-6 border-t pt-4">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                Social Links
              </h2>
              <div className="flex space-x-4">
                {certificate.socials.github && <SocialLink href={certificate.socials.github} icon={Github} />}
                {certificate.socials.linkedin && <SocialLink href={certificate.socials.linkedin} icon={Linkedin} />}
                {certificate.socials.twitter && <SocialLink href={certificate.socials.twitter} icon={Twitter} />}
                {certificate.socials.email && <SocialLink href={certificate.socials.email} icon={Mail} />}
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onGoBack}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition w-full sm:w-auto"
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

// Subcomponents
const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <p className="font-medium text-gray-900 dark:text-gray-100">{value}</p>
  </div>
);

const SocialLink = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
  >
    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
  </a>
);
