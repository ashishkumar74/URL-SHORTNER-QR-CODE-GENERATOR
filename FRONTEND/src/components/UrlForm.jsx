import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import { createShortUrl } from '../api/shortUrl.api';
import { useSelector } from 'react-redux';
import { queryClient } from '../main';
import { Link } from '@tanstack/react-router';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [customSlug, setCustomSlug] = useState('');
  const [limitReached, setLimitReached] = useState(false);
  const qrRef = useRef();
  const inputRef = useRef();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      const count = parseInt(localStorage.getItem('freeAttempts') || '0');
      if (count >= 2) setLimitReached(true);
    }
    if (inputRef.current && !limitReached) {
      inputRef.current.focus();
    }
  }, [isAuthenticated, limitReached]);

  const handleSubmit = async () => {
    setError(null);

    if (!url.trim() || !url.startsWith('http')) {
      return setError('Please enter a valid URL including http:// or https://');
    }

    try {
      if (!isAuthenticated) {
        const count = parseInt(localStorage.getItem('freeAttempts') || '0');
        if (count >= 2) {
          setLimitReached(true);
          return;
        }
        localStorage.setItem('freeAttempts', (count + 1).toString());
      }

      const result = await createShortUrl(url, customSlug);
      if (typeof result === 'string') {
        setShortUrl(result);
        queryClient.invalidateQueries({ queryKey: ['userUrls'] });
      } else {
        throw new Error('Invalid short URL returned from server.');
      }
    } catch (err) {
      setError(err.message || 'Failed to shorten URL');
    }
  };

  const handleCopy = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = async () => {
    if (!qrRef.current) return;
    await new Promise((r) => setTimeout(r, 100));

    try {
      const dataUrl = await toPng(qrRef.current);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'qr-code.png';
      link.click();
    } catch (err) {
      console.error('QR Code download failed:', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Limit Reached */}
      {limitReached && !isAuthenticated ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded">
          <p className="mb-2 font-semibold">🔒 Free Usage Limit Reached</p>
          <p className="text-sm">
            You’ve used your 2 free URL shortenings. Please{' '}
            <Link to="/auth?mode=register" className="underline text-blue-700 font-medium">
              register an account
            </Link>{' '}
            to continue and unlock full tracking features & custom slugs.
          </p>
        </div>
      ) : (
        <>
          {/* URL Input */}
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your URL
            </label>
            <input
              ref={inputRef}
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </div>

          {/* Custom Slug Input */}
          {isAuthenticated && (
            <div>
              <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">
                Custom Slug (optional)
              </label>
              <input
                type="text"
                id="customSlug"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
                placeholder="e.g. my-custom-link"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Shorten Button */}
          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Shorten URL
          </button>

          {/* Error */}
          {error && (
            <div className="mt-2 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Output */}
          {shortUrl && (
            <div className="mt-6 space-y-6">
              {/* Shortened URL */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Your Shortened URL:</h2>
                <div className="flex items-center">
                  <input
                    type="text"
                    readOnly
                    value={shortUrl}
                    className="flex-1 p-2 border rounded-l-md bg-gray-50"
                  />
                  <button
                    onClick={handleCopy}
                    className={`px-4 py-2 rounded-r-md transition ${
                      copied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Centered QR Code and Download Button */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div
                  ref={qrRef}
                  className="p-4 bg-white border rounded-xl shadow transition-opacity duration-300"
                >
                  <QRCode
                    value={shortUrl}
                    size={160}
                    bgColor="#ffffff"
                    fgColor="#1e40af"
                    level="Q"
                  />
                </div>
                <button
                  onClick={handleDownloadQR}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Download QR Code (PNG)
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UrlForm;
