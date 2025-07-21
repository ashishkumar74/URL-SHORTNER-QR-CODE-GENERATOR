import React from 'react';
import UrlForm from '../components/UrlForm'; // your component with 2-attempts logic

const ShortenPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ✂️ Shorten Your Link — Try It Free
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            You get <strong>2 free shortens</strong> without an account. After that, registration is required.
          </p>

          {/* URL Form Component (already has limit logic) */}
          <UrlForm />
        </div>
      </div>
    </div>
  );
};

export default ShortenPage;
