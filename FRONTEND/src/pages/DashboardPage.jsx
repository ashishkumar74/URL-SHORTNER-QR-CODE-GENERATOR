import React from 'react';
import UrlForm from '../components/UrlForm';
import UserUrl from '../components/UserUrl';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-24 px-4">
      {/* Main Content */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
        <UserUrl />
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white w-full mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">🔗 URL Shortener & QR Code Generator</h2>
            <p className="text-sm text-blue-100">
              Simple. Fast. Customizable. Your trusted tool to share smarter, shorter links and generate QR codes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
              <li><a href="/auth" className="hover:underline">Login / Register</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="/help" className="hover:underline">Help Center</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="hover:text-blue-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.8a4.28 4.28 0 001.32 5.71 4.23 4.23 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.2 4.27 4.27 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.11 12.11 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.76 8.76 0 0024 5.1a8.6 8.6 0 01-2.54.7z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:text-blue-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.62 9.87v-6.99h-2.5v-2.88h2.5V9.41c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.2 2.2.2v2.43h-1.24c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.88h-2.3v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" aria-label="GitHub" className="hover:text-blue-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.5.12-3.12 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.62.25 2.82.12 3.12.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.67-5.49 5.97.43.38.81 1.12.81 2.26v3.35c0 .32.22.69.83.57A12 12 0 0012 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500 text-center py-4 text-sm text-blue-200">
          &copy; {new Date().getFullYear()} URL Shortener & QR Code Generator. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
