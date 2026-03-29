import React from "react";

export default function ContactInfo() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center h-full">
      <h2 className="text-2xl font-extrabold mb-4">
        Fast. Affordable. Mobile.
      </h2>
      <p className="text-gray-300 mb-8 leading-relaxed">
        Don't want to fill out a form? No problem. Shoot me a text or a DM on
        social media and we'll get your repair scheduled right away.
      </p>

      <div className="space-y-4 mb-8">
        {/* Placeholder for actual phone number logic (href="sms:+1234567890") */}
        <a
          href="#"
          className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          <span className="text-xl">📱</span> Text Me Directly
        </a>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Connect on Socials
        </h3>
        <div className="flex flex-col gap-3">
          <a
            href="https://instagram.com/Bofixnc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Instagram: @Bofixnc
          </a>
          <a
            href="https://facebook.com/Bofix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Facebook: Bofix
          </a>
          <a
            href="https://tiktok.com/@bofixiphones"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            TikTok: @bofixiphones
          </a>
        </div>
      </div>
    </div>
  );
}
