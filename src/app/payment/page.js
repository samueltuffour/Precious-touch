"use client";

import { useState } from 'react';

export default function PaymentPage() {
  const [copied, setCopied] = useState(false);
  
  const zelleEmail = "+1 929 930 8805 (Precious Arthur)";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(zelleEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Precious Touch</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-2">
              Appointment Booked! 🎉
            </h2>
            <p className="text-gray-600">
              Thank you for booking with Precious Touch
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mb-6">
            <p className="text-gray-700 font-medium mb-2">
              📋 Next Step: Complete Your Deposit Payment
            </p>
            <p className="text-gray-600 text-sm">
              A $15 deposit is required to secure your appointment. Please complete payment using Zelle below.
            </p>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-6 text-center">
            Complete Your $15 Deposit
          </h3>

          {/* Zelle Info */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white rounded-lg p-3 shadow-md">
                <span className="text-4xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  Zelle
                </span>
              </div>
            </div>
            
            <div className="text-center mb-4">
              <p className="text-gray-700 font-medium mb-2">Send $15 to:</p>
              <div className="bg-white rounded-lg p-4 inline-block">
                <p className="text-xl font-bold text-gray-800">{zelleEmail}</p>
              </div>
            </div>

            <button
              onClick={copyToClipboard}
              className="w-full bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-800 hover:via-yellow-700 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Zelle
                </>
              )}
            </button>
          </div>

          {/* QR Code Section */}
          <div className="text-center mb-6">
            <p className="text-gray-700 font-medium mb-4">Or scan this QR code:</p>
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block border-4 border-amber-200">
              <img 
                src="/zelle email.png" 
                alt="Zelle QR Code" 
                className="w-96 h-96 object-contain"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Payment Instructions
            </h4>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">1.</span>
                <span>Open your Zelle app or mobile banking app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">2.</span>
                <span>Send $15 to <strong>{zelleEmail}</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">3.</span>
                <span>Include your name and appointment date in the note</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">4.</span>
                <span>Your appointment is confirmed once payment is received!</span>
              </li>
            </ol>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> This $15 deposit secures your appointment. The remaining balance will be paid in <strong>cash or Zelle</strong> on the day of your appointment.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8 bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-600 mb-2">Questions about your appointment?</p>
          <a 
            href="mailto:precious.touch@gmail.com"
            className="bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent font-semibold hover:from-amber-800 hover:to-yellow-700 transition-all"
          >
            precious.touch@gmail.com
          </a>
          <div className="mt-4">
            <a
              href="https://instagram.com/precious.touch__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @precious.touch__
            </a>
          </div>
        </div>

        {/* Return Home Button */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 text-white font-semibold py-3 px-8 rounded-full hover:from-amber-800 hover:via-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg"
          >
            ← Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}