import React, { useState, useEffect } from "react";

export default function Cookies() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    const declined = localStorage.getItem("cookiesDeclined");
    if (accepted === "true") setIsAccepted(true);
    if (declined === "true") setIsDeclined(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesDeclined", "true");
    setIsDeclined(true);
  };

  if (isAccepted || isDeclined) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-700 font-metric px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm z-50 border-t border-gray-300">
      <p className="max-w-xl text-center md:text-left leading-relaxed font-normal">
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our{" "}
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-600"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="/cookies"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-600"
        >
          Cookie Policy
        </a>.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleDecline}
          className="bg-gray-400 text-white px-4 py-2 rounded-full hover:bg-gray-500 transition"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{ backgroundColor: "#01a982" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#17b994")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1cd3a8")}
          className="text-white px-4 py-2 rounded-full transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
