{/* Privacy Policy Page */}
const PrivacyPolicy = () => {
  return (
<div className="max-w-3xl mx-auto px-6 py-16">
  <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

  <p className="text-gray-700 mb-4">
    We take your privacy seriously. This policy outlines how we collect, use, and protect your information.
  </p>

  <div className="space-y-6 text-gray-700 text-sm">
    <div>
      <h2 className="text-xl font-semibold mb-2">What We Collect</h2>
      <p>We collect your email, shortened URLs, and analytics data such as click count and IP location for internal use only.</p>
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-2">How We Use It</h2>
      <p>Your data helps us deliver core features (like link analytics) and improve performance. We do not sell your data to third parties.</p>
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-2">Cookies</h2>
      <p>We use cookies to manage sessions and provide a smoother experience. You can disable them in your browser settings.</p>
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
      <p>You may request to delete your account and associated data at any time by contacting us.</p>
    </div>
  </div>
</div>
  );
};

export default PrivacyPolicy;