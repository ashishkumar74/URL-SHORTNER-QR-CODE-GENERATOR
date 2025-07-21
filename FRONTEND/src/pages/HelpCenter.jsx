import React from 'react';

const HelpCenter = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>

      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I shorten a link?</h2>
          <p>Paste your long URL in the dashboard and click “Shorten URL.”</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Can I use custom slugs?</h2>
          <p>Yes, if you're logged in, you can define your own slug when shortening a link.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Do I need an account?</h2>
          <p>Accounts are optional. But if you want to track your links, you’ll need to log in.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
