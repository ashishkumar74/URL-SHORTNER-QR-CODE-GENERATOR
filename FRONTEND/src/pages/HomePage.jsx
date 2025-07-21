import React from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-between">
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32">
  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
    Shorten URLs. <span className="text-blue-600">Generate QR Codes.</span><br />
  </h1>

  <p className="text-gray-600 text-lg max-w-2xl mb-6">
    Transform long links into clean, custom URLs and instant QR codes. No account needed. Perfect for social media, print, business, and more.
  </p>

  <ul className="text-gray-500 text-sm mb-8 space-y-1">
    <li>🔗 Create custom short links with your own slugs</li>
    <li>📈 Track real-time clicks, devices & location</li>
    <li>📱 Generate downloadable QR codes for each link</li>
    <li>⚡ No login required — get started in seconds</li>
  </ul>

  {isAuthenticated ? (
  <Link
    to="/dashboard"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition-all"
  >
    Get Started
  </Link>
) : (
  <Link
    to="/shorten"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition-all"
  >
    Get Started for Free
  </Link>
)}


</section>

        {/* Why Choose Us Section */}
<section className="bg-white px-6 py-16">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
  <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

    {/* Instant QR Code Generation */}
    <div className="p-6 border border-blue-100 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-tr from-blue-50 to-white">
      <div className="text-blue-600 mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v6H9V3zM3 15h6v6H3v-6zM15 15h6v6h-6v-6z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Instant QR Code Generation</h3>
      <p className="text-gray-600">Every shortened link automatically gets a downloadable QR code—perfect for flyers, packaging, and print media.</p>
    </div>

    {/* No Login Needed */}
    <div className="p-6 border border-blue-100 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-tr from-blue-50 to-white">
      <div className="text-blue-600 mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Use Without Login</h3>
      <p className="text-gray-600">Shorten links instantly—no sign-up required. Just paste, click, and share.</p>
    </div>

    {/* Smart Analytics */}
    <div className="p-6 border border-blue-100 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-tr from-blue-50 to-white">
      <div className="text-blue-600 mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Link Analytics</h3>
      <p className="text-gray-600">Get detailed stats like click count, devices, geolocation, and referrers—all visualized clearly.</p>
    </div>

    {/* Slug Availability Check */}
    <div className="p-6 border border-blue-100 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-tr from-blue-50 to-white">
      <div className="text-blue-600 mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3m9 0c0 1.657 1.343 3 3 3s3-1.343 3-3m-6 0a3 3 0 00-6 0m6 0h-6" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Slug Checker</h3>
      <p className="text-gray-600">Check if your desired custom slug is available in real-time—no trial and error.</p>
    </div>

    {/* Image Preview on Hover */}
    <div className="p-6 border border-blue-100 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-tr from-blue-50 to-white">
      <div className="text-blue-600 mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Preview Thumbnails</h3>
      <p className="text-gray-600">See a real-time thumbnail of the destination page when hovering over short links (Pro feature).</p>
    </div>

    {/* Mobile-Ready Sharing */}
    <div className="p-6 border border-blue-100 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-tr from-blue-50 to-white">
      <div className="text-blue-600 mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-8l-4-4-4 4" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Mobile-Optimized Sharing</h3>
      <p className="text-gray-600">Short URLs and QR codes are fully responsive, easy to scan and tap—even on the smallest screens.</p>
    </div>
    
  </div>
</section>
{/* FAQ Section */}
<section className="bg-gray-50 px-6 py-16">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
  <div className="max-w-4xl mx-auto space-y-10">

    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Do QR codes get generated automatically?</h3>
      <p className="text-gray-700">
        Yes! Every time you shorten a URL, a matching QR code is generated instantly. You can view it, scan it, or download it as a PNG.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Can I customize the short link or QR code?</h3>
      <p className="text-gray-700">
        If you’re logged in, you can create a custom slug for the short URL. The QR code will reflect that same unique link.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Do you offer analytics for links?</h3>
      <p className="text-gray-700">
        Yes. You can view detailed analytics including click count, location, device type, and referrer, all from your dashboard.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Can I use this without creating an account?</h3>
      <p className="text-gray-700">
        Yes. Basic link shortening and QR generation work without login. But to save and track links, you’ll need to register.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Are the links and QR codes permanent?</h3>
      <p className="text-gray-700">
        Yes, your links and QR codes stay active unless you delete them manually. There's no expiration or time limit.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">Is there an API I can use for automation?</h3>
      <p className="text-gray-700">
        Absolutely. We provide a simple API to programmatically create short links and retrieve QR codes. Contact us for access.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">How secure is my data?</h3>
      <p className="text-gray-700">
        Your data is encrypted and never shared. We follow industry best practices for protecting personal information and URLs.
      </p>
    </div>

  </div>
</section>
{/* Customer Feedback Section */}
<section className="bg-white px-6 py-16">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
  <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">

    {/* Feedback 1 */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-gray-50">
      <p className="text-gray-700 mb-4">
        “As a small business owner, I love the instant QR code feature. I stick them on every product and it just works.”
      </p>
      <div className="text-sm text-gray-500">— Priya K., E-commerce Seller</div>
    </div>

    {/* Feedback 2 */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-gray-50">
      <p className="text-gray-700 mb-4">
        “Finally, a shortener that lets me track every click and customize the link for branding. Clean UI too!”
      </p>
      <div className="text-sm text-gray-500">— Daniel H., Brand Strategist</div>
    </div>

    {/* Feedback 3 */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-gray-50">
      <p className="text-gray-700 mb-4">
        “I was blown away that I didn’t even need an account to use it. Shortened a link and got a QR code in seconds.”
      </p>
      <div className="text-sm text-gray-500">— Aliyah T., Event Organizer</div>
    </div>

    {/* Feedback 4 */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-gray-50">
      <p className="text-gray-700 mb-4">
        “Great for Instagram bios and WhatsApp links. The mobile-friendly QR codes are a game changer.”
      </p>
      <div className="text-sm text-gray-500">— Miguel S., Influencer</div>
    </div>

    {/* Feedback 5 */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-gray-50">
      <p className="text-gray-700 mb-4">
        “I use the shortener for internal tools. Being able to make secure, unlisted links has streamlined our dev workflows.”
      </p>
      <div className="text-sm text-gray-500">— Rachel Z., Full Stack Developer</div>
    </div>

    {/* Feedback 6 */}
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-gray-50">
      <p className="text-gray-700 mb-4">
        “Love the fact that my QR codes don’t expire. I printed them once for our restaurant menu, and they still work months later.”
      </p>
      <div className="text-sm text-gray-500">— Tom W., Café Owner</div>
    </div>

  </div>
</section>

      {/* Footer Section */}
        <footer className="bg-blue-600 text-white mt-16">
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
                <a href="#" aria-label="Twitter" className="hover:text-blue-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.8a4.28 4.28 0 001.32 5.71 4.23 4.23 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.2 4.27 4.27 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.11 12.11 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.76 8.76 0 0024 5.1a8.6 8.6 0 01-2.54.7z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-blue-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.62 9.87v-6.99h-2.5v-2.88h2.5V9.41c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.2 2.2.2v2.43h-1.24c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.88h-2.3v6.99A10 10 0 0022 12z"/>
                  </svg>
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-blue-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.5.12-3.12 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.62.25 2.82.12 3.12.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.67-5.49 5.97.43.38.81 1.12.81 2.26v3.35c0 .32.22.69.83.57A12 12 0 0012 0z"/>
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

// Component for feature cards
const FeatureCard = ({ title, description }) => (
  <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default HomePage;