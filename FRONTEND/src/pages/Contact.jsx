{/* Contact Us Page */}
const Contact = () => {
  return (
<div className="max-w-2xl mx-auto px-6 py-16">
  <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
  <p className="text-gray-700 mb-6">
    Have questions, suggestions, or need help? We’d love to hear from you.
  </p>

  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-800">Your Name</label>
      <input
        type="text"
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
        placeholder="John Doe"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-800">Email Address</label>
      <input
        type="email"
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
        placeholder="you@example.com"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-800">Message</label>
      <textarea
        className="w-full border border-gray-300 px-4 py-2 rounded-md"
        rows="5"
        placeholder="How can we help you?"
      ></textarea>
    </div>
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
</div>
  );
};

export default Contact;