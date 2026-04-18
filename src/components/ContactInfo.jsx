export default function ContactInfo() {
  // Bomani's Phone Number
  const phoneNumber = "9802331276";

  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center h-full">
      <h2 className="text-2xl font-extrabold mb-4">
        Fast. Affordable. Mobile.
      </h2>

      <p className="text-gray-300 mb-8 leading-relaxed">
        Don't want to fill out a form? No problem. Shoot me a text or a DM on
        social media and we'll get your repair scheduled right away.
      </p>

      {/* The Direct Messaging Action Area */}
      <div className="space-y-4 mb-8">
        {/* SMS Deep Link */}
        <a
          href={`sms:+1${phoneNumber}`}
          aria-label={`Send SMS to +1 ${phoneNumber}`}
          className="flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          <span className="text-xl">📱</span> Text Me Directly
        </a>

        {/* Optional: phone call fallback */}
        <a
          href={`tel:+1${phoneNumber}`}
          aria-label={`Call +1 ${phoneNumber}`}
          className="flex items-center justify-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          <span className="text-xl">📞</span> Call Me
        </a>
      </div>

      {/* Social Media Directory */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Connect on Socials
        </h3>

        <div className="flex flex-col gap-3">
          <a
            href="https://instagram.com/Bofix.nc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile Bofixnc (opens in new tab)"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2"
          >
            📸 Instagram: @Bofixnc
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61578538001572"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook page Bofix (opens in new tab)"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2"
          >
            📘 Facebook: Bofix
          </a>

          <a
            href="https://www.tiktok.com/@bofixiphones"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok profile bofixiphones (opens in new tab)"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2"
          >
            🎵 TikTok: @bofixiphones
          </a>
        </div>
      </div>
    </div>
  );
}
