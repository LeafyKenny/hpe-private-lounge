import React, { useState, useEffect } from "react";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading duration 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="fixed inset-0 flex flex-col justify-center items-center px-4"
        style={{ backgroundColor: "#ffffff", zIndex: 9999 }}
      >
        {/* Logo */}
        <img
          src="/assets/FED17427-9067-4CD4-A168-ECFB56E564D2.png"
          alt="Logo"
          className="mb-8 w-full max-w-xs sm:max-w-md md:max-w-lg"
          style={{ height: "auto" }}
        />

        {/* Loading Bar Container */}
        <div
          className="h-2 rounded overflow-hidden w-full max-w-xs sm:max-w-md md:max-w-lg"
          style={{ backgroundColor: "#d1d5db" }} // Tailwind gray-300
        >
          {/* Animated Loading Bar */}
          <div
            className="h-full"
            style={{
              backgroundColor: "#073634",
              animation: "loading-bar 2s ease-in-out forwards",
              width: 0,
            }}
          ></div>
        </div>

        <style>{`
          @keyframes loading-bar {
            0% { width: 0%; }
            45% { width: 50%; }
            55% { width: 50%; } /* pause */
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
